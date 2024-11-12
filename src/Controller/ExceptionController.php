<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ExceptionController extends AbstractController
{
    #[Route('/exception', name: 'app_exception')]
    public function show(HttpException $exception): Response
    {
        $statusCode = $exception->getStatusCode();

        if ($statusCode != 404 && $statusCode != 500) {        
                
            return $this->render('exception/error.html.twig', [
                'message' => $exception->getMessage()
            ]);
        } else return $this->render('exception/error' . $statusCode . '.html.twig');
    }
}
