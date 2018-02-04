<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>The Movie Vault</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/main.css">

    <script src="/js/vendor/angular-1.3.5.min.js"></script>
    <script src="/js/vendor/angular-route.1.2.28.js"></script>
    <base href="/">
</head>
<body ng-app="MovieApp">
    <header>
        <h1>The Movie Vault</h1>
    </header>
    <ol class="breadcrumb">
      <li><a href="#">Home</a></li>
      <li><a href="#">Library</a></li>
      <li class="active">Data</li>
    </ol>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Brand</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <form class="navbar-form navbar-left">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Link</a></li>
            <li class="dropdown">
              <a href="#/" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>

    <div class="main row movie-container">
        <div ng-view></div>
        <div class="holder" style="font-size:30px;"></div>
    </div>

    <footer>
      <div class="find">
        Find
        <ul>
          <li>New Movies</li>
          <li>Video Games</li>
        </ul>
      </div>
      <div class="help">
        Help
        <ul>
          <li>Contact Us</li>
        </ul>
      </div>
      <div class="followUs">
        Follow Us
      </div>
    </footer>
       
    <script type="text/javascript" src="/slim/js/vendor/jquery.min.js"></script>
    <script type="text/javascript" src="/slim/js/vendor/bootstrap.min.js"></script>

    <!-- Modules -->
    <script type="text/javascript" src="/slim/js/app.js"></script>

    <!-- Controllers -->
    <script type="text/javascript" src="/slim/js/controllers/MovieController.js"></script>
    <script type="text/javascript" src="/slim/js/controllers/IndMovieController.js"></script>

    <!--Services -->
    <script src="/slim/js/Services/allMovies.js"></script>
    <script type="text/javascript" src="slim/js/core.js"></script>
</body>
</html>