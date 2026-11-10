<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PhpinfoController extends AbstractController
{
    #[Route('/phpinfo', name: 'app_phpinfo')]
    public function index(): Response
    {
/*        return $this->render('phpinfo/index.html.twig', [
            'controller_name' => 'PhpinfoController',
        ]);*/
        ob_start();
        phpinfo();
        $phpinfo = ob_get_contents();
        ob_end_clean();
        return $this->render('phpinfo/index.html.twig', array(
            'phpinfo'=>$phpinfo,
        ));
    }
}
