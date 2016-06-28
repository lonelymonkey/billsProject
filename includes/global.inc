<?php

error_reporting(0);
/*
function printContent() {
  $picture = '<div class="image"><img src="images/hairstyle1.jpg" alt="Great hairstyle" style="width:210px;height:170px;" class="positionandflip"></div>';
  $picture2 = '<div class="image"><img src="images/hairstyle2.jpg" alt="Great hairstyle" style="width:210px;height:170px;" class="positionandflip"></div>';
  $picture3 = '<div class="image"><img src="images/hairstyle3.jpg" alt="Great hairstyle" style="width:210px;height:170px;" class="positionandflip"></div>';
  $picture4 = '<div class="image"><img src="images/hairstyle4.jpg" alt="Great hairstyle" style="width:210px;height:170px;" class="positionandflip"></div>';
  $sentence = '<h2>first picture</h2 </br> <p>Internal styling is used to define a style for one HTML page.</p>';
  listFourItems(imageList, $picture, $picture2, $picture3, $picture4);

}
*/

function printHeader($activeTab) {
  /*
  switch($activeTab) {
    case 'home':
      $homeClass = 'active';
      break;
    case 'hairstyle' :
      $hairstyleClass = 'active';
    default :
      break;
  }*/
${$activeTab.'Class'} = 'active';

$output = '
    <div id="background1" style="background-color: #eeeeee; position: relative;">
    <div id="appwrapper">
    <div id="header">
    	<div style="background-color: rgb(76,143,150); position: absolute; width: 100%; left: 0px; right: 0px; height: 119px;"></div>
    	<div class="col1">
    		<div id="title">
    			<h1 class="sansserif">ZIZURZ</h1>
    		</div>
    	</div>

    	<div class="col2">
    		<ul id="top-nav">
    			<li class="'.$homeClass.'"><a href="/hairstylePHP/index.php">Home</a></li>
    			<li class="'.$aboutClass.'"><a href="/hairstylePHP/about.php">ABOUT</a></li>
    			<li class="'.$hairstyleClass.'"><a href="/hairstylePHP/hairstyle.php">HAIRSTYLE</a></li>
    			<li class="'.$newClass.'"><a href="/hairstylePHP/news.php">NEWS</a></li>
    			<li class="'.$contactClass.'"><a href="/hairstylePHP/contact.php">CONTACT</a></li>
    		</ul>
    	</div>
    </div>
  ';
  echo $output;
}

function printcolWhite ($id, $width, $height, $input) {
  $output = '
    <div id="'.$id.'" style="background: white; border-color: rgb(40,170,170);
     border-style:solid; border-width: 1px; width:'.$width.'px; height: '.$height.'px ">
    '.$input.'
    </div>
    ';
  echo $output;
}

function printcolWhiteWidth ($id, $width, $height, $input, $borderwidth) {
  $output = '
    <div id="'.$id.'" style="background: rgb(255,255,255); border-color: rgb(95,179,189);
     border-style:solid; border-width: '.$borderwidth.'px; width:'.$width.'px; height: '.$height.'px; ">
    '.$input.'
    </div>
    ';
  echo $output;
}

function listFourItems ($class, $content1, $content2, $content3, $content4){
  $output = '
    <ul class= "'.$class.'">
      <li>
        '.$content1.'
      </li>
      <li>
        '.$content2.'
      </li>
      <li>
        '.$content3.'
      </li>
      <li>
        '.$content4.'
      </li>
    </ul>
  ';
  echo $output;
}

function listFourItemshair ($content1, $content2, $content3, $content4){
  $output = '
    <ul id= "picture_horiz">
      <li>
      <img src="crop_image/'.$content1.'.png" alt="Great hairstyle" style="max-width:235px;" class="front">
      <img src="crop_image/shadow.png" alt="Great hairstyle" style="max-width:220px;" class="back">
      </li>
      <li>
      <img src="crop_image/'.$content2.'.png" alt="Great hairstyle" style="max-width:235px;" class="front">
      <img src="crop_image/shadow.png" alt="Great hairstyle" style="max-width:220px;" class="back">
      </li>
      <li>
      <img src="crop_image/'.$content3.'.png" alt="Great hairstyle" style="max-width:235px;" class="front">
      <img src="crop_image/shadow.png" alt="Great hairstyle" style="max-width:220px;" class="back">
      </li>
      <li>
      <img src="crop_image/'.$content4.'.png" alt="Great hairstyle" style="max-width:235px;" class="front">
      <img src="crop_image/shadow.png" alt="Great hairstyle" style="max-width:220px;" class="back">
      </li>
    </ul>
  ';
  echo $output;
}

function backgroundimage($number) {
  $output = '
  <img src="crop_image/'.$number.'.png" alt="Great hairstyle" style="max-width:235px;" class="front">
  <img src="crop_image/shadow.png" alt="Great hairstyle" style="max-width:220px;" class="back">
  ';
  echo $output;
}

function smallHeader($id, $top, $left, $input) {
  $output = '
  <div id="'.$id.'" style="background: rgb(34,40,66); color: white; text-align: center;
   padding: 5px; position: relative; text-align: center; z-index: 1; width: 150px; height: 50px;
   top: '.$top.'px; left:'.$left.'px;">
    <h3>'.$input.'</h3>
  </div>
  ';
  echo $output;
}

function printFooter() {
  $output = '
  <div style="background-color: rgb(76,143,150); position: absolute; width: 100%; left: 0px; right: 0px; height: 140px;">
    <div id="footer">
  	<div id="col9">
  		<p>copyright 2013@ ZIZURZ all rights reserved</p>
  	</div>

  	<div id="col10">
  		<ul class="image-list-icons">
  			<li>
  				<img src="images/icons/googleplus.png" alt="Great hairstyle" style="width:20px;height:20px;">
  			</li>
  			<li>
  				<img src="images/icons/icon-facebook.png" alt="Great hairstyle" style="width:20px;height:20px;">
  			</li>
  			<li>
  				<img src="images/icons/icon-twitter2.png" alt="Great hairstyle" style="width:20px;height:20px;">
  			</li>
  			<li>
  				<img src="images/icons/pinterest.png" alt="Great hairstyle" style="width:20px;height:20px;">
  			</li>
  		</ul>
  	</div>

  </div>
  </div>
  </div>
  ';

  echo $output;
}



?>
