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

  //private function summonerId2Name(){
  //};

  private function getSummonerName($summonerIds){
    $summonerNamesArray = [];
    $maxNumOfId = 40;
    $bufferArrray = array_chunk($summonerIds,$maxNumOfId);

    foreach ($bufferArrray AS $buffer) {
      $summonerIdString = implode(",",$buffer);
      //var_dump($summonerIdString);
      $summonerNames = $this->api->getSummonerName($summonerIdString);
      foreach ($summonerNames AS $summonerName){
        array_push($summonerNamesArray, $summonerName);
      }
    }
    //var_dump($summonerNamesArray);
    return $summonerNamesArray;

  }

  public function getSummonerIds($summonerNamesString){
    return $this->api->getSummonerIds($summonerNamesString);
  }

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
    $summoners = $this->getSummonerName(array_keys($summonerNameTranslation));

    foreach ($summoners AS $summoner) {
      $summonerNameTranslation[$summoner['id']] = $summoner['name'];
    }
    //var_dump($summonerNameTranslation);

    foreach ($matchList['games'] AS $gameIndex => $game) {
      $players = $game['fellowPlayers'];

      foreach ($players AS $playerIndex => $player) {
        $summonerId = $player["summonerId"];
        $summonerName = $summonerNameTranslation[$summonerId];
        $matchList['games'][$gameIndex]['fellowPlayers'][$playerIndex]['summonerName'] = $summonerName;
      }
    }

    //var_dump($matchList);
    return $matchList;
  }
  public function matchDetail($matchId = 0){
    return $this->api->getMatchDetail($matchId);
  }
}

$matchHistoryService = new matchHistoryService();

var_dump($matchHistoryService->getSummonerIds('epiccookierawr'));


?>
