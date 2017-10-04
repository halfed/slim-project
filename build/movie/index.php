<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../../vendor/autoload.php';
require '../../scripts/connection.php';
require '../../classes/Movies.php';

$app = new \Slim\App(["settings" => $config]);

?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>The Movie Vault: individual movie</title>

  <link rel="stylesheet" type="text/css" href="../../css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="../../css/main.css">

  <?php
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
      include '../../partials/header.php';
    ?>

    <?php
      include '../../partials/breadcrumb.php';
    ?>
  
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