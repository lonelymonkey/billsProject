<?php
include 'global.inc';

$riotAPI = new riotAPI();

$championListData = $riotAPI->championListData();

echo $championListData;
 ?>
