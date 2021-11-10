<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Route;
/**
 * Description of ForecastController
 *
 * @author Daw
 */
class ForecastController extends Controller{
    public function indexAction(){
        return new Response ('Hace mucho frio');
    }
    public function indexParamAction($weather){
        return new Response('<html><body>Hace '.$weather.'</body></html>');
    }
}
