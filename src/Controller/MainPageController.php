<?php

namespace App\Controller;

use App\Entity\Movie;
use App\Repository\MovieRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainPageController extends AbstractController 
{
    //private $mainTitle = "Moja Filmoteka";
    
    private array $messages = [
        "Hello", "Hi", "Bye"
    ];
    
    #[Route('/', name: 'app_index')]
    public function index(): Response
    {
        return $this->render('hello/index.html.twig');
    }

    #[Route('/messages/{id<\d+>}', name: 'app_show_one')]
    public function showOne(int $id): Response
    {
        return $this->render('hello/show_one.html.twig', [
                'message' => $this->messages[$id]
        ]);
    }

    #[Route('/movies', name: 'app_show_movies')]
    public function myList(MovieRepository $movies): Response
    {
        //dd($movies->findAll());
        return $this->render('review/index.html.twig', [
                'movies' => $movies->findAll()
        ]);
    }

    #[Route('/movies/{movie}', name: 'app_show_movies_test')]
    public function test(Movie $movie): Response
    {
        //dd($movie);
        return $this->render('review/show.html.twig', [
                'movie' => $movie
        ]);
    }

    
}