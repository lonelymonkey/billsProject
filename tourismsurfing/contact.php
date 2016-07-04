<link href="style.css" rel="stylesheet">
<!DOCTYPE html>
<?php
  include "../includes/globalSurf.inc";

if (!empty($_POST['contact-us-submit'])) {
  $storageArray = array();
/*  $var =  '
      Name: '.$_POST["name"].'<br>
      Email address: '.$_POST["email"].'<br>
      Message: '.$_POST["message"];
      fwrite($myfile, print_r(json_encode($c), TRUE));
      $cars = array
        (
        array('name' => 'wayne','email' => 'wayne@hotmail.com', 'message' => 'sup' ),
        array('name' => 'wayne','email' => 'wayne@hotmail.com', 'message' => 'sup' )
        );

         var_dump($cars);*/
  $information = array('name' => $_POST["name"], 'email' => $_POST["email"], 'message' => $_POST["message"]);
  $filename = "customer.json";

  if(file_exists($filename)){
    $myfile = fopen("customer.json", "r") or die ("Unable to open customer.json");
    $filesize = filesize("customer.json");
    $contents = fread($myfile, $filesize);
    $storageArray = json_decode($contents);
    }

    $myfile = fopen("customer.json", "w") or die ("Unable to open customer.json");
    $count = count($storageArray);
    $storageArray[$count] = $information;
    $contents = json_encode($storageArray);

    fwrite($myfile,$contents);

    fclose($myfile);
/*  $tempTemp++;
  $temp = $tempTemp;
  echo $temp;
*/
}

  printheader();
?>

<div id="content">
  <div id="background">
  <?php
    printBackgroundMenu();
   ?>

   <div class="col2">
     <div id="firstContact">
       <div id="BigFont">
         We want to hear from you!
       </div>

     </br>

       <div id="smallFont">
         Free Website Templates
       </div>
       <p>As with the exterior, the experience of driving the vehicle feels like an oxymoron. On one hand, you're driving a production version of a hydrogen car. If you live near one of the filling stations and want to be on the bleeding edge of clean driving without tethering your vehicle to the grid for hours on end, you can buy one right now. While EVs are all the rage, fuel-cell vehicles (like traditional cars) only take five minutes to refuel with a familiar pump. On the other hand, once you get behind the wheel you don't feel like you're driving the future. It's sort of like driving a Camry.</p>
    </div>

      <div id="detail1">
          <div id="smallFont">
            CONTACT DETAILS
          </div>

        </br>

          <div id="smallFontWhite">
            LOCATION
      </div>
      <p>This is just a place holder, so you can see what the site would look like</p>
      <hr>

      <div id="smallFontWhite">
        Email
      </div>
        <p style="color:rgb(181,163,82); text-decoration:underline;">billchou@alumni.ubc.ca</p>
        <hr>

        <div id="smallFontWhite">
          Phone
        </div>

        <p>(604)324-2349</p>
        <p>(604)324-2349</p>
        <p>(604)324-2349</p>

    </div>

    <div id="detail2">
      <div id="smallFont">
        Send A Message
      </div>

    </br>
<form method="post">
    <div id="smallFontMessage">
      Your Name:
    </div>
    <input type="text" name="name" style="width:450px;">

    <div id="smallFontMessage">
      Email Address:
    </div>
    <input type="text" name="email" style="width:450px;">

    <div id="smallFontMessage">
      Message:
    </div>
    <textarea name="message" style="width:450px; height:300px;"></textarea>
    <input type="submit" value="submit" name="contact-us-submit">
</form>




    </div>

</div>
</div>
</div>


<?php
  printFooter();
?>
