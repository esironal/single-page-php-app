<?php
  require_once realpath(__DIR__ . '/../config.php');
  header('Content-Type: application/json');
  //create mysqli object
  $mysqli = new mysqli($dbhost, $dbuser, $dbpass, $db);
  /* check connection */
  if ($mysqli->connect_errno) {
    echo "FAILED TO CONNECT";
    error_log("Connect failed: %s\n", $mysqli->connect_error);
    exit();
  }
?>