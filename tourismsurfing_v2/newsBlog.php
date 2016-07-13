

<?php
  include "../includes/global_v2.inc";
  include '../includes/databasebill.class.inc';
  $wholeView = new general;
  $database = new database;

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

//   $filenameBlog = 'blog.json';
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
   //$blogs = json_decode(file_get_contents('blog.json'),true);

   $database->query('SELECT * From userblog order by id DESC limit 3');
   $blogs = $database->resultset();
   echo "<pre>";
   print_r($blogs);
   echo "</pre>";

   if (empty($blogs))  $blogs = array();

   $blogs[] = array(
     'date' => date('F'),
     'name' => 'BillChouCa',
     'email' => 'BillChouCa@yahoo.com.tw',
     'message' => '1234567890',
     'gender' => 'male',
     'blogImg' => 'images/home/News_Blog.png'
   );

   $blogs[] = array(
     'date' => date('F'),
     'name' => 'BillChouCa',
     'email' => 'BillChouCa@yahoo.com.tw',
     'message' => '1234567890',
     'gender' => 'male',
     'blogImg' => 'images/home/Left.png'
   );

   $blogs[] = array(
     'date' => date('F'),
     'name' => 'BillChouCa',
     'email' => 'BillChouCa@yahoo.com.tw',
     'message' => '1234567890',
     'gender' => 'male',
     'blogImg' => 'images/home/right.png'
   );

/*   array(
         'date' => date('Y-m-d H:i:s'),
         'name' => $_POST["name"],
         'email' => $_POST["email"],
         'message' => $_POST["message"],
         'gender' => $_POST['gender'],
         'blogImg' => $blogImgName
     );
*/
   $count = 1;
   $contentBlog = '';
   foreach($blogs AS $index => $blog) {
     $content = '
      <p style="color:rgb(255,247,153); font-size: 150%; padding: 0px 0px 20px 0px;">'.$blog['name'].', '.$blog['gender'].'</p>
      <p> Email: '.$blog['email'].' </br>
         Message: '.$blog['msg'].'
      </p>';

     $picUploaded = 'upload/blogImage/blogImg-' . $blog['id'] . '.' . $blog['imgName'];

     $blogDate = date('F', strtotime($blog['sumbmitDate'])) . '<br/>' . date('Y', strtotime($blog['submitDate']));
     $date = '
     <div id="circle"><img src="images/News/circle.png"></div>
     <div id="date"><h2>'.$blogDate.'</h2></div>
     ';
    $contentBlog.=  $wholeView->printRow('',$picUploaded, $content,$date);

     if ($count >= MAX_BLOG_DISPLAY) break;
     $count++;
   }


  $contentBlog.= $wholeView->printlist($line1,$line2,$line3);

  $wholeView->content = $contentBlog;
  $wholeView->getView();

?>
