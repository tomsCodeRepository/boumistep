<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ObjectifsController extends AbstractController
{
    #[Route('/objectifs', name: 'app_objectifs')]
    public function index(): Response
    {
        return $this->render('objectifs/index.html.twig', [
            'controller_name' => 'ObjectifsController',
        ]);
    }
}
