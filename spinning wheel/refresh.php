<?php
include '../includes/databasebill.class.inc';
include '../includes/config.inc';

$database = new Database;

$database->query('SELECT w.setID, w.setName, x.name, x.distribution, x.color from wheelset as w left join probabilityslice as x on w.setID = x.setID where w.setID = (SELECT setID from wheelset order by setID desc limit 1)');

$allData = $database->resultset();

echo json_encode($allData);
 /*where w.setID = (SELECT setID from wheelset order by setID desc limit 1)*/
 ?>
