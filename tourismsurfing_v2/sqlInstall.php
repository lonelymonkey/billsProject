<?php

include '../includes/databasesql.class.inc';
include '../includes/databasesql2.class.inc';

defined('DB_HOST') or define("DB_HOST", "localhost");
defined('DB_USER') or define("DB_USER", "root");
defined('DB_PASS') or define("DB_PASS", "");

$database = new Database();
$filename = '../includes/mysql_definition2.sql';

$lines = file($filename);
//var_dump($lines);
$trimFile = [];
$test = strlen(trim('  '));

foreach ($lines as $line)
{
  if(trim($line) == '')
  continue;
  $trimFile[] = $line;
}

var_dump($trimFile);

$length = count($trimFile);
echo $length;

$database->query($trimFile[0]);
$database->execute();

$databaseName = substr($trimFile[0], 16);
echo $databaseName;

$database2 = new Database2($databaseName);

for($i = 1; $i < $length; $i++)
{
  if(substr($trimFile[$i],0,2) == '/*' || substr($trimFile[$i],-2) == '*/')
  continue;

  $temp .= $trimFile[$i];
  echo $temp;
  if(substr(trim($trimFile[$i]), -1, 1) == ';'){
    $database2->query($temp);
    $database2->execute();
    $temp = '';
  }
}

echo 'Sql tables imported successfully';


 ?>
