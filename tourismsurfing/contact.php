<link href="style.css" rel="stylesheet">
<!DOCTYPE html>
<?php
  include "../includes/globalSurf.inc";
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

if (!empty($_POST['contact-us-submit'])) {
  $error = false;
  $errorMsg = array();
  //validate email
  //validate user
  if (empty($_POST['name'])) {
    $error = true;
    $errorMsg['name'] = 'Please insert your name.';
  }

  elseif (strlen(trim($_POST['name'])) == 0 && strlen($_POST['name']) > 0) {
     $error = true;
     $errorMsg['name'] = 'Invalid input : name';
  }

    // check if name only contains letters and whitespace
  elseif (!preg_match("/^[a-zA-Z ]*$/",$_POST['name'])) {
    $error = true;
    $errorMsg['name'] = 'Only letters and white space allowed';
  }

  if (empty($_POST['email'])) {
    $error = true;
    $errorMsg['email'] = 'Please insert your email.';
  }

  elseif (!filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)) {
    $error = true;
    $errorMsg['email'] = 'Invalid Email Address';
  }

  if (empty($_POST['message'])) {
    $error = true;
    $errorMsg['message'] = 'Please insert your message.';
  }

  elseif (strlen(trim($_POST['message'])) == 0 && strlen($_POST['message']) > 0) {
     $error = true;
     $errorMsg['message'] = 'Invalid input : message';
  }


//  elseif (strlen(trim($POST['message'])) == FALSE) {
//    $error = true;
//    $errorMsg['message'] = 'Invalid input : Message';
//  }
  //validate message



  if (!$error) {
    $storageArray = array();

    $information = array('name' => $_POST["name"], 'email' => $_POST["email"], 'message' => $_POST["message"]);
    $filename = "customer.json";

    if(file_exists($filename)){
      $myfile = fopen("customer.json", "r") or die ("Unable to open customer.json");
      $filesize = filesize("customer.json");
      $contents = fread($myfile, $filesize);
      $storageArray = json_decode($contents);
      }

      $myfile = fopen("customer.json", "w") or die ("Unable to open customer.json");
      //$count = count($storageArray);
      //$storageArray[$count] = $information;
      //array_push($storageArray,$information);
      $storageArray[] = $information;
      //$storageArray[0] = 'first item';
      $contents = json_encode($storageArray);
      fwrite($myfile,$contents);

      fclose($myfile);
  }



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
      Your Name: <span class="error">* <?php echo $errorMsg['name'];?></span>
    </div>
    <input type="text" name="name" style="width:450px;">
    <div id="smallFontMessage">
      Email Address: <span class="error">* <?php echo $errorMsg['email'];?></span>
    </div>
    <input type="text" name="email" style="width:450px;">
    <div id="smallFontMessage">
      Message: <span class="error">* <?php echo $errorMsg['message'];?></span>
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
