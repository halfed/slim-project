<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0, user-scalable=no, shrink-to-fit=no" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<title>The Movie Vault</title>

	<?php
    //include '../partials/header_links.php';
  ?>
  <link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="../css/main.min.css">
  <script> var selectionType = <?= json_encode($selectionType); ?></script>
  <script> var showMenu = <?= $showMenu; ?></script>
</head>
<body>
  
<div id="tree">

</div>
  <nav class="navbar navbar-default">
    <div class=" navbar-header">
      <!-- Brand and toggle get grouped for better mobile display -->
      <header>
        <h1><a href="/slim/build">The Movie Vault</a></h1>
      </header>
    </div><!-- /.container-fluid -->
    <div id="search-bar" class="container search-bar">
      <div class="row">
        <div class="col col-lg-12 col-xs-12 navbar-container">
            <form class="navbar-form">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Search">
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
        </div>
      </div>
    </div>
    <div id="breadcrumb" class="container-fluid divider-bottom-md">
    </div>
    <div id="main-drop-down" class="container-fluid-lg">
    </div>
    <div id="search" class="search"></div>
  </nav>


  <div class="container">
    <div id="app" class="main row movie-container">
  
    </div>
  </div>
  

  <?php
    include '../partials/footer.php';
  ?>

  <?php
    //include '../partials/body_scripts.php';
  ?>
  <script type="text/javascript" src="../js/vendor/jquery.min.js"></script>
    <script type="text/javascript" src="../js/vendor/bootstrap.min.js"></script>
<script type="text/javascript" src="../js/react-bundles/app-bundle.js"></script></body>
</html>