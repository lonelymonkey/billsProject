<?php

include '../includes/databasesql.class.inc';

defined('DB_HOST') or define("DB_HOST", "localhost");
defined('DB_USER') or define("DB_USER", "root");
defined('DB_PASS') or define("DB_PASS", "");

$database = new Database();
var_dump($database);
$filename = '../includes/mysql_definition2.sql';

$lines = file($filename);
$temp = '';

//var_dump($lines);

foreach ($lines as $line)
{
  if($line == '' || substr($line,0,2) == '/*' || substr($line,-2) == '*/')
  continue;

  $temp .= $line;
  echo $temp;
  if(substr(trim($line), -1, 1) == ';'){
    $database->query($temp);
    $database->execute();
    $temp = '';
  }
}

echo 'Sql database and tables imported successfully';
 ?>
