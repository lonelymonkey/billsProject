<?php
include '../includes/databasebill.class.inc';
include '../includes/config.inc';

$database = new Database;

$database->query('SELECT w.setID, w.setName, x.name, x.distribution, x.color from wheelset as w left join probabilityslice as x on w.setID = x.setID');
$data = $database->resultset();

$database->query('SELECT setID, winner from wheelResult');
$winner = $database->resultset();

echo json_encode(array('data' => json_encode($data), 'winner' => json_encode($winner)));

 ?>
