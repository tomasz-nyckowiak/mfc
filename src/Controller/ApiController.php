<?php

namespace App\Controller;

use App\Entity\User;
use App\Model\Model;
use App\Service\Service;
use App\Entity\TitleInformation;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\TitleInformationRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\Length;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Authorization\AuthorizationChecker;
use function Symfony\Component\DependencyInjection\Loader\Configurator\service;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;

class ApiController extends AbstractController
{    
    #[Route('/search', name: 'app_search')]
    public function index(): Response {        
        if(isset($_POST['search'])) {
            $userInput = $_POST['search'];
        } else {
            return $this->redirectToRoute('app_index');
        }
        
        $pageNumberAsInt = 1;    
        
        if (empty($userInput)) {
            return $this->render('api/no_results.html.twig');
        }        
        
        return $this->redirectToRoute('app_show_more', [
            'temp' => $userInput,
            'pageNumber' => $pageNumberAsInt            
        ]);
    }
    
    #[Route('/search/{temp}/{pageNumber}', name: 'app_show_more')]
    public function find($temp, $pageNumber): Response {
        $service = new Service();
        $model = new Model();

        $input = $service->preparingUserInput($temp);
        
        // Preparing url + sending first request for information about results and pages
        $url = $service->creatingBasicUrlWithoutOptionalInfo($input, $pageNumber);                
        $response = [];
        $response = $service->search($url);        
        
        // How many results we got
        $howManyOutcomes = $response['entries'];
        
        // Checking if there is another page
        if (is_null($response['next'])) {
            $nextPage = false;               
        } else {
            $nextPage = true;
        }
        
        // Get main info
        $urlBaseInfo = $service->creatingBaseInfoUrl($url); 
        $response = $service->search($urlBaseInfo);       
        $baseInfo = [];
        $baseInfo = $model->extractingMainData($response, $howManyOutcomes);       

        // Get cast
        $urlExtendedCast = $service->creatingUrlForExtendedCast($url);
        $response = $service->search($urlExtendedCast);
        $mainCast = [];
        $mainCast = $model->extractingMainCast($response, $howManyOutcomes);
        
        // Get makers (creator/s, director/s and writer/s)
        // $urlCreators = $service->creatingUrlForCreators($url);     
        // $response = $service->search($urlCreators);
        // $creators = [];
        // $creators = $model->extractingCreators($response, $howManyOutcomes);

        // Merging all data arrays into one
        for ($i = 0; $i < $howManyOutcomes; $i++) {
            $allData[$i] = array_merge($baseInfo[$i], $mainCast[$i]);
        }

        //dd($allData);     

        return $this->render('api/search.html.twig', [
            'page' => $pageNumber,
            'next' => $nextPage,
            'data' => $allData,
            'temp' => $temp
        ]);        
    }

    #[Route('/title/{id}', name: 'app_details')]
    public function showDetails($id): Response {        
        $service = new Service();
        $model = new Model();
        
        // Preparing url
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
                
        //dd($data);

        return $this->render('movie/details.html.twig', [
            'data' => $data,
            'titleId' => $id,
        ]);  
    }
}