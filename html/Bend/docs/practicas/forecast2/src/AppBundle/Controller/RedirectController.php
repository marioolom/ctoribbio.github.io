<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class RedirectController extends Controller{

    public function indexAction(){
        return new Response('Redireccion satisfactoria');
    }
    public function internalRedirectAction(){
        return $this->redirectToRoute("redirect_index");
    }
}
