<?php

namespace App\Controller;

use App\Model\Model;
use App\Model\Auxiliary;
use App\Service\Service;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MainPageController extends AbstractController 
{    
    #[Route('/', name: 'app_index')]
    public function index(): Response
    {
        if ($this->container->get('security.authorization_checker')->isGranted('IS_AUTHENTICATED_FULLY')) {        
        
            $service = new Service();
            $model = new Model();
            $other = new Auxiliary();

            $startYear = $other->setStartYear();
            $endYear = $other->setEndYear();
            
            //Preparing url
            $url = $service->creatingUrlForUpcomingTitles($startYear, $endYear);

            $response = [];            
            $response = $service->search($url); //Get main info             
            
            //How many results we got
            $howManyOutcomes = $response['entries'];               
                
            $baseInfo = [];
            $baseInfo = $model->extractingMainDataForUpcomingTitles($response, $howManyOutcomes);

            //Randomize elements (titles)
            shuffle($baseInfo);
            
            return $this->render('hello/main.html.twig', [
                'data' => $baseInfo
            ]);
        } else return $this->render('hello/main.html.twig');
    }
}