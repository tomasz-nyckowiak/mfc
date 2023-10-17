<?php

namespace App\Controller;

use App\Entity\User;
use App\Model\Model;
use App\Entity\Movie;
use App\Entity\Review;
use App\Form\MovieType;
use App\Model\Auxiliary;
use App\Service\Service;
use App\Entity\UserProfile;
use App\Repository\MovieRepository;
use App\Repository\ReviewRepository;
use App\Repository\UserProfileRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MainPageController extends AbstractController 
{    
    #[Route('/', name: 'app_index')]
    public function index(): Response
    {
        $service = new Service();
        $model = new Model();
        $other = new Auxiliary();

        $startYear = $other->setStartYear();
        $endYear = $other->setEndYear();
        
        // Preparing url
        $url = $service->creatingBasicUrlForUpcomingTitles($startYear, $endYear);
        
        // Get main info
        $urlBaseInfo = $service->creatingBaseInfoUrlForUpcomingTitles($url);

        $response = [];
        //$test = "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming&limit=5?info=base_info";
        $response = $service->search($urlBaseInfo);              
        
        // How many results we got
        $howManyOutcomes = $response['entries'];               
               
        $baseInfo = [];
        $baseInfo = $model->extractingMainDataForUpcomingTitles($response, $howManyOutcomes);       

        // Get cast
        // $urlExtendedCast = $service->creatingExtendedCastUrlForUpcomingTitles($url);
        // $response = $service->search($urlExtendedCast);
        // $mainCast = [];
        // $mainCast = $model->extractingMainCastForUpcomingTitles($response, $howManyOutcomes);

        // Merging all data arrays into one
        // for ($i = 0; $i < $howManyOutcomes; $i++) {
        //     $allData[$i] = array_merge($baseInfo[$i], $mainCast[$i]);
        // }
        
        //Randomize elements (titles)
        shuffle($baseInfo);
        //dd($baseInfo);
        
        return $this->render('hello/index.html.twig', [
            'data' => $baseInfo
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

    #[Route('/movies/{movie}', name: 'app_movie_show')]
    public function test(Movie $movie): Response
    {
        //dd($movie);
        return $this->render('movie/show.html.twig', [
                'movie' => $movie
        ]);
    }
    
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/movies/add', name: 'app_movies_add', priority: 2)]
    public function add(Request $request, MovieRepository $movies): Response
    {
        //dd($this->getUser());
        $form = $this->createForm(MovieType::class, new Movie());
        
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $movieData = $form->getData();
            //$movieData->setAuthor($this->getUser());
            
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