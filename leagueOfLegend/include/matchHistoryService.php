<?php
//use matchHistoryService;

include 'lolAPI.php';

class matchHistoryService{
  private $api;
  public function __construct() {
    $this->api = new lolAPI(array(
      'region' => 'na'
    ));
  }
  public function matchList($summonerId = 0){
    return $this->api->getMatchList($summonerId);
  }
  public function matchDetail($matchId = 0){
    return $this->api->getMatchDetail($matchId);
  }
}

/*$matchHistoryService = new matchHistoryService();
$matchList = json_decode($matchHistoryService->matchList('19732385'));
echo '<pre>';
var_dump($matchList);
echo '</pre>';
//var_dump(json_decode($matchHistoryService->matchDetail()));
$matchDetail = json_decode($matchHistoryService->matchDetail('2313821210'));
echo '<pre>';
var_dump($matchDetail);
echo '</pre>';*/


?>
