<?php

include "../includes/global.inc";
error_reporting(0);
/*$cssPath = 'css/style.css';*/

printHeader('hairstyle');
?>

<!DOCTYPE html>
<link href="css/style_hairstyle.css" rel="stylesheet">
<div id="content" style="margin: 0px auto; width: 1250px;">

  <div id="main">
  		<div id="border">
  			<h2 class="sansserif">Hairstyles<h2>
  			</br>
  			<div id="picture_vert">
  					<ul id="picture_horiz">
              <?php
                listFourItemshair(1,2,3,4);
               ?>

              <?php
                listFourItemshair(5,6,7,8);
              ?>

              <?php
                listFourItemshair(9,10,11,12);
                ?>

              <?php
                listFourItemshair(13,14,15,16);
                ?>

                <?php
                  listFourItemshair(17,18,19,20);
                 ?>

                 <?php
                   listFourItemshair(21,22,23,24);
                  ?>

  			</div>
  		</div>
  	</div>

</div>

<?php
printFooter();
?>
