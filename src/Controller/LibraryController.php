<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\TitleInformation;
use App\Repository\TitleInformationRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
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
    #[Route('/library/{data}', name: 'app_add_title')]
    public function addTitleToLibrary(TitleInformationRepository $titles, $data): Response
    {
        dd($data);
        
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        
        $title = new TitleInformation();
        $title->setOriginalTitle($data['originalTitle']);
        $title->setUser($currentUser);      
        
        $titles->add($title, true);
        
        // return $this->render('movie/details.html.twig', [
        //     'data' => $data     
        // ]);
        
        return $this->render('library/default_list.html.twig');
    }
}
