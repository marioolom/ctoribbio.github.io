<?php

namespace AppBundle\Controller;


use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ForecastController extends Controller{
    
    public function indexAction(){
        return new Response('Hace frio');
    }

    public function indexParamAction($weather){
        
        return new Response('<html><body>Info del Tiempo: Hace ' . $weather . '</body></html>');
    }

    public function index2ParamsAction($weather, $temperature){
        return new Response('<html><body>Info del Tiempo: Hace ' . $weather . ' y la temperatura es de: ' . $temperature . 'ºC</body></html>');
    }

    public function indexRequestAction($weather, $temperature, Request $request){
        return new Response('<html><body>Info del Tiempo en ' .  
                            $request->query->get("city"). ':' . ' Hace ' . $weather. ' y la temperatura es de: ' . $temperature . 'ºC</body></html>');
    }
}