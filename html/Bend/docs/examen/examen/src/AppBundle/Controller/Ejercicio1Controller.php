<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
/**
 * Description of ForecastController
 *
 * @author Daw
 */
class Ejercicio1Controller extends Controller{
    public function indexAction($mensaje){
        return new Response ("<html><body><i>".$mensaje."!</i></body></html>");
    }
    public function getAction($mensaje){
        return $this->render("mensaje/index.html.twig" , array("mensaje" => $mensaje));
    }
    public function sumaAction($num1, $num2){
        return new Response ('<html><body>Resultado:  '.($num1+$num2).'</body></html>');
    }
    public function restaAction($num1, $num2){
        return new Response ('<html><body>Resultado:  '.($num1-$num2).'</body></html>');
    }
    public function multipliAction($num1, $num2){
        return new Response ('<html><body>Resultado:  '.($num1*$num2).'</body></html>');
    }
    public function divideAction($num1, $num2){
        return new Response ('<html><body>Resultado:  '.($num1/$num2).'</body></html>');
    }
    
}