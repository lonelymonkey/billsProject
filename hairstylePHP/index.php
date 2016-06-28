<?php

include "../includes/global.inc";
define('hair', 'helloworld');
/*
define('CONSTANT_PI', 3.144);
echo CONSTANT_PI;
$var = 10;
echo $var . '<br/>';
$var = array(
  'test' => '1',
  'test2' => 2,
  'test3' => 3,
  'test4' => 'helloworld',
  'test5' => CONSTANT_PI,
);
echo $var . '<br/>';
echo '<pre>';
var_dump($var);
echo '</pre>';
*/
//error_reporting(0);

/*$cssPath = 'css/style.css';*/

printHeader('home');
?>

<!DOCTYPE html>
<link href="css/style.css" rel="stylesheet">
<div id="content" style="margin: 0px auto; width: 1250px;">
<div id="main1">
  <div id="border1">
    <?php
    $content = '
        <div class="col1">
					<img src="images/great-hairstyle.jpg" alt="Great hairstyle" style="width:330px;height:300px;" class="parallelandposition">
				</div>

				<div class="col2">
					<div id="margin1">
						<h1 class="sansserif">Great hairstyle comes <br> from the experts.</h1>
					</div>
				</div>';
   printcolWhite('hair', 1015, 300, $content);
    ?>
  </div>
</div>

<div id="main2">
		<div id="border2">
      <?php
        $picture = '<div class="image"><img src="images/hairstyle1.jpg" alt="Great hairstyle" style="width:210px;height:170px;" class="positionandflip"></div>';
        $picture2 = '<div class="image"><img src="images/hairstyle2.jpg" alt="Great hairstyle" style="width:210px;height:170px;" class="positionandflip"></div>';
        $picture3 = '<div class="image"><img src="images/hairstyle3.jpg" alt="Great hairstyle" style="width:210px;height:170px;" class="positionandflip"></div>';
        $picture4 = '<div class="image"><img src="images/hairstyle4.jpg" alt="Great hairstyle" style="width:210px;height:170px;" class="positionandflip"></div>';

        $pictureArray = array();
        /*
        $pictureArray[] = '<div class="image"><img src="images/hairstyle1.jpg" alt="Great hairstyle" style="width:210px;height:170px;" class="positionandflip"></div>';
        $pictureArray[] = '<div class="image"><img src="images/hairstyle2.jpg" alt="Great hairstyle" style="width:210px;height:170px;" class="positionandflip"></div>';
        $pictureArray[] = '<div class="image"><img src="images/hairstyle3.jpg" alt="Great hairstyle" style="width:210px;height:170px;" class="positionandflip"></div>';
        $pictureArray[] = '<div class="image"><img src="images/hairstyle4.jpg" alt="Great hairstyle" style="width:210px;height:170px;" class="positionandflip"></div>';
        $pictureArray[] = '<div class="image"><img src="images/hairstyle4.jpg" alt="Great hairstyle" style="width:210px;height:170px;" class="positionandflip"></div>';
        $pictureArray[] = '<div class="image"><img src="images/hairstyle4.jpg" alt="Great hairstyle" style="width:210px;height:170px;" class="positionandflip"></div>';
*/
        $sentence = '<h2>first picture</h2 </br> <p>Internal styling is used to define a style for one HTML page.</p>';
        listFourItems('imageList', $picture, $picture2, $picture3, $picture4);
        /*listFourItems(imageList, $pictureArray);*/

        listFourItems('imageList', $sentence, $sentence, $sentence, $sentence);

        printContent();
      ?>
		</div>
</div>

<div id="main3">
		<div id="border3">
			<div class="col1bot">
        <?php
        smallHeader('feature',45,13,'Featured');
        ?>

				<div id="block1">
					<div class="col3">
						<img src="images/featured.jpg" alt="Great hairstyle" style="width:100px;height:100px;" class="position">
					</div>

					<div class="col4">
						<div id="margin2">
							<h4>hair, I just met you</h4>
						</div>
					</div>

					<div id="botparagraph">
						<p>At W3Schools you will find complete references about tags, attributes, events, color names, entities, character-sets, URL encoding, language codes, HTTP messages, and more.</p>
					</div>
				</div>
			</div>
			<div class="col2bot">
				<div class="col5">
          <?php
          smallHeader(feature,45,20,Hairstyle);
          ?>

					<div id="block2">
						<div id="padding1">
							<p>At W3Schools you will find complete references about tags, attributes, events, color names, entities, character-sets, URL encoding, language codes, HTTP messages, and more.</p>
							</br><p style="text-align: right">Mike M</p>
						</div>
					</div>

				<div class="col6">
					<div id="block3">
						<div class="col7">
							<img src="images/skinhead.png" alt="Great hairstyle" style="width:200px;height:230px;">
						</div>

						<div class="col8">
							<p style="line-height: 150%">At W3Schools you will find references about tags, attributes, events, color names, entities</p>
						</div>
					</div>
				</div>
				</div>
			</div>
		</div>
	</div>
</div>



</div>

<?php
printFooter();
?>
