<?php

namespace App\Controller;

use App\Entity\User;
use App\Model\Favourites;
use App\Entity\FavouriteMovies;
use App\Entity\FavouriteSeries;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\FavouriteMoviesRepository;
use App\Repository\FavouriteSeriesRepository;
use App\Repository\TitleInformationRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[IsGranted('IS_AUTHENTICATED_FULLY')]
class FavouritesController extends AbstractController
{
    #[Route('/favourites', name: 'app_favourites')]    
    public function index(FavouriteMoviesRepository $favouriteMovies, FavouriteSeriesRepository $favouriteSeries): Response
    {                
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();        
        
        if ($favouriteMovies->checkIfRecordAlreadyExists($userId)) {
            $isTop10exists = true;
        } else $isTop10exists = false;

        if ($favouriteSeries->checkIfRecordAlreadyExists($userId)) {
            $isTop5exists = true;
        } else $isTop5exists = false;
        
        return $this->render('favourites/favourites_index.html.twig', [
            'isTop10exists' => $isTop10exists,
            'isTop5exists' => $isTop5exists
        ]);
    }

    //TOP 10 MOVIES STUFF
    #[Route('/favourites/create-top-ten', name: 'app_create_top_ten')]
    public function createTop10Movies(TitleInformationRepository $titles, FavouriteMoviesRepository $favourites): Response
    {
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();

        if ($favourites->checkIfRecordAlreadyExists($userId)) {
            $isTop10exists = true;
            
            return $this->redirectToRoute('app_favourites');
        } else {
            $isTop10exists = false;        
        
            $data = $titles->findby(['user' => $userId, 'titleType' => 'Movie']);
                    
            return $this->render('favourites/favourite_movies_create.html.twig', [
                    'data' => $data,
                    'isTop10exists' => $isTop10exists
            ]);
        }
    }

    #[Route('/favourites/create-top-ten-success', name: 'app_create_top_ten_success')]
    public function createTop10MoviesSuccess(FavouriteMoviesRepository $favourites): Response
    {        
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();

        if ($favourites->checkIfRecordAlreadyExists($userId)) {
            $isTop10exists = true;
            
            return $this->redirectToRoute('app_favourites');
        } else {
            $isTop10exists = false;
            
            $top10Movies = new Favourites();
            $allData = $top10Movies->addTop10();

            $list = new FavouriteMovies();
            $list->setUser($currentUser);
            $list->setFirst($allData["1."]);
            $list->setSecond($allData["2."]);
            $list->setThird($allData["3."]);
            $list->setFourth($allData["4."]);
            $list->setFifth($allData["5."]);
            $list->setSixth($allData["6."]);
            $list->setSeventh($allData["7."]);
            $list->setEighth($allData["8."]);
            $list->setNinth($allData["9."]);
            $list->setTenth($allData["10."]);
            $list->setTypeOfList($allData["typeOfList"]);
            
            $favourites->createList($list, true);

            $this->addFlash('success', 'Your TOP 10 MOVIES list has been created!');
        
            $data = $favourites->findby(['user' => $userId]);

            return $this->render('favourites/favourite_movies_show.html.twig', [
                    'data' => $data,
                    'isTop10exists' => $isTop10exists
            ]);
        }              
    }

    #[Route('/favourites/show-top-ten', name: 'app_show_top_ten')]
    public function showTop10Movies(FavouriteMoviesRepository $favourites): Response
    {
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();
        
        if ($favourites->checkIfRecordAlreadyExists($userId)) {
            $isTop10exists = true;

            $data = $favourites->findby(['user' => $userId]);
            
            return $this->render('favourites/favourite_movies_show.html.twig', [
                'data' => $data,
                'isTop10exists' => $isTop10exists
            ]);            
        } else {
            $isTop10exists = false;

            return $this->redirectToRoute('app_favourites');
        }
    }

    #[Route('/favourites/edit-top-ten', name: 'app_edit_top_ten')]
    public function editTop10Movies(TitleInformationRepository $titles, FavouriteMoviesRepository $favourites): Response
    {
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();

        if ($favourites->checkIfRecordAlreadyExists($userId)) {
            $isTop10exists = true;
            
            $top10list = $favourites->gettingTop10($userId);
            $data = $titles->findby(['user' => $userId, 'titleType' => 'Movie']);
                    
            return $this->render('favourites/favourite_movies_edit.html.twig', [
                    'data' => $data,
                    'top10' => $top10list,
                    'isTop10exists' => $isTop10exists
            ]);
        } else {
            $isTop10exists = false;
            
            return $this->redirectToRoute('app_favourites');
        }
    }

    #[Route('/favourites/edit-top-ten-success', name: 'app_edit_top_ten_success')]
    public function editTop10MoviesSuccess(FavouriteMoviesRepository $favourites, EntityManagerInterface $entityManager): Response
    {        
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();

        if ($favourites->checkIfRecordAlreadyExists($userId)) {
            $isTop10exists = true;
            
            $listId = $favourites->getTop10MoviesListId($userId);
            $updateTop10List = $entityManager->getRepository(FavouriteMovies::class)->find($listId);

            $top10Movies = new Favourites();
            $allData = $top10Movies->updateTop10();

            $updateTop10List->setFirst($allData["1."]);        
            $updateTop10List->setSecond($allData["2."]);
            $updateTop10List->setThird($allData["3."]);
            $updateTop10List->setFourth($allData["4."]);
            $updateTop10List->setFifth($allData["5."]);
            $updateTop10List->setSixth($allData["6."]);
            $updateTop10List->setSeventh($allData["7."]);
            $updateTop10List->setEighth($allData["8."]);
            $updateTop10List->setNinth($allData["9."]);
            $updateTop10List->setTenth($allData["10."]);
            $updateTop10List->setTypeOfList(($allData["typeOfList"]));

            $entityManager->flush();

            $this->addFlash('success', 'Your TOP 10 MOVIES list has been updated!');
    
            $data = $favourites->findby(['user' => $userId]);       

            return $this->render('favourites/favourite_movies_show.html.twig', [
                    'data' => $data,
                    'isTop10exists' => $isTop10exists
            ]);
        } else {
            $isTop10exists = false;

            return $this->redirectToRoute('app_favourites');
        }            
    }

    #[Route('/favourites/delete-top-ten', name: 'app_delete_top_ten')]
    public function deleteTop10Movies(FavouriteMoviesRepository $favourites): Response
    {        
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();
        
        $listId = $favourites->getTop10MoviesListId($userId);
        $result = $favourites->findOneBy(['id' => $listId]);

        $favourites->remove($result, true);

        $this->addFlash('delete', 'Your TOP 10 MOVIES list has been successfully deleted!');
        
        return $this->redirectToRoute('app_favourites');      
    }
    //  ...  //
    
    //TOP 5 TV SERIES STUFF
    #[Route('/favourites/create-top-five', name: 'app_create_top_five')]
    public function createTop5Series(TitleInformationRepository $titles, FavouriteSeriesRepository $favourites): Response
    {
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();

        if ($favourites->checkIfRecordAlreadyExists($userId)) {
            $isTop5exists = true;
            
            return $this->redirectToRoute('app_favourites');
        } else {
            $isTop5exists = false;        
        
            $data = $titles->findby(['user' => $userId, 'titleType' => 'Tv Series']);
                    
            return $this->render('favourites/favourite_series_create.html.twig', [
                    'data' => $data,
                    'isTop5exists' => $isTop5exists
            ]);
        }
    }

    #[Route('/favourites/create-top-five-success', name: 'app_create_top_five_success')]
    public function createTop5SeriesSuccess(FavouriteSeriesRepository $favourites): Response
    {        
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();

        if ($favourites->checkIfRecordAlreadyExists($userId)) {
            $isTop5exists = true;
            
            return $this->redirectToRoute('app_favourites');
        } else {
            $isTop5exists = false;
            
            $top5series = new Favourites();
            $allData = $top5series->addTop5Series();

            $list = new FavouriteSeries();
            $list->setUser($currentUser);
            $list->setFirst($allData["1."]);
            $list->setSecond($allData["2."]);
            $list->setThird($allData["3."]);
            $list->setFourth($allData["4."]);
            $list->setFifth($allData["5."]);
            $list->setTypeOfList($allData["typeOfList"]);
            
            $favourites->createList($list, true);

            $this->addFlash('success', 'Your TOP 5 TV SERIES list has been created!');
        
            $data = $favourites->findby(['user' => $userId]);

            return $this->render('favourites/favourite_series_show.html.twig', [
                    'data' => $data,
                    'isTop5exists' => $isTop5exists
            ]);
        }              
    }

    #[Route('/favourites/show-top-five', name: 'app_show_top_five')]
    public function showTop5TvSeries(FavouriteSeriesRepository $favourites): Response
    {
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();
        
        if ($favourites->checkIfRecordAlreadyExists($userId)) {
            $isTop5exists = true;

            $data = $favourites->findby(['user' => $userId]);
            
            return $this->render('favourites/favourite_series_show.html.twig', [
                'data' => $data,
                'isTop5exists' => $isTop5exists
            ]);            
        } else {
            $isTop5exists = false;

            return $this->redirectToRoute('app_favourites');
        }
    }

    #[Route('/favourites/edit-top-five', name: 'app_edit_top_five')]
    public function editTop5Series(TitleInformationRepository $titles, FavouriteSeriesRepository $favourites): Response
    {
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();

        if ($favourites->checkIfRecordAlreadyExists($userId)) {
            $isTop5exists = true;
            
            $top5list = $favourites->gettingTop5($userId);
            $data = $titles->findby(['user' => $userId, 'titleType' => 'Tv Series']);
                    
            return $this->render('favourites/favourite_series_edit.html.twig', [
                    'data' => $data,
                    'top5' => $top5list,
                    'isTop5exists' => $isTop5exists
            ]);
        } else {
            $isTop5exists = false;
            
            return $this->redirectToRoute('app_favourites');
        }
    }

    #[Route('/favourites/edit-top-five-success', name: 'app_edit_top_five_success')]
    public function editTop5SeriesSuccess(FavouriteSeriesRepository $favourites, EntityManagerInterface $entityManager): Response
    {        
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();

        if ($favourites->checkIfRecordAlreadyExists($userId)) {
            $isTop5exists = true;
            
            $listId = $favourites->getTop5SeriesListId($userId);
            $updateTop5List = $entityManager->getRepository(FavouriteSeries::class)->find($listId);

            $top5series = new Favourites();
            $allData = $top5series->updateTop5();

            $updateTop5List->setFirst($allData["1."]);        
            $updateTop5List->setSecond($allData["2."]);
            $updateTop5List->setThird($allData["3."]);
            $updateTop5List->setFourth($allData["4."]);
            $updateTop5List->setFifth($allData["5."]);
            $updateTop5List->setTypeOfList(($allData["typeOfList"]));

            $entityManager->flush();

            $this->addFlash('success', 'Your TOP 5 TV SERIES list has been updated!');
    
            $data = $favourites->findby(['user' => $userId]);       

            return $this->render('favourites/favourite_series_show.html.twig', [
                    'data' => $data,
                    'isTop5exists' => $isTop5exists
            ]);
        } else {
            $isTop5exists = false;

            return $this->redirectToRoute('app_favourites');
        }            
    }

    #[Route('/favourites/delete-top-five', name: 'app_delete_top_five')]
    public function deleteTop5Series(FavouriteSeriesRepository $favourites): Response
    {        
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();
        
        $listId = $favourites->getTop5SeriesListId($userId);
        $result = $favourites->findOneBy(['id' => $listId]);

        $favourites->remove($result, true);

        $this->addFlash('delete', 'Your TOP 5 TV SERIES has been successfully deleted!');
        
        return $this->redirectToRoute('app_favourites');      
    }
}
