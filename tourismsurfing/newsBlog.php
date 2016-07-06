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

          $filenameBlog = 'blog.json';
          /*
          $filenamePic = 'picture.txt';

          if(filesize($filenameBlog) > 0){
            $myfileBlog = fopen($filenameBlog,"r") or die ("unable to open blog.json");
            $filesizeBlog = filesize($filenameBlog);
            $contentsBlog = fread($myfileBlog, $filesizeBlog);
            $blogContents = json_decode($contentsBlog);
            fclose($myfileBlog);
          }

          if(filesize($filenamePic) > 0) {
            $myfilePic = fopen($filenamePic, "r") or die ("unable to open picture.txt");
            $filesizePic = filesize($filenamePic);
            $contentsPic = fread($myfilePic, $filesizePic);
            $picUploaded = $contentsPic;
            fclose($myfilePic);
          }
          */

          $today = getdate();

          $date = '
          <div id="circle"><img src="images/News/circle.png"></div>
          <div id="date"><h2>'.$today['month'].' </br> '.$today['year'].'</h2></div>
          ';

          //echo $blogContents->genderBlog;
          /*

          $content = '
           <p style="color:rgb(255,247,153); font-size: 150%; padding: 0px 0px 20px 0px;">'.$blogContents->name.', '.$blogContents->gender.'</p>
           <p> Email: '.$blogContents->email.' </br>
              Message: '.$blogContents->message.'
           </p>';
          printRow('',$picUploaded, $content,$date);
          printRow('','News/2nd.png', $content,$date);
          printRow('','News/3rd.png', $content,$date);

*/
          $blogs = json_decode(file_get_contents('blog.json'),true);
          if (empty($blogs))  $blogs = array();
          $count = 1;

          foreach($blogs AS $index => $blog) {
            $content = '
             <p style="color:rgb(255,247,153); font-size: 150%; padding: 0px 0px 20px 0px;">'.$blog['name'].', '.$blog['gender'].'</p>
             <p> Email: '.$blog['email'].' </br>
                Message: '.$blog['message'].'
             </p>';

            $picUploaded = "upload/blogImage/".$blog['blogImg'];

            $blogDate = date('F', strtotime($blog['date'])) . '<br/>' . date('Y', strtotime($blog['date']));
            $date = '
            <div id="circle"><img src="images/News/circle.png"></div>
            <div id="date"><h2>'.$blogDate.'</h2></div>
            ';
            printRow('',$picUploaded, $content,$date);


            if ($count >= MAX_BLOG_DISPLAY) break;
            $count++;
          }


          printlist($line1,$line2,$line3);
         ?>




     </div>
</div>
</div>



<?php
  printFooter();
?>
