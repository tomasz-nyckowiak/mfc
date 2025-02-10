<?php

namespace App\Controller;

use App\Entity\User;
use App\Model\Model;
use App\Model\AddTitle;
use App\Model\EditTitle;
use App\Service\Service;
use App\Entity\TitleInformation;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\FavouriteMoviesRepository;
use App\Repository\FavouriteSeriesRepository;
use App\Repository\TitleInformationRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[IsGranted('IS_AUTHENTICATED_FULLY')]
class LibraryController extends AbstractController
{    
    #[Route('/library', name: 'app_library')]
    public function index(TitleInformationRepository $titles): Response
    {
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();
        
        $data = $titles->findby(['user' => $userId]);
                
        return $this->render('library/default_list.html.twig', [
                'data' => $data,
        ]);
    }

    //ADD TITLE
    #[Route('/library/add/{id}', name: 'app_add_title')]
    public function addTitleToLibrary($id, TitleInformationRepository $titles): Response
    {        
        /** @var User $currentUser */
        $currentUser = $this->getUser();

        $service = new Service();
        $model = new Model();
        
        //Preparing url
        $url = $service->creatingBasicUrlWithoutOptionalInfoForSingleEntry($id);
        
        //Get main info
        $urlBaseInfo = $service->creatingBaseInfoUrlForSingleEntry($url); 
        $response = $service->search($urlBaseInfo);       
        $baseInfo = [];
        $baseInfo = $model->extractingMainDataFromSingleEntry($response);
        
        //Get cast
        $urlExtendedCast = $service->creatingUrlForExtendedCastForSingleEntry($url);
        $response = $service->search($urlExtendedCast);
        $mainCast = [];
        $mainCast = $model->extractingMainCastFromSingleEntry($response);
        
        //Get makers (creator/s, director/s and writer/s)
        $urlCreators = $service->creatingUrlForCreatorsForSingleEntry($url);     
        $response = $service->search($urlCreators);
        $creators = [];
        $creators = $model->extractingCreatorsFromSingleEntry($response);

        //Merging all data arrays into one
        $data = array_merge($baseInfo, $mainCast, $creators);
        
        $title = new TitleInformation();

        $title->setUser($currentUser);
        $title->setOriginalTitle($data['originalTitle']);
        $title->setTitleType($data['titleType']);
        
        if ($data['releaseDate']['endYear'] != null) {
            $startYear = $data['releaseDate']['year'];
            $endYear = $data['releaseDate']['endYear'];
            $relaseDate = $startYear . "-" . $endYear;
            $title->setReleaseDate($relaseDate);
        } else {
            if ($data['titleType'] == 'TV Series') {
                $relaseDate = $data['releaseDate']['year'] . "-";
                $title->setReleaseDate($relaseDate);
            } else $title->setReleaseDate($data['releaseDate']['year']);
        }        
        
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
        
        //Genres
        if ($data['genres'] != null) {
            $genresAsString = implode(", ", $data['genres']);
            $title->setGenres($genresAsString);
        }        

        //Cast
        if ($data['cast'] != null) {
            $stars = array_slice($data['cast'], 0, 5);        
            
            $castAsString = "";
            for ($i = 0; $i < 5; $i++) {
                $castAsString = $castAsString . $stars[$i]['name'] . ", ";
            }
            $finalCast = substr($castAsString, 0, -2);            
            $title->setStars($finalCast);
        }        
        
        //Creators
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

        $message = $data['originalTitle'];
        
        $this->addFlash('success', $message);
        
        $titles->add($title, true);

        return $this->redirectToRoute('app_details', [
            'id' => $id
        ]);
    }

    //ADD TITLE MANUALLY
    #[Route('/library/addtitle', name: 'app_form_add_title_manually')]
    public function addTitleToLibraryManually(): Response
    {
        return $this->render('library/add_title_manually.html.twig');
    }

    //ADD TITLE MANUALLY FAIL
    #[Route('/library/addtitle/fail', name: 'app_add_title_manually_fail')]
    public function addTitleManuallyFail(): Response
    {
        return $this->render('library/add_title_manually.html.twig');
    }
    
    //ADD TITLE MANUALLY SUCCESS
    #[Route('/library/addtitle/success', name: 'app_add_title_manually_success')]
    public function addTitleManuallySuccess(
        TitleInformationRepository $titles,
        #[Autowire('%titles_image_dir%')] string $imageDir): Response
    {
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();
        
        $newTitle = new AddTitle();
        $allData = $newTitle->addTitleManually();
        
        if ($tempName = $allData['imageData']['tmp_name']) {        
            $name = basename($allData['imageData']['name']);
            $pos = strrpos($name, '.');
            $ext = substr($name, $pos + 1);
            $fileName = uniqid().'.'.$ext;
            $allData['imageName'] = $fileName;
            move_uploaded_file($tempName, "$imageDir/$fileName");
        }            
        
        $title = new TitleInformation();
        $title->setUser($currentUser);
        $title->setOriginalTitle($allData['title']);
        $title->setTitleType($allData['titleType']);
        
        //Genres
        if ($allData['genres'] != null) {
            $genresAsString = implode(", ", $allData['genres']);
            $title->setGenres($genresAsString);
        } else $title->setGenres($allData['genres']);

        //Creators
        $title->setCreator($allData['creators']);
        $title->setDirector($allData['directors']);
        $title->setWriter($allData['writers']);

        $title->setStars($allData['cast']);
        $title->setRuntime($allData['runtime']);
        $title->setReleaseDate($allData['releaseDate']);
        $title->setRating($allData['rating']);
        $title->setImdbRating($allData['imdbRating']);
        $title->setPlot($allData['plot']);
        $title->setImageUrl($allData['imageName']);        
        $title->setToWatch($allData['toWatch']);
        $title->setReview($allData['review']);

        $result = $titles->checkIfTitleAlreadyExistInLibraryForCurrentUser($userId, $allData['title'], $allData['titleType']);

        if (!$result) {
            $message = $allData['title'];
            $this->addFlash('success', $message);
            $titles->add($title, true);

            return $this->render('library/add_title_manually.html.twig');
        } else {
            $message = $allData['title'];
            $this->addFlash('fail', $message);
            
            return $this->redirectToRoute('app_add_title_manually_fail');
        }        
    }

    //EDIT TITLE
    #[Route('/library/edit/{id}', name: 'app_library_edit_title')]
    public function editTitle(
        $id,
        TitleInformationRepository $titles,
        EntityManagerInterface $entityManager,
        #[Autowire('%titles_image_dir%')] string $imageDir): Response
    {        
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();
        
        $editTitle = new EditTitle();
        $allData = $editTitle->editTitle();        

        $title = $entityManager->getRepository(TitleInformation::class)->find($id);
        
        if (count($allData) > 3) {
            $title->setOriginalTitle($allData['title']);
            $title->setTitleType($allData['titleType']);
            
            if ($allData['genres'] != null) {
                $genresAsString = implode(", ", $allData['genres']);
                $title->setGenres($genresAsString);
            } else $title->setGenres($allData['genres']);
            
            $title->setDirector($allData['directors']);
            $title->setWriter($allData['writers']);
            $title->setCreator($allData['creators']);
            $title->setStars($allData['cast']);
            $title->setRuntime($allData['runtime']);
            $title->setReleaseDate($allData['releaseDate']);
            $title->setRating($allData['rating']);
            $title->setImdbRating($allData['imdbRating']);
            $title->setPlot($allData['plot']);

            if ($tempName = $allData['imageData']['tmp_name']) {        
                $name = basename($allData['imageData']['name']);
                $pos = strrpos($name, '.');
                $ext = substr($name, $pos + 1);
                $fileName = uniqid().'.'.$ext;
                $allData['imageName'] = $fileName;
                move_uploaded_file($tempName, "$imageDir/$fileName");

                $title->setImageUrl($allData['imageName']);
            }

            $title->setToWatch($allData['toWatch']);
            $title->setReview($allData['review']);
        } else {
            $title->setRating($allData['rating']);
            $title->setToWatch($allData['toWatch']);
            $title->setReview($allData['review']);
        }        

        $entityManager->flush();

        $this->addFlash('success', 'Title has been updated!');
        
        $data = $titles->findby(['user' => $userId]);

        return $this->render('library/default_list.html.twig', [
                'data' => $data,
                'id' => $id
        ]);
    }
    
    //DELETE TITLE
    #[Route('/library/delete/{id}', name: 'app_library_remove_title')]
    public function deleteTitle(
        $id,
        TitleInformationRepository $titles,
        FavouriteMoviesRepository $favouriteMovies,
        FavouriteSeriesRepository $favouriteSeries,
        #[Autowire('%titles_image_dir%')] string $imageDir): Response
    {        
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $userId = $currentUser->getId();
        
        $result = $titles->findOneBy(['id' => $id]);
        $titleToRemove = $result->getOriginalTitle();

        $message = "Title " . $titleToRemove . " has been successfully removed from your library!";

        //Title to remove could also be in TOP list, if is then we remove it from there too.
        if ($favouriteMovies->checkIfRecordAlreadyExists($userId)) {
            $data = $favouriteMovies->gettingTop10($userId);
            $whichColumn = "";

            foreach ($data as $key => $value) {
                if ($value == $titleToRemove) {
                    $titleIsInList = true;
                    $whichColumn = $key;
                    break;
                } else $titleIsInList = false;
            }

            if ($titleIsInList) {
                $listId = $favouriteMovies->getTop10MoviesListId($userId);
                $favouriteMovies->updateMovieListAfterRemovingTitleFromTheLibrary($listId, $whichColumn);
            } 
        }

        if ($favouriteSeries->checkIfRecordAlreadyExists($userId)) {
            $data = $favouriteSeries->gettingTop5($userId);
            $whichColumn = "";

            foreach ($data as $key => $value) {
                if ($value == $titleToRemove) {
                    $titleIsInList = true;
                    $whichColumn = $key;
                    break;
                } else $titleIsInList = false;
            }

            if ($titleIsInList) {
                $listId = $favouriteSeries->getTop5SeriesListId($userId);
                $favouriteSeries->updateTvSeriesListAfterRemovingTitleFromTheLibrary($listId, $whichColumn);
            } 
        }
        
        $titles->remove($result, true);
        
        //Removing title from database will not delete UPLOADED images - we need to do it manually!        
        $image = $result->getImageUrl();
        if ($image != "") {
            if (!str_starts_with($image, 'https')) {
                unlink("$imageDir/$image");
            }
        }        

        $this->addFlash('delete', $message);
        
        return $this->redirectToRoute('app_library');      
    }

    //LIBRARY LIST FILTERS\\

    //LIBRARY LIST FILTER BY TITLE
    #[Route('/library/title', name: 'app_library_title_filter')]
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
}