<?php
///api/history.php?function=matchHistory&summonerName=[name]
include '../include/matchHistoryService.php';
var_dump($_GET);
$service = new matchHistoryService();

$response = array(
  'status' => 1 ,
  'data' => ''
);

try {
  if ($_GET['function'] == 'matchHistory') {
    $summonerName = $_GET['summonerName'];
    $service->matchHistory($summonerName);
  }

} catch (Exception $e) {
    if ($response['status'] >= 1) {
      $response['status'] = -1;
    }
    $response['errMsg'] = $e->getMessage();
}


echo json_encode($response);



?>
