<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\UserProfile;
use App\Form\UserProfileType;
use App\Repository\UserRepository;
use App\Form\ChangePasswordFormType;
use App\Repository\FavouriteMoviesRepository;
use App\Repository\FavouriteSeriesRepository;
use App\Repository\TitleInformationRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\UserProfileRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[IsGranted('IS_AUTHENTICATED_FULLY')]
class SettingsProfileController extends AbstractController
{
    #[Route('/profile', name: 'app_profile')]
    public function profile(
        Request $request,
        UserProfileRepository $profiles,
        UserPasswordHasherInterface $passwordHasher,
        EntityManagerInterface $entityManager,
        #[Autowire('%image_dir%')] string $imageDir): Response
    {
        /** @var User $user */
        $user = $this->getUser();
        $userId = $user->getId();
        $userProfile = $user->getUserProfile() ?? new UserProfile();

        $rememberUserName = $userProfile->getName();
        $rememberUserWebsiteUrl = $userProfile->getWebsiteUrl();

        $form1 = $this->createForm(UserProfileType::class, $userProfile);
        $form1->handleRequest($request);

        $form2 = $this->createForm(ChangePasswordFormType::class);
        $form2->handleRequest($request);

        $form1IsSubmitted = true;
        $form1IsValid = true;
        $form2IsSubmitted = true;
        $form2IsValid = true;
        $errors = [];

        if ($form1->isSubmitted()) {
            if ($form1->isValid()) {
                $userProfile = $form1->getData();
                $newUserName = $userProfile->getName();
                $newWebsiteUrl = $userProfile->getWebsiteUrl();
                
                if ($image = $form1['avatar']->getData()) {
                    $fileName = uniqid().'.'.$image->guessExtension();
                    $image->move($imageDir, $fileName);
                } else $fileName = null;
                
                $profiles->updateProfile($userId, $newUserName, $newWebsiteUrl, $fileName);
                $this->addFlash('success', 'Your profile changes were saved!');

                return $this->redirectToRoute('app_profile');
            } else {
                $form1IsValid = false;                

                foreach ($form1->getErrors(true) as $error) {
                    $msg = $error->getMessage();
                    $errors[] = $msg;
                }
            }
        } else $form1IsSubmitted = false;

        if ($form2->isSubmitted()) {
            if ($form2->isValid()) {
                $encodedPassword = $passwordHasher->hashPassword(
                    $user,
                    $form2->get('plainPassword')->getData()
                );
                
                $user->setPassword($encodedPassword);
                $entityManager->flush();
                $this->addFlash('success', 'Your new password has been set!');

                return $this->redirectToRoute('app_profile');
            } else {
                $form2IsValid = false;

                foreach ($form2->getErrors(true) as $error) {
                    $msg = $error->getMessage();
                    $errors[] = $msg;
                }
            }
        } else $form2IsSubmitted = false;
        
        return $this->render('profile/settings.html.twig', [
            'userProfile' => $userProfile,
            'rememberUserName' => $rememberUserName,
            'rememberUserWebsiteUrl' => $rememberUserWebsiteUrl,
            'form1IsSubmitted' => $form1IsSubmitted,
            'form1IsValid' => $form1IsValid,
            'form2IsSubmitted' => $form2IsSubmitted,
            'form2IsValid' => $form2IsValid,
            'errors' => $errors,
            'changeProfileForm' => $form1->createView(),            
            'changePasswordForm' => $form2->createView(),
        ]);
    }

    #[Route('/profile/delete-account/{id}', name: 'app_delete_account')]
    public function deleteAccount(
        $id, 
        UserProfileRepository $profiles, 
        UserRepository $users,
        TitleInformationRepository $titles,
        FavouriteMoviesRepository $favMovies,
        FavouriteSeriesRepository $favSeries): Response 
    {
        /** @var User $user */
        $user = $this->getUser();
        $userId = $user->getId();
        
        $removingProfile = $profiles->findOneBy(['id' => $id]);

        if ($favMovies->findBy(['user' => $userId])) {
            $listId = $favMovies->getTop10MoviesListId($userId);
            $result = $favMovies->findOneBy(['id' => $listId]);

            $favMovies->remove($result, true);            
        }
        
        if ($favSeries->findBy(['user' => $userId])) {
            $listId = $favSeries->getTop5SeriesListId($userId);
            $result = $favSeries->findOneBy(['id' => $listId]);

            $favSeries->remove($result, true);
        }
        
        $titles->removingAllTitlesByUserId($userId);
        $profiles->remove($removingProfile, true);
        $users->remove($user, true);
        
        return $this->redirectToRoute('app_logout');
        //return $this->redirectToRoute('app_index');
    }
}
