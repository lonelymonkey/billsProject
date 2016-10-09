<?php
//use lolAPI;
//include 'global.inc';

//$riotAPI = new riotAPI();

//$championListData = $riotAPI->championListData();

class localFileResource {
  private $path = '../localResource';
  public function __construct($dataPath = '') {
    if(!empty($dataPath)){
      $this->$path = $dataPath;
    }
  }
  //parameters
  public function Match_v2_2() {
    return file_get_contents($this->path.'/matchv2.2.json');
  }
}


//echo $championListData;
class lolAPI {
  public $resource;
  private $config = array(
    'region' => 'NA'
  );
  public function __construct($config = array()) {
    $this->resource = new stdclass();

    if (!empty($config)){
      foreach($config AS $key => $val) {
        $this->config[$key] = $val;
      }
    }
    $this->resource->webAPI = '';  // new lolWebAPIResource()
    $this->resource->localCache = '';  //new localCacheResource()
    $this->resource->localFile = new localFileResource();  //new localFileResource()
  }

  public function getMatch($summonerId = 0) {
    return $this->resource->localFile->Match_v2_2();
    //return $this->resource->localFile->Match_v2_2();
  }
}
?>
