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
        //$data = array_merge($baseInfo, $mainCast, $creators);

        //dd($currentUser->getId());
        $title = new TitleInformation();

        $title->setUser($currentUser);
        $title->setOriginalTitle($baseInfo['originalTitle']);
        $title->setTitleType($baseInfo['titleType']);

        $titles->add($title, true);

        //$entityManager->persist($title);
        //$entityManager->flush();
        // $form = $this->createForm(TitleInformationType::class, new TitleInformation());        
        // $form->handleRequest($request);

        // if ($form->isSubmitted() && $form->isValid()) {
        //     $titleData = $form->getData();

        //     $titles->add($titleData, true);

        //     //Add flash message
        //     $this->addFlash('success', 'Your title have been added!');

        //     //Redirect
        //     return $this->redirectToRoute('app_show_movies');
        // }        
        
        return $this->render('library/add.html.twig', [
                'user' => $currentUser
        ]);
    }
}
