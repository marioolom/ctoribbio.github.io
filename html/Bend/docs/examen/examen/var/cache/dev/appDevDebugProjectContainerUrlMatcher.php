<?php

use Symfony\Component\Routing\Exception\MethodNotAllowedException;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Routing\RequestContext;

/**
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class appDevDebugProjectContainerUrlMatcher extends Symfony\Bundle\FrameworkBundle\Routing\RedirectableUrlMatcher
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

        if (0 === strpos($pathinfo, '/_')) {
            // _wdt
            if (0 === strpos($pathinfo, '/_wdt') && preg_match('#^/_wdt/(?P<token>[^/]++)$#sD', $pathinfo, $matches)) {
                return $this->mergeDefaults(array_replace($matches, ['_route' => '_wdt']), array (  '_controller' => 'web_profiler.controller.profiler:toolbarAction',));
            }

            if (0 === strpos($pathinfo, '/_profiler')) {
                // _profiler_home
                if ('/_profiler' === $trimmedPathinfo) {
                    $ret = array (  '_controller' => 'web_profiler.controller.profiler:homeAction',  '_route' => '_profiler_home',);
                    if ('/' === substr($pathinfo, -1)) {
                        // no-op
                    } elseif ('GET' !== $canonicalMethod) {
                        goto not__profiler_home;
                    } else {
                        return array_replace($ret, $this->redirect($rawPathinfo.'/', '_profiler_home'));
                    }

                    return $ret;
                }
                not__profiler_home:

                if (0 === strpos($pathinfo, '/_profiler/search')) {
                    // _profiler_search
                    if ('/_profiler/search' === $pathinfo) {
                        return array (  '_controller' => 'web_profiler.controller.profiler:searchAction',  '_route' => '_profiler_search',);
                    }

                    // _profiler_search_bar
                    if ('/_profiler/search_bar' === $pathinfo) {
                        return array (  '_controller' => 'web_profiler.controller.profiler:searchBarAction',  '_route' => '_profiler_search_bar',);
                    }

                }

                // _profiler_phpinfo
                if ('/_profiler/phpinfo' === $pathinfo) {
                    return array (  '_controller' => 'web_profiler.controller.profiler:phpinfoAction',  '_route' => '_profiler_phpinfo',);
                }

                // _profiler_search_results
                if (preg_match('#^/_profiler/(?P<token>[^/]++)/search/results$#sD', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, ['_route' => '_profiler_search_results']), array (  '_controller' => 'web_profiler.controller.profiler:searchResultsAction',));
                }

                // _profiler_open_file
                if ('/_profiler/open' === $pathinfo) {
                    return array (  '_controller' => 'web_profiler.controller.profiler:openAction',  '_route' => '_profiler_open_file',);
                }

                // _profiler
                if (preg_match('#^/_profiler/(?P<token>[^/]++)$#sD', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, ['_route' => '_profiler']), array (  '_controller' => 'web_profiler.controller.profiler:panelAction',));
                }

                // _profiler_router
                if (preg_match('#^/_profiler/(?P<token>[^/]++)/router$#sD', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, ['_route' => '_profiler_router']), array (  '_controller' => 'web_profiler.controller.router:panelAction',));
                }

                // _profiler_exception
                if (preg_match('#^/_profiler/(?P<token>[^/]++)/exception$#sD', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, ['_route' => '_profiler_exception']), array (  '_controller' => 'web_profiler.controller.exception:showAction',));
                }

                // _profiler_exception_css
                if (preg_match('#^/_profiler/(?P<token>[^/]++)/exception\\.css$#sD', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, ['_route' => '_profiler_exception_css']), array (  '_controller' => 'web_profiler.controller.exception:cssAction',));
                }

            }

            // _twig_error_test
            if (0 === strpos($pathinfo, '/_error') && preg_match('#^/_error/(?P<code>\\d+)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                return $this->mergeDefaults(array_replace($matches, ['_route' => '_twig_error_test']), array (  '_controller' => 'twig.controller.preview_error:previewErrorPageAction',  '_format' => 'html',));
            }

        }

        // index
        if (preg_match('#^/(?P<mensaje>[^/]++)$#sD', $pathinfo, $matches)) {
            return $this->mergeDefaults(array_replace($matches, ['_route' => 'index']), array (  '_controller' => 'AppBundle\\Controller\\Ejercicio1Controller::indexAction',));
        }

        // vista
        if (0 === strpos($pathinfo, '/vista') && preg_match('#^/vista/(?P<mensaje>[^/]++)$#sD', $pathinfo, $matches)) {
            return $this->mergeDefaults(array_replace($matches, ['_route' => 'vista']), array (  '_controller' => 'AppBundle\\Controller\\Ejercicio1Controller::getAction',));
        }

        // suma
        if (0 === strpos($pathinfo, '/suma') && preg_match('#^/suma(?:/(?P<num1>[^/]++)(?:/(?P<num2>[^/]++))?)?$#sD', $pathinfo, $matches)) {
            return $this->mergeDefaults(array_replace($matches, ['_route' => 'suma']), array (  '_controller' => 'AppBundle\\Controller\\Ejercicio1Controller::sumaAction',  'num1' => 5,  'num2' => 5,));
        }

        // resta
        if (0 === strpos($pathinfo, '/resta') && preg_match('#^/resta(?:/(?P<num1>[^/]++)(?:/(?P<num2>[^/]++))?)?$#sD', $pathinfo, $matches)) {
            return $this->mergeDefaults(array_replace($matches, ['_route' => 'resta']), array (  '_controller' => 'AppBundle\\Controller\\Ejercicio1Controller::restaAction',  'num1' => 5,  'num2' => 5,));
        }

        if (0 === strpos($pathinfo, '/redirect')) {
            // redirect_index
            if ('/redirect/index' === $pathinfo) {
                return array (  '_controller' => 'AppBundle\\Controller\\Ejercicio2Controller::indexAction',  '_route' => 'redirect_index',);
            }

            // redirect_interna_index
            if ('/redirectinterna/index' === $pathinfo) {
                return array (  '_controller' => 'AppBundle\\Controller\\Ejercicio2Controller::internalRedirectAction',  '_route' => 'redirect_interna_index',);
            }

            // redirect_interna_permanent_index
            if ('/redirectinternapermanente/index' === $pathinfo) {
                return array (  '_controller' => 'AppBundle\\Controller\\Ejercicio2Controller::internalRedirectPermanentAction',  '_route' => 'redirect_interna_permanent_index',);
            }

            // redirect_externa_index
            if ('/redirectexterna/index' === $pathinfo) {
                return array (  '_controller' => 'AppBundle\\Controller\\Ejercicio2Controller::externaRedirectAction',  '_route' => 'redirect_externa_index',);
            }

        }

        // multiplicacion
        if (0 === strpos($pathinfo, '/multipli') && preg_match('#^/multipli(?:/(?P<num1>[^/]++)(?:/(?P<num2>[^/]++))?)?$#sD', $pathinfo, $matches)) {
            return $this->mergeDefaults(array_replace($matches, ['_route' => 'multiplicacion']), array (  '_controller' => 'AppBundle\\Controller\\Ejercicio1Controller::multipliAction',  'num1' => 5,  'num2' => 5,));
        }

        // division
        if (0 === strpos($pathinfo, '/divide') && preg_match('#^/divide(?:/(?P<num1>[^/]++)(?:/(?P<num2>[^/]++))?)?$#sD', $pathinfo, $matches)) {
            return $this->mergeDefaults(array_replace($matches, ['_route' => 'division']), array (  '_controller' => 'AppBundle\\Controller\\Ejercicio1Controller::divideAction',  'num1' => 5,  'num2' => 5,));
        }

        if ('/' === $pathinfo && !$allow) {
            throw new Symfony\Component\Routing\Exception\NoConfigurationException();
        }

        throw 0 < count($allow) ? new MethodNotAllowedException(array_unique($allow)) : new ResourceNotFoundException();
    }
}
