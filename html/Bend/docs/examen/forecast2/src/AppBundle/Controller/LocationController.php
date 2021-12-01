<?php

namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class LocationController extends Controller
{
    public function indexAction(){
        $this->addFlash('location', 'Tu ubicación es Valladolid, España');
        
        return $this->render('location/index.html.twig');
    }

    public function indexJsonAction(){
        $response = new Response(json_encode(array('location' => 'Localizado en Valladolid')));
        $response->headers->set('Content-type', 'application/json');

        return $response;
    }
}
