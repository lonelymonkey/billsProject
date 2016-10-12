<?php
//https://billchou.local/billchou/leagueOfLegend/api/history.php?function=matchList&summonerId=19732385
//https://billchou.local/billchou/leagueOfLegend/api/history.php?function=matchDetail&matchId=2313821210
include '../include/matchHistoryService.php';
//var_dump($_GET);
$service = new matchHistoryService();

$response = array(
  'status' => 1 ,
  'data' => ''
);

try {
  if ($_GET['function'] == 'matchList') {
    $summonerId = $_GET['summonerId'];
    $response['data'] = $service->matchList($summonerId);
  }
  else if($_GET['function'] == 'matchDetail') {
    $matchId = $_GET['matchId'];
    $response['data'] = json_decode($service->matchDetail($matchId),true);
  }

} catch (Exception $e) {
    if ($response['status'] >= 1) {
      $response['status'] = -1;
    }
    $response['errMsg'] = $e->getMessage();
}


echo json_encode($response);



?>
