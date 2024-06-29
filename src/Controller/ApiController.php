<?php

namespace App\Controller;

use App\Entity\User;
use App\Model\Model;
use App\Service\Service;
use App\Repository\TitleInformationRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[IsGranted('IS_AUTHENTICATED_FULLY')]
class ApiController extends AbstractController
{    
    #[Route('/search', name: 'app_search')]
    public function index(Model $model): Response
    { 
        $userInputs = $model->managingTitleSearchFormInputs();
        
        $title = $userInputs['search'];
        $titleType = $userInputs['titleType'];
        $startYear = $userInputs['startYear'];
        $endYear = $userInputs['endYear'];

        //1. All inputs are present
        if (!$userInputs['isTitleTypeEmpty'] && !$userInputs['isStartYearEmpty'] && !$userInputs['isEndYearEmpty']) {
            return $this->redirectToRoute('app_show_search_result_title_titleType_startYear_endYear', [
                'title' => $title,
                'titleType' => $titleType,
                'startYear' => $startYear,
                'endYear' => $endYear
            ]);
        }
        //2. End year is empty
        if (!$userInputs['isTitleTypeEmpty'] && !$userInputs['isStartYearEmpty'] && $userInputs['isEndYearEmpty']) {
            return $this->redirectToRoute('app_show_search_result_title_titleType_startYear', [
                'title' => $title,
                'titleType' => $titleType,
                'startYear' => $startYear
            ]);
        }
        //3. Start year is empty
        if (!$userInputs['isTitleTypeEmpty'] && $userInputs['isStartYearEmpty'] && !$userInputs['isEndYearEmpty']) {
            return $this->redirectToRoute('app_show_search_result_title_titleType_endYear', [
                'title' => $title,
                'titleType' => $titleType,
                'endYear' => $endYear
            ]);
        }
        //4. Title type is empty
        if ($userInputs['isTitleTypeEmpty'] && !$userInputs['isStartYearEmpty'] && !$userInputs['isEndYearEmpty']) {
            return $this->redirectToRoute('app_show_search_result_title_startYear_endYear', [
                'title' => $title,
                'startYear' => $startYear,
                'endYear' => $endYear
            ]);
        }
        //5. Title type and start year are empty
        if ($userInputs['isTitleTypeEmpty'] && $userInputs['isStartYearEmpty'] && !$userInputs['isEndYearEmpty']) {
            return $this->redirectToRoute('app_show_search_result_title_endYear', [
                'title' => $title,
                'endYear' => $endYear
            ]);
        }
        //6. Title type and end year are empty
        if ($userInputs['isTitleTypeEmpty'] && !$userInputs['isStartYearEmpty'] && $userInputs['isEndYearEmpty']) {
            return $this->redirectToRoute('app_show_search_result_title_startYear', [
                'title' => $title,
                'startYear' => $startYear
            ]);
        }
        //7. Start year and end year are empty
        if (!$userInputs['isTitleTypeEmpty'] && $userInputs['isStartYearEmpty'] && $userInputs['isEndYearEmpty']) {
            return $this->redirectToRoute('app_show_search_result_title_titleType', [
                'title' => $title,
                'titleType' => $titleType
            ]);
        }
        //8. All inputs are empty (only required title)
        if ($userInputs['isTitleTypeEmpty'] && $userInputs['isStartYearEmpty'] && $userInputs['isEndYearEmpty']) {
            return $this->redirectToRoute('app_show_search_result_title', [
                'title' => $title
            ]);
        }
        
        return $this->render('api/no_results.html.twig');
    }

    #[Route('/search/{title}/{titleType}/releaseDate={startYear}-{endYear}', name: 'app_show_search_result_title_titleType_startYear_endYear')]
    public function findTitleWithTitleTypeAndStartYearAndEndYear($title, $titleType, $startYear, $endYear): Response
    {
        $service = new Service();
        $model = new Model();        

        $input = $service->preparingUserInput($title);

        //Preparing URL
        $url = $service->preparingUrlForSearchRequestWithTitleTypeAndStartYearAndEndYear($input, $titleType, $startYear, $endYear);                
        $response = [];
        $response = $service->search($url);
        
        //Drawing out most popular titles
        $popularTitles = $model->extractingMostPopularTitles($response);
        
        //Extracting data
        $popularTitlesInfo = [];
        if ($model->isArrayWithTitlesNotEmpty($popularTitles)) {
            $popularTitlesInfo = $model->extractingMainData($popularTitles);
        }       
        
        //Drawing out less popular titles
        $lessPopularTitles= $model->extractingLessPopularTitles($response);        

        //Extracting data
        $lessPopularTitlesInfo = [];
        if ($model->isArrayWithTitlesNotEmpty($lessPopularTitles)) {
            $lessPopularTitlesInfo = $model->extractingMainData($lessPopularTitles);
        }                

        //Sorting the array with popular titles
        $titlesByPopularity = $model->sortingTitlesByPopularity($popularTitlesInfo);
        
        return $this->render('api/search.html.twig', [            
            'title' => $title,
            'titleType' => $titleType,
            'popularTitlesData' => $titlesByPopularity,
            'lessPopularTitlesData' => $lessPopularTitlesInfo
        ]);
    }

    #[Route('/search/{title}/{titleType}/releaseDate={startYear}', name: 'app_show_search_result_title_titleType_startYear')]
    public function findTitleWithTitleTypeAndStartYear($title, $titleType, $startYear): Response
    {
        $service = new Service();
        $model = new Model();        

        $input = $service->preparingUserInput($title);

        //Preparing URL
        $url = $service->preparingUrlForSearchRequestWithTitleTypeAndStartYear($input, $titleType, $startYear);                
        $response = [];
        $response = $service->search($url);
        
        //Drawing out most popular titles
        $popularTitles = $model->extractingMostPopularTitles($response);
        
        //Extracting data
        $popularTitlesInfo = [];
        if ($model->isArrayWithTitlesNotEmpty($popularTitles)) {
            $popularTitlesInfo = $model->extractingMainData($popularTitles);
        }       
        
        //Drawing out less popular titles
        $lessPopularTitles= $model->extractingLessPopularTitles($response);        

        //Extracting data
        $lessPopularTitlesInfo = [];
        if ($model->isArrayWithTitlesNotEmpty($lessPopularTitles)) {
            $lessPopularTitlesInfo = $model->extractingMainData($lessPopularTitles);
        }                

        //Sorting the array with popular titles
        $titlesByPopularity = $model->sortingTitlesByPopularity($popularTitlesInfo);
        
        return $this->render('api/search.html.twig', [            
            'title' => $title,
            'titleType' => $titleType,
            'popularTitlesData' => $titlesByPopularity,
            'lessPopularTitlesData' => $lessPopularTitlesInfo
        ]);
    }

    #[Route('/search/{title}/{titleType}/releaseDate={endYear}', name: 'app_show_search_result_title_titleType_endYear')]
    public function findTitleWithTitleTypeAndEndYear($title, $titleType, $endYear): Response
    {
        $service = new Service();
        $model = new Model();        

        $input = $service->preparingUserInput($title);

        //Preparing URL
        $url = $service->preparingUrlForSearchRequestWithTitleTypeAndEndYear($input, $titleType, $endYear);                
        $response = [];
        $response = $service->search($url);
        
        //Drawing out most popular titles
        $popularTitles = $model->extractingMostPopularTitles($response);
        
        //Extracting data
        $popularTitlesInfo = [];
        if ($model->isArrayWithTitlesNotEmpty($popularTitles)) {
            $popularTitlesInfo = $model->extractingMainData($popularTitles);
        }       
        
        //Drawing out less popular titles
        $lessPopularTitles= $model->extractingLessPopularTitles($response);        

        //Extracting data
        $lessPopularTitlesInfo = [];
        if ($model->isArrayWithTitlesNotEmpty($lessPopularTitles)) {
            $lessPopularTitlesInfo = $model->extractingMainData($lessPopularTitles);
        }                

        //Sorting the array with popular titles
        $titlesByPopularity = $model->sortingTitlesByPopularity($popularTitlesInfo);
        
        return $this->render('api/search.html.twig', [            
            'title' => $title,
            'titleType' => $titleType,
            'popularTitlesData' => $titlesByPopularity,
            'lessPopularTitlesData' => $lessPopularTitlesInfo
        ]);
    }

    #[Route('/search/{title}/releaseDate={startYear}-{endYear}', name: 'app_show_search_result_title_startYear_endYear')]
    public function findTitleWithStartYearAndEndYear($title, $startYear, $endYear): Response
    {
        $service = new Service();
        $model = new Model();        

        $input = $service->preparingUserInput($title);

        //Preparing URLs
        //$url = $service->preparingUrlForSearchRequestWithStartYearAndEndYear($input, $startYear, $endYear);                
        //MOVIES
        $url = $service->preparingUrlForSearchRequestWithStartYearAndEndYearRequestMovies($input, $startYear, $endYear);                
        $response = [];
        $response = $service->search($url);        
        
        //Drawing out only most popular titles
        $popularTitlesForMovies = $model->extractingMostPopularTitles($response);
        
        //Extracting data
        $popularTitlesMoviesInfo = [];
        $popularTitlesMoviesInfo = $model->extractingMainData($popularTitlesForMovies);        
        
        //TV SERIES
        $url = $service->preparingUrlForSearchRequestWithStartYearAndEndYearRequestTvSeries($input, $startYear, $endYear);                
        $response = [];
        $response = $service->search($url);
        
        //Drawing out only most popular titles
        $popularTitlesForTvSeries = $model->extractingMostPopularTitles($response);        

        //Extracting data
        $popularTitlesTvSeriesInfo = [];
        $popularTitlesTvSeriesInfo = $model->extractingMainData($popularTitlesForTvSeries);        

        //Merging popular movies and series into single array, then sorting the array
        $allDataPopularTitles = array_merge($popularTitlesMoviesInfo, $popularTitlesTvSeriesInfo);
        $titlesByPopularity = $model->sortingTitlesByPopularity($allDataPopularTitles);

        return $this->render('api/search.html.twig', [            
            'title' => $title,
            'popularTitlesData' => $titlesByPopularity
        ]);
    }

    #[Route('/search/{title}/releaseDate=-{endYear}', name: 'app_show_search_result_title_endYear')]
    public function findTitleWithEndYear($title, $endYear): Response
    {
        $service = new Service();
        $model = new Model();        

        $input = $service->preparingUserInput($title);
                
        //MOVIES
        $url = $service->preparingUrlForSearchRequestWithEndYearRequestMovies($input, $endYear);                
        $response = [];
        $response = $service->search($url);        
        
        //Drawing out only most popular titles
        $popularTitlesForMovies = $model->extractingMostPopularTitles($response);
        
        //Extracting data
        $popularTitlesMoviesInfo = [];
        $popularTitlesMoviesInfo = $model->extractingMainData($popularTitlesForMovies);        
        
        //TV SERIES
        $url = $service->preparingUrlForSearchRequestWithEndYearRequestTvSeries($input, $endYear);                
        $response = [];
        $response = $service->search($url);
        
        //Drawing out only most popular titles
        $popularTitlesForTvSeries = $model->extractingMostPopularTitles($response);        

        //Extracting data
        $popularTitlesTvSeriesInfo = [];
        $popularTitlesTvSeriesInfo = $model->extractingMainData($popularTitlesForTvSeries);        

        //Merging popular movies and series into single array, then sorting the array
        $allDataPopularTitles = array_merge($popularTitlesMoviesInfo, $popularTitlesTvSeriesInfo);
        $titlesByPopularity = $model->sortingTitlesByPopularity($allDataPopularTitles);
        
        return $this->render('api/search.html.twig', [            
            'title' => $title,
            'popularTitlesData' => $titlesByPopularity
        ]);
    }

    #[Route('/search/{title}/releaseDate={startYear}-', name: 'app_show_search_result_title_startYear')]
    public function findTitleWithStartYear($title, $startYear): Response
    {
        $service = new Service();
        $model = new Model();        

        $input = $service->preparingUserInput($title);
                
        //MOVIES
        $url = $service->preparingUrlForSearchRequestWithStartYearRequestMovies($input, $startYear);                
        $response = [];
        $response = $service->search($url);        
        
        //Drawing out only most popular titles
        $popularTitlesForMovies = $model->extractingMostPopularTitles($response);
        
        //Extracting data
        $popularTitlesMoviesInfo = [];
        $popularTitlesMoviesInfo = $model->extractingMainData($popularTitlesForMovies);        
        
        //TV SERIES
        $url = $service->preparingUrlForSearchRequestWithStartYearRequestTvSeries($input, $startYear);                
        $response = [];
        $response = $service->search($url);
        
        //Drawing out only most popular titles
        $popularTitlesForTvSeries = $model->extractingMostPopularTitles($response);        

        //Extracting data
        $popularTitlesTvSeriesInfo = [];
        $popularTitlesTvSeriesInfo = $model->extractingMainData($popularTitlesForTvSeries);        

        //Merging popular movies and series into single array, then sorting the array
        $allDataPopularTitles = array_merge($popularTitlesMoviesInfo, $popularTitlesTvSeriesInfo);
        $titlesByPopularity = $model->sortingTitlesByPopularity($allDataPopularTitles);
        
        return $this->render('api/search.html.twig', [            
            'title' => $title,
            'popularTitlesData' => $titlesByPopularity
        ]);
    }

    #[Route('/search/{title}/{titleType}', name: 'app_show_search_result_title_titleType')]
    public function findTitleWithTitleType($title, $titleType): Response 
    {
        $service = new Service();
        $model = new Model();        

        $input = $service->preparingUserInput($title);
        
        //Preparing URL
        $url = $service->preparingUrlForSearchRequestWithTitleType($input, $titleType);                
        $response = [];
        $response = $service->search($url);
        
        //Drawing out most popular titles
        $popularTitles = $model->extractingMostPopularTitles($response);
        
        //Extracting data
        $popularTitlesInfo = [];
        if ($model->isArrayWithTitlesNotEmpty($popularTitles)) {
            $popularTitlesInfo = $model->extractingMainData($popularTitles);
        }       
        
        //Drawing out less popular titles
        $lessPopularTitles= $model->extractingLessPopularTitles($response);        

        //Extracting data
        $lessPopularTitlesInfo = [];
        if ($model->isArrayWithTitlesNotEmpty($lessPopularTitles)) {
            $lessPopularTitlesInfo = $model->extractingMainData($lessPopularTitles);
        }                

        //Sorting the array with popular titles
        $titlesByPopularity = $model->sortingTitlesByPopularity($popularTitlesInfo);

        return $this->render('api/search.html.twig', [            
            'title' => $title,
            'titleType' => $titleType,
            'popularTitlesData' => $titlesByPopularity,
            'lessPopularTitlesData' => $lessPopularTitlesInfo
        ]);        
    }

    #[Route('/search/{title}', name: 'app_show_search_result_title')]
    public function findTitle($title): Response 
    {
        $service = new Service();
        $model = new Model();        

        $input = $service->preparingUserInput($title);        
        
        //MOVIES
        $url = $service->preparingUrlForSearchRequestMovies($input);                
        $response = [];
        $response = $service->search($url);        
        
        //Drawing out only most popular titles
        $popularTitlesForMovies = $model->extractingMostPopularTitles($response);
        
        //Extracting data
        $popularTitlesMoviesInfo = [];
        $popularTitlesMoviesInfo = $model->extractingMainData($popularTitlesForMovies);        
        
        //TV SERIES
        $url = $service->preparingUrlForSearchRequestTvSeries($input);                
        $response = [];
        $response = $service->search($url);
        
        //Drawing out only most popular titles
        $popularTitlesForTvSeries = $model->extractingMostPopularTitles($response);        

        //Extracting data
        $popularTitlesTvSeriesInfo = [];
        $popularTitlesTvSeriesInfo = $model->extractingMainData($popularTitlesForTvSeries);        

        //Merging popular movies and series into single array, then sorting the array
        $allDataPopularTitles = array_merge($popularTitlesMoviesInfo, $popularTitlesTvSeriesInfo);
        $titlesByPopularity = $model->sortingTitlesByPopularity($allDataPopularTitles);

        return $this->render('api/search.html.twig', [            
            'title' => $title,
            'popularTitlesData' => $titlesByPopularity
        ]);        
    }

    #[Route('/title/{id}', name: 'app_details')]
    public function showDetails($id, TitleInformationRepository $titles): Response
    {        
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

        if (!$this->getUser()) {
            return $this->render('title/details.html.twig', [
                'data' => $data
            ]);          
        } else {
            /** @var User $currentUser */
            $currentUser = $this->getUser();            
            $userId = $currentUser->getId();

            $title = $data['originalTitle'];            
            
            $result = $titles->checkIfTitleAlreadyExistInLibraryForCurrentUser($userId, $title, $baseInfo['titleType']);
            
            if (!$result) {
                $isTitleAlreadyInLibrary = false;
                $userRating = null;
            } else {
                $isTitleAlreadyInLibrary = true;
                $userRating = $titles->findUserRating($userId, $title);
            }                      
            
            return $this->render('title/details.html.twig', [
                'data' => $data,
                'alreadyExist' => $isTitleAlreadyInLibrary,
                'userRating' => $userRating
            ]);
        }          
    }
}