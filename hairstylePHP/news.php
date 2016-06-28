<?php

include "../includes/global.inc";
error_reporting(0);
/*$cssPath = 'css/style.css';*/

printHeader('new');
?>

<!DOCTYPE html>
<link href="css/style_news.css" rel="stylesheet">
<div id="content" style="margin: 0px auto; width: 1250px;">

  <div id="main">
		<div id="border">
			<div class="col1">
				<h2 class="sansserif">News</h2>
				</br>
				</br>
				<p>After years of being teased with prototypes, developer kits and tech demos, it's finally happening: Virtual reality is on the cusp of going mainstream. Need evidence? Just look at the events of E3 2016. Over the past week, the first-ever VR headset for a home console got a release date, and we caught a glimpse of virtual reality games from popular franchises like Star Wars, Final Fantasy and Batman. Better still, pretty much every major player in the industry (save for Nintendo) promised to support VR in 2017. On the surface, things are looking amazing. Dig a little deeper, though, and the situation just might be terrible.</p>
				</br>
				<p>Don't misunderstand me: The VR announcements at E3 are a good indicator that consumer virtual reality is about to go mainstream. In a broad sense, that's fantastic -- but the details are a little worrying. Take Sony, for instance. At E3, we learned that the PlayStation VR headset would be available in October, and that early adopters would have as many as 50 games to choose from by the end of the year. Unfortunately, we also learned that some of those games might make you sick.</p>
				</br>
				<p>Even players who've spent countless hours in virtual reality (like our own Jess Conditt) found themselves on the verge of puking while playing Resident Evil 7: Biohazard</p>
				</br>
				<p>and it wasn't because of the horror game's gory visuals either. No, it's that the game is pushing the limits of PlayStation's hardware, barely managing to run at the minimum 60 frames per second required for PSVR. The problem? Every other VR headset on the market recommends that games run at a minimum of 90 fps.</p>
			</div>

			<div class="col2">
			<?php
        $content = '
          <h3 class="arial">Recent News</h3>
          <h4 class="helvetica">Hair, I just met you</h4>
          <p>Oculus VR\'s Palmer Luckey warned about this exact scenario two years ago. "When [VR] arrives, it has to be good," he told me in 2014. "I think really bad VR is the only thing that can kill off VR." </p>
          </br>
          <h4 class="helvetica">Styling hair</h4>
          <p>Maybe that\'s why Microsoft is holding off on offering VR to Xbox users until the arrival of its forthcoming Project Scorpio -- an upgraded version of its console designed specifically for virtual reality and 4K content.</p>
          </br>
          <h4 class="helvetica">how to pick the right hairstyle</h4>
          <p>an upgraded version of its console designed specifically for virtual reality and 4K content. Sony\'s own PlayStation Neo will probably help with low framerates too, but Sony has also promised that all future games will run on today\'s PS4 hardware.</p>
        ';

        printcolWhiteWidth (box, 318, 530, $content, 7);
       ?>
				</div>
			</div>
		</div>
	</div>

</div>

<?php
printFooter();
?>
