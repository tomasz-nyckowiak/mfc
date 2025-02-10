<?php

namespace App\Controller;

use App\Entity\User;
use App\Model\Auxiliary;
use App\Security\EmailVerifier;
use App\Form\RegistrationFormType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\UserProfileRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class RegistrationController extends AbstractController
{
    private EmailVerifier $emailVerifier;

    public function __construct(EmailVerifier $emailVerifier)
    {
        $this->emailVerifier = $emailVerifier;
    }

    #[Route('/register', name: 'app_register')]
    public function register(
        Request $request,
        UserPasswordHasherInterface $userPasswordHasher,
        UserProfileRepository $profiles,
        EntityManagerInterface $entityManager): Response
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_USER')) {
            return $this->redirectToRoute('app_index');
        } else {        
            $user = new User();
            $form = $this->createForm(RegistrationFormType::class, $user);
            $form->handleRequest($request);

            $formIsValid = true;
            $errors = [];

            if ($form->isSubmitted() && $form->isValid()) {
                //Encode the plain password
                $user->setPassword(
                    $userPasswordHasher->hashPassword(
                        $user,
                        $form->get('plainPassword')->getData()
                    )
                );

                $entityManager->persist($user);
                $entityManager->flush();            
                
                $memberSince = Auxiliary::getTodaysDate();
                $profiles->setMemmberSinceProperty($user->getId(), $memberSince);

                return $this->redirectToRoute('app_register_success');
            } else {
                $formIsValid = false;                

                foreach ($form->getErrors(true) as $error) {
                    $msg = $error->getMessage();
                    $errors[] = $msg;
                }
            }

            return $this->render('registration/register.html.twig', [
                'formIsValid' => $formIsValid,
                'errors' => $errors,
                'registrationForm' => $form->createView()
            ]);
        }
    }

    #[Route('/verify/email', name: 'app_verify_email')]
    public function verifyUserEmail(Request $request, UserRepository $users): Response
    {        
        $id = $request->query->get('id');

        if (null === $id) {
            return $this->redirectToRoute('app_index');
        }

        $user = $users->find($id);

        if (null === $user) {
            return $this->redirectToRoute('app_index');
        }        
    }

    #[Route('/register/success', name: 'app_register_success')]
    public function registerSuccess(): Response
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_USER')) {
            return $this->redirectToRoute('app_index');
        } else return $this->render('registration/success.html.twig');        
    }
}