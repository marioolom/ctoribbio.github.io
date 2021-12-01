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
class MessageController extends Controller{
    public function indexAction($mensaje){
        return new Response ("<html><body><i>".$mensaje."!</i></body></html>");
    }
    public function vistaAction($mensaje){
        return $this->render("mensaje/index.html.twig" , array("mensaje" => $mensaje));
    }
}