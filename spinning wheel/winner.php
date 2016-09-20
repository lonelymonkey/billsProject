<?php

include '../includes/databasebill.class.inc';
include '../includes/config.inc';

$database = new Database;

$database->query('SELECT setID, winner from wheelResult');
$winner = $database->resultset();

echo json_encode($winner);
 ?>
