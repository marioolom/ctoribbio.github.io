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
class CalculatorController extends Controller{
    public function indexAction(){
        return new Response ('Hola');
    }
    public function sumaAction($num1, $num2){
        return new Response ('<html><body>Resultado:  '.($num1+$num2).'</body></html>');
    }
    public function restaAction($num1, $num2){
        return new Response ('<html><body>Resultado:  '.($num1-$num2).'</body></html>');
    }
    public function multAction($num1, $num2){
        return new Response ('<html><body>Resultado:  '.($num1*$num2).'</body></html>');
    }
    public function divAction($num1, $num2){
        return new Response ('<html><body>Resultado:  '.($num1/$num2).'</body></html>');
    }
    
}