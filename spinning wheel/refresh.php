<?php
include '../includes/databasebill.class.inc';
include '../includes/config.inc';

$database = Database::getConnection();

$database->query('SELECT w.setID, w.setName, x.name, x.distribution, x.color from wheelset as w left join probabilityslice as x on w.setID = x.setID where w.setID = (SELECT setID from wheelset order by setID desc limit 1)');

$data = $database->resultset();

$database->query('SELECT setID,winner from wheelresult where setID = (select setID from wheelresult order by setID desc limit 1)');

$winnerList = $database->resultset();

echo json_encode(array('data' => json_encode($data),'winnerList' => json_encode($winnerList)));
 /*where w.setID = (SELECT setID from wheelset order by setID desc limit 1)*/
 ?>
