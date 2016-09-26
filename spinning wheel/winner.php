<?php

include '../includes/databasebill.class.inc';
include '../includes/config.inc';

$database = Database::getConnection();

$database->query('SELECT setID, winner from wheelResult');
$winner = $database->resultset();

echo json_encode($winner);
 ?>
