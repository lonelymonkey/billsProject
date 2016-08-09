<?php
  include "../includes/global_v2.inc";
  $wholeView = new general;

  $pic1 = '<img src="images/Surf Base/bot_first.png">';
  $pic2 = '<img src="images/Surf Base/bot_second.png">';
  $pic3 = '<img src="images/Surf Base/bot_last.png">';

  $picList = $wholeView->printlist($pic1,$pic2,$pic3);

  $content = '
  <div id="headerSurf">
    <h4 class="sansserif">Surfer\'s Paradise</h4>
   <div id="circleSurf">
    <img src="images/About/about_circle.png">
     <div id="wordSurf">
       <div id="smallFont">Go To Blog</div>
     </div>
  </div>

  </div>

  <div id="contentSurf">

    <div id="picture4">
     <h2 style="color: white; font-size: 150%;">This is just a placeholder</h2>
   </br>
 </br>
     <p style="color: white; line-height: 2;">Three suicide bombers opened fire before blowing themselves up in the main international airport in Istanbul on Tuesday, killing at least 31 people and wounding 147, the provincial governor and witnesses said.

Police fired shots to try to stop two of the attackers just before they reached a security checkpoint at the arrivals hall at Ataturk airport, Europe\'s third-busiest, but they blew themselves up, a second Turkish official said.</p>
    </div>

    <div id="picture5">
      <div><img src="images/Home/right.png" style="height:500px; width:500px;"></div>
    </div>

    <div id="secondHeader">
    <h2 style="color: white; font-size: 150%; margin: 20px 0px;">This is just a placeholder, so you can see what the site would look like</h2>
  </div>

   <div id="threePic">
    '.$picList.'
  </div>
  <div id="lastParagraph">
    <div class="paragraph">
      The next version of Android is dubbed "Nougat," Google revealed
      on Snapchat this morning (because of course it did). This was the first time that Google opened up the Android naming process to the public, and Nougat beat out other n-based treat suggestions including Nutter Butter, Nutella, Nerds and Necco Wafers. Of course, offering creative rights to the entire internet ensured there were a few sour apples in that system.
    </div>
  </div>

 </div>
  ';
  $wholeView->content = $content;
  $wholeView->getView();
?>
