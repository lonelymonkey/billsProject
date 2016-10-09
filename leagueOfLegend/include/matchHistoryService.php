<?php
//use matchHistoryService;

include 'lolAPI.php';

class matchHistoryService{
  private $api;
  public function __construct() {
    $this->api = new lolAPI(array(
      'region' => 'NA'
    ));
  }
  public function matchHistory() {
    return $this->api->getMatch();
  }
  public function matchDetail() {

  }
  public function doSomething(){

  }
}

$matchHistoryService = new matchHistoryService();
var_dump($matchHistoryService->matchHistory());
?>
