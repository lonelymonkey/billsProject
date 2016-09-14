<?php
include '../includes/databasebill.class.inc';
include '../includes/config.inc';
  $q = $_REQUEST["q"];

  $database = new Database;
  $data = json_decode($q);


  var_dump($data->name[0]);
  echo count($data->name);
?>
