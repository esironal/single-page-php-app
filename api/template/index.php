<?php
  if ($_SERVER['REQUEST_METHOD'] == "POST") {
    require('post.php');  
  } elseif ($_SERVER['REQUEST_METHOD'] == "GET") {
    require('get.php');
  } elseif ($_SERVER['REQUEST_METHOD'] == "DELETE") {
    require('delete.php');
  } elseif ($_SERVER['REQUEST_METHOD'] == "PUT") {
    require('put.php');
  }
?>