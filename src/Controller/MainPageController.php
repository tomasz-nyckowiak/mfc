<?php

namespace App\Controller;

use App\Entity\Movie;
use App\Form\MovieType;
use App\Repository\MovieRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;
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
        return $this->render('movie/index.html.twig', [
                'movies' => $movies->findAll()
        ]);
    }

    #[Route('/movies/{movie}', name: 'app_show_movies_test')]
    public function test(Movie $movie): Response
    {
        //dd($movie);
        return $this->render('movie/index.html.twig', [
                'movie' => $movie
        ]);
    }
    
    #[Route('/movies/add', name: 'app_movies_add', priority: 2)]
    public function add(Request $request, MovieRepository $movies): Response
    {
        $form = $this->createForm(MovieType::class, new Movie());
        
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $movieData = $form->getData();
            //dd($movieData);
            
            $movies->add($movieData, true);

            //Add flash message
            $this->addFlash('success', 'Your film have been added');

            //Redirect
            return $this->redirectToRoute('app_show_movies');
        }
        
        return $this->renderForm('movie/add.html.twig', [
                'form' => $form
        ]);
    }
    
    #[Route('/movies/{movie}/edit', name: 'app_movies_edit')]
    public function edit(Movie $movie, Request $request, MovieRepository $movies): Response
    {
        $form = $this->createForm(MovieType::class, $movie);
        
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $movieData = $form->getData();
            
            $movies->add($movieData, true);

            //Add flash message
            $this->addFlash('success', 'Your film info have been updated');

            //Redirect
            return $this->redirectToRoute('app_show_movies');
        }
        
        return $this->renderForm('movie/add.html.twig', [
                'form' => $form
        ]);
    }
}