<?php

class myTemplate {
  public $content = '';
  public function __construct($content) {
    $this->content = $content;
  }

  private function head() {
    $view = '';

    $view .= '<!DOCTYPE html><html>
              <head>
                  <link href="style.css" rel="stylesheet">
              </head>
            ';
    return $view;
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
  public function printFooter() {
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
  //new design
  public function getFooter_v2() {

  }
  public function printView(){
    $this->getView();
  }
  public function getView() {
    $view = '';
    $view .= $this->head();
    //body
    $view .=  $this->getHeader() .
              '<div id="content">
                  <div id="background">
                  '.$this->getMenu().'
                  '.$this->content.'
                  </div>
              </div>
              ';

   $view .= $this->getFooter();
   echo $view;
  }



}



?>
