<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\MovieRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProfileController extends AbstractController
{
    #[Route('/profile/{id}', name: 'app_profile')]
    public function show(User $user, MovieRepository $movies): Response
    {
        return $this->render('profile/show.html.twig', [
            'user' => $user,
            //'reviews' => $movies->findAllByAuthor($user)
        ]);
    }
}
