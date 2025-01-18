<?php

namespace App\Controller;

use App\Entity\User;
use App\Model\Auxiliary;
use App\Security\EmailVerifier;
use App\Form\RegistrationFormType;
use App\Repository\UserRepository;
use Symfony\Component\Mime\Address;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\UserProfileRepository;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use SymfonyCasts\Bundle\VerifyEmail\Exception\ExpiredSignatureException;
use SymfonyCasts\Bundle\VerifyEmail\Exception\VerifyEmailExceptionInterface;

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

                //Generate a signed url and email it to the user
                $this->emailVerifier->sendEmailConfirmation('app_verify_email', $user,
                    (new TemplatedEmail())
                        ->from(new Address('accounts@mfc.com', 'My Film Collection'))
                        ->to($user->getEmail())
                        ->subject('Please confirm your email')
                        ->htmlTemplate('registration/confirmation_email.html.twig')
                );

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
    public function verifyUserEmail(
        Request $request,
        UserProfileRepository $profiles,
        UserRepository $users): Response
    {        
        $id = $request->query->get('id');

        if (null === $id) {
            return $this->redirectToRoute('app_index');
        }

        $user = $users->find($id);

        if (null === $user) {
            return $this->redirectToRoute('app_index');
        }

        try {
            $this->emailVerifier->handleEmailConfirmation($request, $user);            
            
            return $this->redirectToRoute('app_register_activated');            
        } catch (ExpiredSignatureException $expiredException) {
            //We remove the user from the database, as the token has expired
            //This allows the user to re-register and resend the email with the confirmation link
            $removingProfile = $profiles->findOneBy(['user' => $id]);
            $profiles->remove($removingProfile, true);
            $users->remove($user, true);
            
            $this->addFlash('fail', 'The link to verify your email has expired. Please re-register to get a new link.');
            
            return $this->redirectToRoute('app_register');            
        } catch (VerifyEmailExceptionInterface $exception) {
            $this->addFlash('fail', $exception->getReason());            
            
            return $this->redirectToRoute('app_register');
        }
    }

    #[Route('/register/success', name: 'app_register_success')]
    public function registerSuccess(): Response
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_USER')) {
            return $this->redirectToRoute('app_index');
        } else return $this->render('registration/success.html.twig');        
    }

    #[Route('/register/activated', name: 'app_register_activated')]
    public function registerActivated(): Response
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_USER')) {
            return $this->redirectToRoute('app_index');
        } else return $this->render('registration/activated.html.twig');        
    }
}