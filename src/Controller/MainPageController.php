<?php

namespace App\Controller;

use App\Entity\Movie;
use App\Entity\Review;
use App\Entity\User;
use App\Entity\UserProfile;
use App\Form\MovieType;
use App\Repository\MovieRepository;
use App\Repository\ReviewRepository;
use App\Repository\UserProfileRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainPageController extends AbstractController 
{    
    #[Route('/', name: 'app_index')]
    public function index(MovieRepository $movies, ReviewRepository $reviews): Response
    {
        $movie = $movies->find(5);
        
        $review = new Review();
        $review->setText('Moja pierwsza recenzja!');        
        $review->setMovie($movie);
        //$movie->addReview($review);
        //$movies->add($movie, true);
        $reviews->add($review, true);
        
        return $this->render('hello/index.html.twig');
    }

    #[Route('/movies', name: 'app_show_movies')]
    public function myList(MovieRepository $movies): Response
    {
        //dd($movies->findAll());
        return $this->render('movie/index.html.twig', [
                'movies' => $movies->findAll()
        ]);
    }

    #[Route('/movies/{movie}', name: 'app_movie_show')]
    public function test(Movie $movie): Response
    {
        //dd($movie);
        return $this->render('movie/show.html.twig', [
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
        
        return $this->renderForm('movie/edit.html.twig', [
                'form' => $form
        ]);
    }
}