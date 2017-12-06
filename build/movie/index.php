<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../../vendor/autoload.php';
require '../../scripts/connection.php';
require '../../classes/Movies.php';

$app = new \Slim\App(["settings" => $config]);
$apps = new \Slim\App([
    'settings' => [
        // Only set this if you need access to route within middleware
        'determineRouteBeforeAppMiddleware' => true
    ]
]);

?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0, user-scalable=no" />

  <title>The Movie Vault: individual movie</title>

  <link rel="stylesheet" type="text/css" href="../../css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="../../css/main.min.css">

  <?php
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
    
    $app->get('/{movieName}', function (Request $request, Response $response) {
    $currentMovie = $request->getAttribute('movieName');

  ?>
      <script> var currentMovie = <?php echo json_encode($currentMovie); ?></script>
  <?php
  });
  $app->run();
  ?>

</head>
<body>
    <?php
      include '../../partials/nav.php';
    ?>

    <div id="movieApp" class="main row movie-container">
  
  </div>

    <?php
      include '../../partials/footer.php';
    ?>

    <script type="text/javascript" src="../../js/vendor/jquery.min.js"></script>
    <script type="text/javascript" src="../../js/vendor/bootstrap.min.js"></script>
    <script type="text/javascript" src="../../js/react-bundles/movie-bundle.js"></script></body>
</html>