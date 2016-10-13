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

    $championNameAndImage = $this->api->getNameAndImage();
    $items = $this->api->getItems();
    $spells = $this->api->getSummonerSpell();

    //var_dump($spells);

    foreach ($summoners AS $summoner) {
      $summonerNameTranslation[$summoner['id']] = $summoner['name'];
    }
    //var_dump($summonerNameTranslation);

    //var_dump($items);
    foreach ($matchList['games'] AS $gameIndex => $game) {
      $players = $game['fellowPlayers'];
      $stats = $game['stats'];
      $matchList['games'][$gameIndex]["championName"] = $championNameAndImage['data'][$game['championId']]['name'];
      $matchList['games'][$gameIndex]["title"] = $championNameAndImage['data'][$game['championId']]['title'];
      $matchList['games'][$gameIndex]["image"] = $championNameAndImage['data'][$game['championId']]['image']['full'];

      foreach ($players AS $playerIndex => $player) {
        $summonerId = $player["summonerId"];
        $summonerName = $summonerNameTranslation[$summonerId];
        $matchList['games'][$gameIndex]['fellowPlayers'][$playerIndex]['summonerName'] = $summonerName;
        if($player["teamId"] == 100){
          $matchList['games'][$gameIndex]['fellowPlayers'][$playerIndex]['teamColor'] = 'blue';
        }
        else{
          $matchList['games'][$gameIndex]['fellowPlayers'][$playerIndex]['teamColor'] = 'purple';
        }
      }

      for($i = 1; $i<=2; $i++){
        $matchList['games'][$gameIndex]['spellName'.$i] = $spells['data'][$game['spell'.$i]]['name'];
      }

      for($i = 0; $i<=6; $i++){
        if(!empty($matchList['games'][$gameIndex]["stats"]['item'.$i])){
          $matchList['games'][$gameIndex]["stats"]['itemName'.$i] = $items['data'][$game['stats']['item'.$i]]['name'];
          $matchList['games'][$gameIndex]["stats"]['itemImage'.$i] = $items['data'][$game['stats']['item'.$i]]['image']['full'];
        }
      }
          //var_dump($matchList['games'][$gameIndex]["stats"]);
      }

    //var_dump($matchList);
    return $matchList;
  }
  public function matchDetail($matchId = 0){
    return $this->api->getMatchDetail($matchId);
  }
}

/*$matchHistoryService = new matchHistoryService();
echo '<pre>';
var_dump($matchHistoryService->matchList(19732385));
echo '</pre>';*/
//var_dump($matchHistoryService->getSummonerIds('epiccookierawr'));


?>
