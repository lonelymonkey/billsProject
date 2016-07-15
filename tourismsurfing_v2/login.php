<?php

include '../includes/global_v2.inc';
include '../includes/databasebill.class.inc';

$wholeView = new general;
$database = new Database;

session_start();

if(!empty($_POST['login'])) {
  if(!empty($_POST['userName']) && !empty($_POST['password'])) {
    $userName = $_POST['userName'];
    $password = $_POST['password'];


    $database->query('SELECT id, userName, password FROM userinfo where userName = :userName');
    $database->bind(':userName', $userName);
    $userInfo = $database->single();

    if( ($userInfo !== false) && ($database->rowCount() > 0)) {
      if($userInfo['password'] == $password) {

        $_SESSION['is_auth'] = true;
        $_SESSION['user_id'] = $row['id'];
        $_SESSION['name'] = $row['name'];
        header('location: userBlog.php');
      }

      else {
        $error = 'incorrect password';
      }
    }
    else {
      $error = 'your inputs do not match our records';
    }

  }
  else {
    $error = 'please enter your username and password';
  }
}


$content = '
<form method="post">
<div id="smallFontMessage">
Username: <span class="error">* '.$error.'</span>
</div>
<input type="text" name="userName" style="width:450px;">
<div id="smallFontMessage">
Password:
</div>
<input type="password" name="password" style="width:450px;">
</br>
<input type="submit" name="login" value="login">
</form>

';

$wholeView->content = $content;
$wholeView->getView();

 ?>
