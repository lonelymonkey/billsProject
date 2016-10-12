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
  private function summonerId2Name(){
  };
  
  public function matchList($summonerId = 0){
    //$summonerId = $this->api->getSummonerId($summonerName);
    $matchList = $this->api->getMatchList($summonerId);

    $summonerNameTranslation = [];
    foreach ($matchList['games'] AS $game) {
      $players = $game['fellowPlayers'];
      foreach ($players AS $player) {
        $summonerNameTranslation[$player['summonerId']] = '';
      }
    }
    //array_keys($summonerNameTranslation);
    //finish $summonerNameTranslation  variable
    $summoners = $this->api->getSummoner(array_keys($summonerNameTranslation));
    foreach ($summoners AS $summoner) {
      $summonerNameTranslation[$summoner['summonerId']] = $summoner['summonerName'];
    }


    foreach ($matchList['games'] AS $gameIndex => $game) {
      $players = $game['fellowPlayers'];
      foreach ($players AS $playerIndex => $player) {
        $summonerId = $matchList['games'][$gameIndex]['fellowPlayers'][$playerIndex]['summonerId'];
        $summonerName = $summonerNameTranslation[$summonerId];
        $matchList['games'][$gameIndex]['fellowPlayers'][$playerIndex]['summonerName'] = $summonerName;
      }
    }


    return $matchList;
    //return $this->api->getMatchList($summonerId);
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
