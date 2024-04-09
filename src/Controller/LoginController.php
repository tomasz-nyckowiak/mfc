<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class LoginController extends AbstractController
{
    #[Route('/login', name: 'app_login')]
    public function index(AuthenticationUtils $utils, Request $request): Response 
    {
        $lastUsername = $utils->getLastUsername();
        $error = $utils->getLastAuthenticationError();
        $lastVisitedPage = $request->headers->get('referer');        

        return $this->render('login/login.html.twig', [
            'lastUsername' => $lastUsername,
            'error' => $error,
            'lastVisitedPage' => $lastVisitedPage
        ]);
    }

    #[Route('/logout', name: 'app_logout')]
    public function logout()
    {
    }
}
