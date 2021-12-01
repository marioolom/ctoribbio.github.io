<?php

namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class CalculatorController extends Controller{

    public function sumParamsAction($num1, $num2) {
        return new Response('<html><body>Suma: '. $num1 + $num2 .' <br>
                                        Resta: '. $num1 - $num2 . ' <br>
                                        Multiplicacion: '. $num1 * $num2 .' <br>
                                        Division: '. $num1 / $num2.' <br>
        </body></html');
    }

    public function getAction($username) {
        if($username == null || $username != "admin"){
            throw $this->createNotFoundException('AccessDeniedHttpException');
        }else{
            return new Response('<html><body>Bienvenido admin</body></html');
        }
    }
}
