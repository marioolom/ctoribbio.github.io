<?php

namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class SessionController extends Controller{
    
    public function userAction(){
        return new Response('<html><body>'. $_SESSION['nombre']  .'</body></html');
    }

    public function loginParamsAction($user, $passwd){
        if($user == "jorge" && $passwd == "hola"){
            $_SESSION['nombre'] = $user;
            return $this->forward('AppBundle:Session:user');
        }else if(preg_match('~^\p{Lu}~u', $passwd)){
            throw $this->createNotFoundException('La contraseña debe empezar por minúscula');
        }else{
            return $this->redirectToRoute('redirectSession');
        }
    }
}
