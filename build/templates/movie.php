<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0, user-scalable=no" />

  <title>The Movie Vault: individual movie</title>

  <link rel="stylesheet" type="text/css" href="../../css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="../../css/main.min.css">
  <script> var currentMovie = <?= json_encode($movie); ?></script>
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