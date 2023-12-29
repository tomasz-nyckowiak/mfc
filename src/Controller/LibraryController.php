<?php

namespace App\Controller;

use App\Entity\User;
use App\Model\Model;
use App\Service\Service;
use App\Entity\TitleInformation;
use App\Form\TitleInformationType;
use App\Model\Add;
use App\Model\AddTitle;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\TitleInformationRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Validator\Constraints\NotEqualTo;

class LibraryController extends AbstractController
{  
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/library', name: 'app_library')]
    public function filmLibrary(TitleInformationRepository $titles): Response
    {
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();
        
        $data = $titles->findby(['user' => $userId]);

        //dd($data);
                
        return $this->render('library/default_list.html.twig', [
                'data' => $data,
        ]);
    }

    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/library/add/{id}', name: 'app_add_title')]
    public function addTitleToLibrary($id, TitleInformationRepository $titles): Response
    {        
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();

        $service = new Service();
        $model = new Model();
        
        //Preparing url
        $url = $service->creatingBasicUrlWithoutOptionalInfoForSingleEntry($id);
        
        // Get main info
        $urlBaseInfo = $service->creatingBaseInfoUrlForSingleEntry($url); 
        $response = $service->search($urlBaseInfo);       
        $baseInfo = [];
        $baseInfo = $model->extractingMainDataFromSingleEntry($response);

        // Get cast
        $urlExtendedCast = $service->creatingUrlForExtendedCastForSingleEntry($url);
        $response = $service->search($urlExtendedCast);
        $mainCast = [];
        $mainCast = $model->extractingMainCastFromSingleEntry($response);
        
        // Get makers (creator/s, director/s and writer/s)
        $urlCreators = $service->creatingUrlForCreatorsForSingleEntry($url);     
        $response = $service->search($urlCreators);
        $creators = [];
        $creators = $model->extractingCreatorsFromSingleEntry($response);

        // Merging all data arrays into one
        $data = array_merge($baseInfo, $mainCast, $creators);

        $title = new TitleInformation();

        $title->setUser($currentUser);
        $title->setOriginalTitle($data['originalTitle']);
        $title->setTitleType($data['titleType']);
        $title->setReleaseDate($data['releaseDate']['year']);
        
        if ($data['rating'] != null) {
            $title->setImdbRating($data['rating']);
        }        
        if ($data['image'] != null) {
            $title->setImageUrl($data['image']);
        }
        if ($data['runtime'] != null) {
            $title->setRuntime($data['runtime']);
        }
        if ($data['plot'] != null) {
            $title->setPlot($data['plot']);
        }        
        
        //GENRES
        if ($data['genres'] != null) {
            $genresAsString = implode(", ", $data['genres']);
            $title->setGenres($genresAsString);
        }        

        //CAST
        if ($data['cast'] != null) {
            $stars = array_slice($data['cast'], 0, 5);        
            
            $castAsString = "";
            for ($i = 0; $i < 5; $i++) {
                $castAsString = $castAsString . $stars[$i]['name'] . ", ";
            }
            $finalCast = substr($castAsString, 0, -2);            
            $title->setStars($finalCast);
        }        
        
        //CREATORS
        if ($data['creators'] != null) {
            if (count($data['creators']) > 1) {
                $creatorsAsString = implode(", ", $data['creators']);
                $title->setCreator($creatorsAsString);
            } else $title->setCreator($data['creators'][0]);
        }
        if ($data['directors'] != null) {
            if (count($data['directors']) > 1) {
                $directorsAsString = implode(", ", $data['directors']);
                $title->setDirector($directorsAsString);
            } else $title->setDirector($data['directors'][0]);            
        }
        if ($data['writers'] != null) {
            if (count($data['writers']) > 1) {
                $writersAsString = implode(", ", $data['writers']);
                $title->setWriter($writersAsString);
            } else $title->setWriter($data['writers'][0]);            
        }
        
        $userRating = null;

        $titles->add($title, true);
        
        $nowTitleIsInLibrary = true;
        
        return $this->render('title/details.html.twig', [
            'data' => $data,
            'alreadyExist' => $nowTitleIsInLibrary,
            'userRating' => $userRating
        ]);
    }

    //FORM FOR ADDING TITLE MANUALLY
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/library/addtitle', name: 'app_form_add_title_manually')]
    public function addTitleToLibraryManually(): Response
    {
        return $this->render('library/add_title_manually.html.twig');
    }
    
    //ADD TITLE MANUALLY
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/library/addtitle/success', name: 'app_add_title_manually_success')]
    public function addTitleManuallySuccess(TitleInformationRepository $titles): Response
    {
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();

        $newTitle = new AddTitle();
        $allData = $newTitle->addTitleManually();        
        
        $title = new TitleInformation();
        $title->setUser($currentUser);
        $title->setOriginalTitle($allData['title']);
        $title->setTitleType($allData['titleType']);
        
        //Genres
        if ($allData['genres'] != null) {
            $genresAsString = implode(", ", $allData['genres']);
            $title->setGenres($genresAsString);
        }

        //Creators
        $title->setCreator($allData['creators']);
        $title->setDirector($allData['directors']);
        $title->setWriter($allData['writers']);

        //Cast
        $title->setStars($allData['cast']);

        $title->setRuntime($allData['runtime']);
        $title->setReleaseDate($allData['releaseDate']);
        $title->setRating($allData['rating']);
        $title->setImdbRating($allData['imdbRating']);
        $title->setPlot($allData['plot']);
        $title->setImageUrl($allData['imageUrl']);
        $title->setToWatch($allData['toWatch']);
        $title->setReview($allData['review']);

        $result = $titles->checkIfTitleAlreadyExistInLibraryForCurrentUser($userId, $allData['title'], $allData['titleType']);

        if (!$result) {
            //$isTitleAlreadyInLibrary = false;
            $message = "Title " . $allData['title'] . " has been successfully added to your library!";
            $this->addFlash('success', $message);
            $titles->add($title, true);
        } else {
            //$isTitleAlreadyInLibrary = true;
            $message = "Title " . $allData['title'] . " is already in your library!";
            $this->addFlash('fail', $message);
        }

        //dd($isTitleAlreadyInLibrary);        
        
        return $this->render('library/add_title_manually.html.twig');
    }

    //ADD/EDIT STUFF
    #[Route('/library/edit/{id}', name: 'app_library_edit_title')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function editTitle($id, TitleInformationRepository $titles): Response
    {        
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();        

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $rating = $_POST['rating'];
            $review = $_POST['review'];
            
            if (isset($_POST['toWatch'])) {
                $toWatch = 1;
            } else $toWatch = "";                       

            $titles->addToLibrary($id, $rating, $review, $toWatch);

            $this->addFlash('success', 'Title has been updated!');
            
            $data = $titles->findby(['user' => $userId]);

            return $this->render('library/default_list.html.twig', [
                    'data' => $data,
                    'id' => $id
            ]);
        }       
    }
    
    //DELETE TITLE
    #[Route('/library/delete/{id}', name: 'app_library_remove_title')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function deleteTitle($id, TitleInformationRepository $titles): Response
    {        
        $result = $titles->findOneBy(['id' => $id]);
        $titleToRemove = $result->getOriginalTitle();
        $message = "Title " . $titleToRemove . " has been successfully removed from your library!";

        $titles->remove($result, true);

        $this->addFlash('delete', $message);
        
        return $this->redirectToRoute('app_library');      
    }

    //LIBRARY LIST FILTER BY TITLE
    #[Route('/library/title', name: 'app_library_title_filter')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function filterLibraryByTitle(TitleInformationRepository $titles): Response
    {        
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();
        
        $data = $titles->findby(['user' => $userId], ['originalTitle' => 'ASC']);
        
        return $this->render('library/default_list.html.twig', [
            'data' => $data,
            'title' => 'Title'
        ]);      
    }

    //LIBRARY LIST FILTER BY TITLETYPE (MOVIE)
    #[Route('/library/titletype/movie', name: 'app_library_titletype_movie_filter')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function filterLibraryByTitleTypeMovie(TitleInformationRepository $titles): Response
    {        
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();
        
        $data = $titles->findby(['user' => $userId, 'titleType' => 'Movie']);
        
        return $this->render('library/default_list.html.twig', [
            'data' => $data,
            'typeMovie' => 'Movie'
        ]);      
    }

    //LIBRARY LIST FILTER BY TITLETYPE (TV SERIES)
    #[Route('/library/titletype/tvseries', name: 'app_library_titletype_tvseries_filter')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function filterLibraryByTitleTypeTvSeries(TitleInformationRepository $titles): Response
    {        
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();
        
        $data = $titles->findby(['user' => $userId, 'titleType' => 'Tv Series']);
        
        return $this->render('library/default_list.html.twig', [
            'data' => $data,
            'typeSeries' => 'Tv Series'
        ]);      
    }

    //LIBRARY LIST FILTER BY TITLETYPE (OTHER)
    #[Route('/library/titletype/other', name: 'app_library_titletype_other_filter')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function filterLibraryByTitleTypeOther(TitleInformationRepository $titles): Response
    {        
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();
        
        $data = $titles->findAllOtherThanMovieAndTvSeries($userId);

        return $this->render('library/default_list.html.twig', [
            'data' => $data,
            'typeOther' => 'Type: Other'
        ]);      
    }

    //LIBRARY LIST FILTER BY RATING (ASC)
    #[Route('/library/rating/asc', name: 'app_library_rating_asc_filter')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function filterLibraryByRatingAsc(TitleInformationRepository $titles): Response
    {        
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();
        
        $data = $titles->findby(['user' => $userId], ['rating' => 'ASC']);

        return $this->render('library/default_list.html.twig', [
            'data' => $data,
            'ratASC' => 'Rating (ASC)'
        ]);      
    }

    //LIBRARY LIST FILTER BY RATING (DESC)
    #[Route('/library/rating/desc', name: 'app_library_rating_desc_filter')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function filterLibraryByRatingDesc(TitleInformationRepository $titles): Response
    {        
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();
        
        $data = $titles->findby(['user' => $userId], ['rating' => 'DESC']);

        return $this->render('library/default_list.html.twig', [
            'data' => $data,
            'ratDESC' => 'Rating (DESC)'
        ]);      
    }

    //LIBRARY LIST FILTER BY IMDB RATING (ASC)
    #[Route('/library/imdbrating/asc', name: 'app_library_imdbrating_asc_filter')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function filterLibraryByImdbRatingAsc(TitleInformationRepository $titles): Response
    {        
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();

        $data = $titles->findby(['user' => $userId], ['ImdbRating' => 'ASC']);

        return $this->render('library/default_list.html.twig', [
            'data' => $data,
            'imdbRatASC' => 'IMDb Rating (ASC)'
        ]);      
    }

    //LIBRARY LIST FILTER BY IMDB RATING (DESC)
    #[Route('/library/imdbrating/desc', name: 'app_library_imdbrating_desc_filter')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function filterLibraryByImdbRatingDesc(TitleInformationRepository $titles): Response
    {        
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();

        $data = $titles->findby(['user' => $userId], ['ImdbRating' => 'DESC']);

        return $this->render('library/default_list.html.twig', [
            'data' => $data,
            'imdbRatDESC' => 'IMDb Rating (DESC)'
        ]);      
    }

    //LIBRARY LIST FILTER BY TOWATCH
    #[Route('/library/toWatch', name: 'app_library_towatch_filter')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function filterLibraryByToWatch(TitleInformationRepository $titles): Response
    {        
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();
        
        $data = $titles->findby(['user' => $userId, 'toWatch' => true]);
        
        return $this->render('library/default_list.html.twig', [
            'data' => $data,
            'toWatch' => 'To Watch'
        ]);      
    }

    //UPDATE IMDB RATING & IMAGE
    #[Route('/library/update/{id}', name: 'app_library_update')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function updateImdbRatingAndImage($id, TitleInformationRepository $titles): Response
    {        
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();
        
        $service = new Service();
        $model = new Model();

        $result = $titles->findOneBy(['id' => $id]);
        $titleToUpdate = $result->getOriginalTitle();

        //Preparing url
        $updatedTitle = $service->preparingUserInput($titleToUpdate);
        $url = $service->creatingUrlForTitleUpdate($updatedTitle);
        
        // Get info
        $response = $service->search($url);
        //dd($response);
        if ($response['entries'] == 1) {
            $baseInfo = [];
            $baseInfo = $model->extractingNeededData($response);
            
            $imdbRating = $baseInfo['rating'];
            $imageUrl = $baseInfo['image'];

            $result->setImdbRating($imdbRating);
            $result->setImageUrl($imageUrl);

            $titles->add($result, true);

            $this->addFlash('success', 'Title has been updated!');

            $data = $titles->findby(['user' => $userId]);
            
            return $this->render('library/default_list.html.twig', [
                'data' => $data,
                'id' => $id
            ]);
        } else {
            $this->addFlash('fail', 'Update failed! This title was not found in the IMDb database!');

            $data = $titles->findby(['user' => $userId]);
            
            return $this->render('library/default_list.html.twig', [
                'data' => $data,
                'id' => $id
            ]);
        }              
    }
}
