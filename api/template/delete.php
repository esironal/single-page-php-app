<?php
session_start();
if ($_SESSION['authEmail'] && $_SESSION['allowed']) {
  require realpath(__DIR__ . '/../common.php');
  
  
} else {
  header('HTTP/1.0 403 Forbidden');
  echo 'DAS IST VERBOTEN!';
}
?>