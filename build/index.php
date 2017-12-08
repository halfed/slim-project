<?php 
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';
require '../scripts/connection.php';
require '../classes/Movies.php';

$app = new \Slim\App(["settings" => $config]);
/*$apps = new \Slim\App([
    'settings' => [
        // Only set this if you need access to route within middleware
        'determineRouteBeforeAppMiddleware' => true
    ]
]);*/
$container = $app->getContainer();
$container['view'] = new \Slim\Views\PhpRenderer("templates");

$app->add(function (Request $request, Response $response, callable $next) {
    $uri = $request->getUri();
    $path = $uri->getPath();
    if ($path != '/' && substr($path, -1) == '/') {
        // permanently redirect paths with a trailing slash
        // to their non-trailing counterpart
        $uri = $uri->withPath(substr($path, 0, -1));
        
        if($request->getMethod() == 'GET') {
            return $response->withRedirect((string)$uri, 301);
        }
        else {
            return $next($request->withUri($uri), $response);
        }
    }

    return $next($request, $response);
});

$app->get('/', function (Request $request, Response $response) {
    $response = $this->view->render($response, "main.php", []);
    return $response;
});

$app->get('/{movieName}', function (Request $request, Response $response) {
    $currentMovie = $request->getAttribute('movieName');
    $response = $this->view->render($response, "movie.php", ["movie" => $currentMovie]);
    return $response;
});

$app->run();
?>