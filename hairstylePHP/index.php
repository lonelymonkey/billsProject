<?php

include "../includes/global.inc";
/*error_reporting(0);*/



$cssPath = 'css/style.css';


printHeader('new');

$content = <<<EOB
<div id="main1">
  <div id="border1">
    <div id="great-hairstyle">
      <div class="col1">
        <img src="images/great-hairstyle.jpg" alt="Great hairstyle" style="width:330px;height:300px;" class="parallelandposition">
      </div>

      <div class="col2">
        <div id="margin1">
          <h1 class="sansserif">Great hairstyle comes <br> from the experts.</h1>
        </div>
      </div>
    </div>
  </div>
</div>
EOB;
printContent($content);
printFooter();


$var ='hello';
$var2 = 'world';

/*
echo $var .'sdfsfs sdfsdf sdfaf ' . $var2 . 'sfsdf sdfdsf <br/>';
echo $var . "sdfsfs sdfsdf sdfaf $var2". "sfsdf sdfdsf <br/>";
echo 'she\'s hot <br/>';
*/
?>




<!DOCTYPE html>
<link href="<?php echo $cssPath; ?>" rel="stylesheet">
