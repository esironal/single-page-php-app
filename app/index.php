<?php
session_start();
if (!$_SESSION['authEmail'] || !$_SESSION['allowed']) {
  header('Location:../index.php?logout');
} else {
  $authEmail = $_SESSION['authEmail'];
}
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Single Page PHP Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="//maxcdn.bootstrapcdn.com/bootswatch/3.2.0/journal/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/styles/css/style.css">
  </head>
  <body id="appName">
    <div class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project Title</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span id="authEmail"><?php echo $authEmail; ?></span> <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="../index.php?logout">Sign Out</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <!--/.nav-collapse -->
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-4">
          <!-- Nav tabs -->
          <ul class="nav nav-tabs" role="tablist">
            <li class="active"><a title="Example" href="#template-menu" data-load="template-menu" role="tab" data-toggle="tab"><i class="fa fa-star"></i></a></li>
          </ul>
          <!-- Tab panes -->
          <div class="tab-content">
            <div class="tab-pane active" id="template-menu"></div>
          </div>
        </div>
        <div class="col-lg-9 col-md-9 col-sm-8">
          <div id="data-dashboard"></div>
        </div>
      </div>
    </div>
    <script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.8.3/moment.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min.js"></script>
    <script src="assets/vendor/js/chart.min.js"></script>
    <script src="assets/vendor/js/stupidTable.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.3.0/bootbox.min.js"></script>
    <script src="assets/js/app.js"></script>
    <script src="assets/js/router.js"></script>
  </body>
</html>