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

          $emptyContent = '
           <p style="color:rgb(255,247,153); font-size: 150%; padding: 0px 0px 20px 0px;"> empty blog</p>
           <p> This section is available for a new blog, please submit your blog in the USER BLOG webpage</p>';

          $fileCheck = filesize('blog.json');

          if(!$fileCheck){
            printRow('','images/News/1st.png', $emptyContent,$date);
            printRow('','images/News/2nd.png', $emptyContent,$date);
            printRow('','images/News/3rd.png', $emptyContent,$date);
          }

          else {
            $blogs = json_decode(file_get_contents('blog.json'),true);
            if (empty($blogs))  $blogs = array();
        //    $count = 1;
            $numberBlog = count($blogs);

            if($numberBlog > 3){
              $numberBlog = 3;
            }
            echo $numberBlog;
          //  echo var_dump($blogs);
          /*  foreach($blogs AS $index => $blog) {
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

              if ($count >= ONE_BLOG_DISPLAY) break;
          } */


          //  echo var_dump($blog);
            for ($i = 0; $i < $numberBlog; $i++) {

              $content = '
              <p style="color:rgb(255,247,153); font-size: 150%; padding: 0px 0px 20px 0px;">'.$blogs[$i]['name'].', '.$blogs[$i]['gender'].'</p>
              <p> Email: '.$blogs[$i]['email'].' </br>
                  Message: '.$blogs[$i]['message'].'
                  </p>';

                  $picUploaded = "upload/blogImage/".$blogs[$i]['blogImg'];

                  $blogDate = date('F', strtotime($blogs[$i]['date'])) . '<br/>' . date('Y', strtotime($blogs[$i]['date']));
            $date = '
            <div id="circle"><img src="images/News/circle.png"></div>
            <div id="date"><h2>'.$blogDate.'</h2></div>
            ';
            printRow('',$picUploaded, $content,$date);

            }

            for ($k = $numberBlog; $k < 3; $k++){
                printRow('','images/News/2nd.png', $emptyContent,$date);
                echo $k;
            }
        }



          printlist($line1,$line2,$line3);
         ?>




     </div>
</div>
</div>



<?php
  printFooter();
?>
