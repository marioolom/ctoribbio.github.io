<?php

namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class GreetController extends Controller{
    public function algoParamAction($algo) {
        return new Response('<html><body> '. $algo .' </body></html');
    }
}
