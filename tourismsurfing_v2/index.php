
<?php
  include "../includes/global_v2.inc";
  $wholeView = new general;
  $content = '
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
  ';

  $wholeView->content = $content;
  $wholeView->getView();

?>
