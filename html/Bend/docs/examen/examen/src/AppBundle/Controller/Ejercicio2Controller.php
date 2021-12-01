<?php

namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class Ejercicio2Controller extends Controller
{
    public function indexAction(){
        return new Response('Redireccion satisfactoria');
    }

    public function internalRedirectAction(){
        return $this->redirectToRoute("redirect_index");
    }

    public function internalRedirectPermanentAction(){
        return $this->redirectToRoute("redirect_index", array(), 301);
    }

    public function externaRedirectAction(){
        return $this->redirect("https://www.marca.com");
    }

    
}
