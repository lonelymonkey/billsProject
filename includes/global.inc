<?php


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
    <div id="background1" style="background-color: pink; position: relative;">
    <div id="appwrapper">
    <div id="header">
    	<div style="background-color: blue; position: absolute; width: 100%; left: 0px; right: 0px; height: 119px;"></div>
    	<div class="col1">
    		<div id="title">
    			<h1 class="sansserif">ZIZURZ</h1>
    		</div>
    	</div>

    	<div class="col2">
    		<ul id="top-nav">
    			<li class="'.$homeClass.'"><a href="/hairstylePHP/index.php">Home</a></li>
    			<li class="'.$aboutClass.'">About</li>
    			<li class="'.$hairstyleClass.'">HAIRSTYLES</li>
    			<li class="'.$newClass.'">NEWS</li>
    			<li class="'.$contactClass.'">CONTACT</li>
    		</ul>
    	</div>
    </div>
  ';
  echo $output;
}
function printContent($input){

  $output = <<<EOB
  <div id="content" style="margin: 0px auto; width: 1250px;">
    $input
  </div>
EOB;
  echo $output;
}
function printFooter() {
  $output = '<div id="footer">
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
  </div>';

  echo $output;
}

?>
