<?php
error_reporting(0);
/*
echo '<pre style="color:white">';
var_dump($_SERVER);
echo '</pre>';
*/
defined('MAX_BLOG_DISPLAY') or define('MAX_BLOG_DISPLAY', '3');


function printheader() {
  $output =
  '<div id="header">
    <div id="border_header">
      <div class="col1">
        <div class="image"><img src="cut_image/surf.png" style="max-width:50px"></div>
      </div>

      <div class="col2">
        <h1>Lumseko</h1>
        <h2>BEST SURFING SPOT</h2>
      </div>
    </div>
  </div>';

  echo $output;
}

function printFooter() {
  $output = '  <div id="footer">
      <div id="border_footer">
        <div class="col1">
          <p style= "color: rgb(255,247,153); font-size: 140%" class="arial">Newsletter</p>
          <p style=" color: white">Today on In Case You Missed It: The Airobotics drone system can autonomously
          launch UAVs and perform basic maintenance, like swapping out batteries.
          </p>
        </div>

        <div class="col2">
          <div id="email">
            <p style="color: white; padding: 6px;">email:</p>
          </div>
        </div>

        <div class="col3">
          <p style= "color: rgb(255,247,153); font-size: 140%" class="arial">Social</p>
          <ul id="icon-list">
            <li><div class="image"><img src="images/facebook.png"></div></li>
            <li><div class="image"><img src="images/Common/google_hover.png"></div></li>
            <li><div class="image"><img src="images/Common/twitter_hover.png"></div></li>
          </ul>
        </div>
      </div>
    </div>';

    echo $output;
}

function printBackgroundMenu() {
  $currPage = '';
 switch ($_SERVER['REQUEST_URI']) {
   case '/tourismsurfing/about.php':
    $currPage = 'about';
    break;
   case '/tourismsurfing/contact.php':
    $currPage = 'contact';
    break;
   case '/tourismsurfing/index.php':
    $currPage = 'index';
    break;
   case '/tourismsurfing/newsBlog.php':
    $currPage = 'newsBlog';
    break;
   case '/tourismsurfing/surfBase.php':
    $currPage = 'surfBase';
    break;
   case '/tourismsurfing/userBlog.php':
    $currPage = 'userBlog';
    break;
   default:
    $currPage = 'index';
    break;
 }
 ${$currPage . 'Class'} = 'active';
  $output = '
      <div class="col1">
        <div id="home" class="'.$indexClass.'">
          <h3><a href="/tourismsurfing/index.php">HOME</a></h3>
        </div>

        <div id="surfbase" class="'.$surfBaseClass.'">
          <h3><a href="/tourismsurfing/surfBase.php">SURF BASE</a></h3>
        </div>

        <div id="news" class="'.$newsBlogClass.'">
          <h3><a href="/tourismsurfing/newsBlog.php">NEWS & BLOG</a></h3>
        </div>

        <div id="about" class="'.$aboutClass.'">
          <h3><a href="/tourismsurfing/about.php">ABOUT</a></h3>
        </div>

        <div id="contact" class="'.$contactClass.'">
          <h3><a href="/tourismsurfing/contact.php">CONTACT</a></h3>
        </div>

        <div id="userBlog" class="'.$userBlogClass.'">
          <h3><a href="/tourismsurfing/userBlog.php">USER BLOG</a></h3>
        </div>
      </div>
  ';

  echo $output;
}

function printRow($text, $picture, $content, $smallPicture) {
  $output = '
    <div id="footer_home">
    <div id="blog">
      '.$smallPicture.'
      <p style="font-size: 215%; padding: 0px 0px 10px 0px;">'.$text.'</p>
      <div style="position: relative; z-index: -1;"><img src="'.$picture.'" style="width=250px; height:250px;"></div>
    </div>

    <div id="paragraph">
      '.$content.'
    </div>
  </div>';

  echo $output;
}

function printIndex() {
  $output = '
     <div class="col2">
       <div id="header_home">
         <h4 class="sansserif">BEST SURFING!</h4>
         <p style="font-size: 250%">This website templates has been designed by Free Templates for you, for free. You can replace
         this text with your own text.</p>
       </div>

       <div id="content_home">

         <div id="picture1">
           <div><img src="images/Home/Left.png" style="height:500px; width:500px;"></div>
         </div>

         <div id="picture3">
           <div id="mid"><img src="images/Home/mid circle.png"></div>
           <div id="surfing"><h2>GO TO SURF BASE</h2></div>
         </div>

         <div id="picture2">
           <div><img src="images/Home/right.png" style="height:400px; width:400px;"></div>
         </div>

       </div>

       <div id="footer_home">
          <div id="blog_index">
            <p style="font-size: 215%; padding: 0px 0px 10px 0px;">NEWS&BLOG</p>
            <div><img src="images/Home/News_blog.png" style="width=250px; height:250px;"></div>
          </div>

          <div id="paragraph">
            </br>
            </br>
            </br>
            <p style="color:rgb(255,247,153); font-size: 150%; padding: 0px 0px 20px 0px;">This is just a placeholder</p>
            <p>And Game of Thrones fans might want to see this Night King carved from
            fruit. As always, please share any interesting tech or science videos y
            ou find by using the #ICYMI hashtag on Twitter for @mskerryd.
            </p>
          </div>
        </div>

   </div>
  ';
  echo $output;
}

function printlist($content1,$content2,$content3) {
 $output = '
    <ul class="list">
      <li>'.$content1.'</li>
      <li>'.$content2.'</li>
      <li>'.$content3.'</li>
    </ul>
 ';

 echo $output;
}
 ?>
