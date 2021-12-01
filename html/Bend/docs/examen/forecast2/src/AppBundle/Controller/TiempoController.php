<?php

namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class TiempoController extends Controller{
    
    public function holaAction(){
        return new Response('Hola');
    }

    public function holaParamAction($hola){
        return new Response('<html><body>Saludo: ' . $hola .' </body></html>');
    }

    public function holaRequestAction($hola, $saludo, Request $request){
        return new Response('<html><body>Tipos ' . $request->query->get("city"). $hola . $saludo .'</body></html>');
    }
}
