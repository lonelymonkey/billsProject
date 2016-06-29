<link href="style.css" rel="stylesheet">
<!DOCTYPE html>
<?php
  include "../includes/globalSurf.inc";
  printheader();
?>

<div id="content">
  <div id="background">
  <?php
    printBackgroundMenu();
   ?>

   <div class="col2">
     <?php
        $content = '
         <p style="color:rgb(255,247,153); font-size: 150%; padding: 0px 0px 20px 0px;">This is just a placeholder</p>
         <p>And Game of Thrones fans might want to see this Night King carved from
         fruit. As always, please share any interesting tech or science videos y
         ou find by using the #ICYMI hashtag on Twitter for @mskerryd.
         </p>';

         $date = '
         <div id="circle"><img src="images/News/circle.png"></div>
         <div id="date"><h2>SEPT </br> 2012</h2></div>
         ';

         $line1 = '
         <h5>RECENT POST</h5>
         <p style="color:white;">nd Game of Thrones fans might want to see this Night King carved from
         fruit. As always, please share any interesting tech or science videos y</p>
         ';

         $line2 = '
         <h5>POPULAR POST</h5>
         <p style="color:white;">nd Game of Thrones fans might want to see this Night King carved from
         fruit. As always, please share any interesting tech or science videos y</p>
         ';

         $line3 = '
         <h5>ARCHIVE</h5>
         <p style="color:white;">nd Game of Thrones fans might want to see this Night King carved from
         fruit. As always, please share any interesting tech or science videos y</p>
         ';

          printRow('','News/1st.png', $content,$date);
          printRow('','News/2nd.png', $content,$date);
          printRow('','News/3rd.png', $content,$date);

          printlist($line1,$line2,$line3);
         ?>




     </div>
</div>
</div>



<?php
  printFooter();
?>
