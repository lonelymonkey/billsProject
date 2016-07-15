<?php
/*********************************************************************************************
*   myConfig :
      generic config class to handle config variables
      this config class reads json file as input
    -read only class to prevent accident overriding
    -singleton pattern to make sure only one instance across any functions/apps/modules
**********************************************************************************************/
class myConfig {
  public $data;
  private static $inst = false;
  public static function getInstance() {
    if (!myConfig::$inst) {
      myConfig::$inst = new myConfig();
    }
    return myConfig::$inst;
  }
  private function __construct() {
    $this->data = json_decode(file_get_contents('config.json'),true);
    return;
  }
  public function __get($name) {
    //var_dump($this->data[$name]);
    if (isset($this->data[$name])) {
      return $this->data[$name];
    } else {
      throw new Exception("Config: $name does not exist");
    }
  }
  public function __set($name, $value) {
    echo 'nothing happens when setting value<br/>';
    return;
  }
}
echo '<pre>';
try {


  /*****************************************
      usage example
 ********************************************/
 //can use the config directly
  $var = 'i want to read testConfig2[1] : ' . myConfig::getInstance()->testConfig2[1] ;
  echo $var . '<br/>';
  foreach(myConfig::getInstance()->testConfig3 AS $index => $val) {
    echo "$index -> $val <br/>";
  }

  //or save it as $config
  $config = myConfig::getInstance();

  $var = 'i want to read testConfig2[1] : ' . $config->testConfig2[1] ;
  echo $var . '<br/>';
  foreach($config->testConfig3 AS $index => $val) {
    echo "$index -> $val <br/>";
  }

  /*************************************************
  *  testing to see if this class is truely read only, and singleton
  ****************************************************/
  //uncomment the line below and try to run it, u'll get an error
  //$config->test = 'hi';

  //uncomment the line below and will get an error -> because __construct is private
  //$config = new myConfig();

} catch (Exception $e) {
  echo 'Error: '.$e->getMessage();
}

echo '</pre>';

?>
