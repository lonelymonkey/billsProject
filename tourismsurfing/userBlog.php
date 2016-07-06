<link href="style.css" rel="stylesheet">
<!DOCTYPE html>
<?php
  include "../includes/globalSurf.inc";

  if (!empty($_POST['blogSubmit'])) {
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

    if (empty($_POST["gender"])) {
      $error = true;
      $errorMsg['gender'] = 'Please choose gender.';
    }


  //  elseif (strlen(trim($POST['message'])) == FALSE) {
  //    $error = true;
  //    $errorMsg['message'] = 'Invalid input : Message';
  //  }
    //validate message



    if (!$error) {
      $blogInfo = array('name' => $_POST["name"], 'email' => $_POST["email"], 'message' => $_POST["message"], 'gender' => $_POST['gender']);
      $filename = "blog.json";


      $myfile = fopen($filename, "w") or die ("Unable to open customer.json");
        //$count = count($storageArray);
        //$storageArray[$count] = $information;
        //array_push($storageArray,$information);
        //$storageArray[0] = 'first item';
      $contents = json_encode($blogInfo);
        fwrite($myfile,$contents);
        fclose($myfile);
    }



  }

  if(!empty($_POST['picSubmit'])){
    $picChosen = $_FILES['image']['name'];
    $filenameChosen = 'picture.txt';
    $myfileChosen = fopen($filenameChosen,"w") or die ("unable to write picture.txt");
    fwrite($myfileChosen,$picChosen);
    fclose($myfileChosen);
    }

  printheader();
?>

<div id="content">
  <div id="background">
  <?php
    printBackgroundMenu();
   ?>

   <div class="col2">
      <div id="bigFont">
        Submit your Blog here!!
      </div>

      <div id="detail3">
        <div id="smallFont">
          Blog Submission
        </div>

      </br>
  <form method="post">
      <div id="smallFontMessage">
        Your Name: <span class="error">* <?php echo $errorMsg['name'] ?></span>
      </div>
      <input type="text" name="name" style="width:450px;">
      <div id="smallFontMessage">
        Email Address: <span class="error">* <?php echo $errorMsg['email'] ?></span>
      </div>
      <input type="text" name="email" style="width:450px;">
      <div id="smallFontMessage">
        Message: <span class="error">* <?php echo $errorMsg['message'] ?></span>
      </div>
      <textarea name="message" style="width:450px; height:300px;"></textarea>

      <input type="radio" name="gender" value="female"> <div id="smallFontGender">Female</div> </br> </br>
      <input type="radio" name="gender" value="male"> <div id="smallFontGender">Male</div>
    </br> <span class="error">* <?php echo $errorMsg['gender'] ?></span> </br>

      <input type="submit" value="submit" name="blogSubmit">
  </form>

  <form action="" method="POST" enctype="multipart/form-data">
  <input type="file" name="image" />
  <input type="submit" value="upload" name="picSubmit">
  <?php
  $imageName = $_FILES['image']['name'];
  move_uploaded_file($_FILES['image']['tmp_name'],"images/".$imageName);
  echo $_POST['gender'];
  ?>
  </form>

  </div>
      </div>
   </div>
</div>



<?php
  printFooter();
?>
