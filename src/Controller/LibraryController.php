<?php

namespace App\Controller;

use App\Entity\User;
use App\Model\Model;
use App\Service\Service;
use App\Entity\TitleInformation;
use App\Form\TitleInformationType;
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

class LibraryController extends AbstractController
{  
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/library', name: 'app_library')]
    public function filmLibrary(TitleInformationRepository $titles): Response
    {
        dd($titles->findAll());
        
        return $this->render('library/default_list.html.twig', [
                'titles' => $titles->findAll()
        ]);
    }

    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/library/add/{id}', name: 'app_add_title')]
    public function addTitleToLibrary($id, TitleInformationRepository $titles): Response
    {   
        /** @var User $currentUser */
        $currentUser = $this->getUser();

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

        //dd($currentUser->getId());
        $title = new TitleInformation();

        $title->setUser($currentUser);
        $title->setOriginalTitle($data['originalTitle']);
        $title->setTitleType($data['titleType']);
        $title->setReleaseDate($data['releaseDate']['year']);
        
        if ($data['rating'] != null) {
            $title->setRating($data['rating']);
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
        
        $temp = $data['originalTitle'];
        $userId = $currentUser->getId();
        $someFlag = false;
        
        $result = $titles->checkIfTitleAlreadyExistInLibraryForCurrentUser($userId, $temp);
        if (!$result) {
            $titles->add($title, true);
        } else $someFlag = true;
        
        //dd($someFlag);                      
        
        return $this->render('library/details.html.twig', [
            'data' => $data,
            'alreadyExist' => $someFlag
        ]);
    }
}
