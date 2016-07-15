<?php

ini_set('display_errors', 1);
error_reporting(E_ALL ^ E_NOTICE);

//error_reporting(0);
include 'config.inc';

defined('DB_HOST') or define("DB_HOST", "localhost");
defined('DB_USER') or define("DB_USER", "root");
defined('DB_PASS') or define("DB_PASS", "");
defined('DB_NAME') or define("DB_NAME", "surfdatabase");

defined('MAX_BLOG_DISPLAY') or define('MAX_BLOG_DISPLAY', '3');

class general {
/*   private static $instance = Null;

   public static function getInstance(){
     if(!isset(self::$instnace)){
       self::$instance = new getHeader();
     }

     return self::$instance;
   }*/

   public $content;
//   public $contentStart;
//   public $contentEnd;

   public function header(){
     return '<link href="style.css" rel="stylesheet">
            <!DOCTYPE html>';
   }

   public function getHeader() {
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
     return $output;
   }

   public function getMenu() {
  $currPage = '';
 switch ($_SERVER['REQUEST_URI']) {
   case '/tourismsurfing_v2/about.php':
    $currPage = 'about';
    break;
   case '/tourismsurfing_v2/contact.php':
    $currPage = 'contact';
    break;
   case '/tourismsurfing_v2/index.php':
    $currPage = 'index';
    break;
   case '/tourismsurfing_v2/newsBlog.php':
    $currPage = 'newsBlog';
    break;
   case '/tourismsurfing_v2/surfBase.php':
    $currPage = 'surfBase';
    break;
   case '/tourismsurfing_v2/userBlog.php':
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
          <h3><a href="/tourismsurfing_v2/index.php">HOME</a></h3>
        </div>

        <div id="surfbase" class="'.$surfBaseClass.'">
          <h3><a href="/tourismsurfing_v2/surfBase.php">SURF BASE</a></h3>
        </div>

        <div id="news" class="'.$newsBlogClass.'">
          <h3><a href="/tourismsurfing_v2/newsBlog.php">NEWS & BLOG</a></h3>
        </div>

        <div id="about" class="'.$aboutClass.'">
          <h3><a href="/tourismsurfing_v2/about.php">ABOUT</a></h3>
        </div>

        <div id="contact" class="'.$contactClass.'">
          <h3><a href="/tourismsurfing_v2/contact.php">CONTACT</a></h3>
        </div>

        <div id="userBlog" class="'.$userBlogClass.'">
          <h3><a href="/tourismsurfing_v2/userBlog.php">USER BLOG</a></h3>
        </div>
      </div>
  ';

  return $output;
}

public function getFooter() {
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
    return $output;
}

   public function getView() {
      $view = '';
      $view .= $this->header();
      //body
      $view .= $this->getHeader() .
        '<div id="content">
        <div id="background">
        '.$this->getMenu().'
         <div class="col2">
        '.$this->content.'
        </div>
        </div>
        </div>
        ';
      $view .= $this->getFooter();
      echo $view;


   }

/*   public function getViewFuncStart() {
      $view = '';
      $view .= $this->header();
      //body
      $view .= $this->getHeader() .
        '<div id="content">
        <div id="background">
        '.$this->getMenu().'
        <div class="col2">' .
        $this->contentStart;
      echo $view;
   }

   public function getViewFuncEnd() {
     $view = $this->contentEnd .
       '</div>
       </div>
       </div>
       ';
     $view .= $this->getFooter();
     echo $view;
   }*/

   public function printlist($content1,$content2,$content3) {
    $output = '
       <ul class="list">
         <li>'.$content1.'</li>
         <li>'.$content2.'</li>
         <li>'.$content3.'</li>
       </ul>
    ';

    return $output;
   }

   public function printRow($text, $picture, $content, $smallPicture) {
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

     return $output;
   }

   public static function printRowBlog($text, $picture, $content, $smallPicture) {
     $output = '
       <div id="footer_home">
       <div id="blog">
         '.$smallPicture.'
         <p style="font-size: 215%; padding: 0px 0px 10px 0px;">'.$text.'</p>
         <div style="position: relative; z-index: -1;"><img src="'.$picture.'" style="width=250px; height:250px;"></div>
       </div>

       <div id="paragraphBlog">
         '.$content.'
       </div>
     </div>';

     return $output;
   }
}
?>
