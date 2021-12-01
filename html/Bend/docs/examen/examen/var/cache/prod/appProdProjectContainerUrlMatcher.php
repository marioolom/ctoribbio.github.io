<?php

use Symfony\Component\Routing\Exception\MethodNotAllowedException;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Routing\RequestContext;

/**
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class appProdProjectContainerUrlMatcher extends Symfony\Bundle\FrameworkBundle\Routing\RedirectableUrlMatcher
{
    public function __construct(RequestContext $context)
    {
        $this->context = $context;
    }

    public function match($rawPathinfo)
    {
        $allow = [];
        $pathinfo = rawurldecode($rawPathinfo);
        $trimmedPathinfo = rtrim($pathinfo, '/');
        $context = $this->context;
        $request = $this->request ?: $this->createRequest($pathinfo);
        $requestMethod = $canonicalMethod = $context->getMethod();

        if ('HEAD' === $requestMethod) {
            $canonicalMethod = 'GET';
        }

        if (0 === strpos($pathinfo, '/calculator')) {
            // suma
            if (0 === strpos($pathinfo, '/calculator/suma') && preg_match('#^/calculator/suma(?:/(?P<num1>[^/]++)(?:/(?P<num2>[^/]++))?)?$#sD', $pathinfo, $matches)) {
                return $this->mergeDefaults(array_replace($matches, ['_route' => 'suma']), array (  '_controller' => 'AppBundle\\Controller\\CalculatorController::sumaAction',  'num1' => 5,  'num2' => 5,));
            }

            // resta
            if (0 === strpos($pathinfo, '/calculator/resta') && preg_match('#^/calculator/resta(?:/(?P<num1>[^/]++)(?:/(?P<num2>[^/]++))?)?$#sD', $pathinfo, $matches)) {
                return $this->mergeDefaults(array_replace($matches, ['_route' => 'resta']), array (  '_controller' => 'AppBundle\\Controller\\CalculatorController::restaAction',  'num1' => 5,  'num2' => 5,));
            }

            // multiplicacion
            if (0 === strpos($pathinfo, '/calculator/mult') && preg_match('#^/calculator/mult(?:/(?P<num1>[^/]++)(?:/(?P<num2>[^/]++))?)?$#sD', $pathinfo, $matches)) {
                return $this->mergeDefaults(array_replace($matches, ['_route' => 'multiplicacion']), array (  '_controller' => 'AppBundle\\Controller\\CalculatorController::multAction',  'num1' => 5,  'num2' => 5,));
            }

        }

        // division
        if (0 === strpos($pathinfo, '/calculato/div') && preg_match('#^/calculato/div(?:/(?P<num1>[^/]++)(?:/(?P<num2>[^/]++))?)?$#sD', $pathinfo, $matches)) {
            return $this->mergeDefaults(array_replace($matches, ['_route' => 'division']), array (  '_controller' => 'AppBundle\\Controller\\CalculatorController::divAction',  'num1' => 5,  'num2' => 5,));
        }

        if (0 === strpos($pathinfo, '/index')) {
            // index
            if (preg_match('#^/index/(?P<mensaje>[^/]++)$#sD', $pathinfo, $matches)) {
                return $this->mergeDefaults(array_replace($matches, ['_route' => 'index']), array (  '_controller' => 'AppBundle\\Controller\\MessageController::indexAction',));
            }

            // vista
            if (0 === strpos($pathinfo, '/index/vista') && preg_match('#^/index/vista/(?P<mensaje>[^/]++)$#sD', $pathinfo, $matches)) {
                return $this->mergeDefaults(array_replace($matches, ['_route' => 'vista']), array (  '_controller' => 'AppBundle\\Controller\\MessageController::vistaAction',));
            }

        }

        elseif (0 === strpos($pathinfo, '/redirect')) {
            // redirect_index
            if ('/redirect/index' === $pathinfo) {
                return array (  '_controller' => 'AppBundle\\Controller\\RedirectController::indexAction',  '_route' => 'redirect_index',);
            }

            // redirect_interna_index
            if ('/redirectinterna/index' === $pathinfo) {
                return array (  '_controller' => 'AppBundle\\Controller\\RedirectController::internaRedirectAction',  '_route' => 'redirect_interna_index',);
            }

            // redirect_interna_permanent_index
            if ('/redirectinternapermanente/index' === $pathinfo) {
                return array (  '_controller' => 'AppBundle\\Controller\\RedirectController::internaRedirectPermanentAction',  '_route' => 'redirect_interna_permanent_index',);
            }

            // redirect_externa_index
            if ('/redirectexterna/index' === $pathinfo) {
                return array (  '_controller' => 'AppBundle\\Controller\\RedirectController::externaRedirectAction',  '_route' => 'redirect_externa_index',);
            }

        }

        if ('/' === $pathinfo && !$allow) {
            throw new Symfony\Component\Routing\Exception\NoConfigurationException();
        }

        throw 0 < count($allow) ? new MethodNotAllowedException(array_unique($allow)) : new ResourceNotFoundException();
    }
}
