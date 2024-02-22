<?php

namespace App\Controller;

use App\Entity\User;
use App\Model\Favourites;
use App\Entity\FavouriteMovies;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\FavouriteMoviesRepository;
use App\Repository\TitleInformationRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class FavouritesController extends AbstractController
{
    #[Route('/favourites', name: 'app_favourites')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function index(FavouriteMoviesRepository $favourites): Response
    {                
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();        
        
        if ($favourites->checkIfRecordAlreadyExists($userId)) {
            $isTop10exists = true;
        } else $isTop10exists = false;
        
        return $this->render('favourites/favourites_main.html.twig', [
            'isTop10exists' => $isTop10exists
        ]);
    }

    #[Route('/favourites/show-top-ten', name: 'app_show_top_ten')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
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

    #[Route('/favourites/create-top-ten', name: 'app_create_top_ten')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
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
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
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

            $this->addFlash('success', 'Your TOP 10 movies list has been created!');
        
            $data = $favourites->findby(['user' => $userId]);

            return $this->render('favourites/favourite_movies_show.html.twig', [
                    'data' => $data,
                    'isTop10exists' => $isTop10exists
            ]);
        }              
    }

    #[Route('/favourites/edit-top-ten', name: 'app_edit_top_ten')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
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
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
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

            $this->addFlash('success', 'Your TOP 10 movies list has been updated!');
    
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
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function deleteTop10Movies(FavouriteMoviesRepository $favourites): Response
    {        
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();
        
        $listId = $favourites->getTop10MoviesListId($userId);
        $result = $favourites->findOneBy(['id' => $listId]);

        $favourites->remove($result, true);

        $this->addFlash('delete', 'Your TOP 10 has been successfully deleted!');
        
        return $this->redirectToRoute('app_favourites');      
    }
}

//TOP 5 TV SERIES STUFF

