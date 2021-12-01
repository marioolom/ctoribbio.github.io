<?php

namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class RedirectController extends Controller
{
    public function indexAction(){
        return new Response('Redireccion satisfactoria');
    }

    public function internaRedirectAction(){
        return $this->redirectToRoute("redirect_index");
    }

    public function internaRedirectPermanentAction(){
        return $this->redirectToRoute("redirect_index", array(), 301);
    }

    public function externaRedirectAction(){
        return $this->redirect("https://www.elmundo.es");
    }

    
}
