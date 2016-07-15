<?php

include '../includes/global_v2.inc';
include '../includes/databasebill.class.inc';

$wholeView = new general;
$database = new Database;

$val = $_GET['id'];

$database->query('SELECT name, email, msg, gender, submitDate, imgName FROM userblog WHERE id = :id');
$database->bind(':id', $val);

$blogReceived = $database->single();

//echo "<pre>";
//print_r($blogReceived);
//echo "</pre>";

$content = '
     <p style="color:rgb(255,247,153); font-size: 150%; padding: 0px 0px 20px 0px;">'.htmlspecialchars($blogReceived['name']).', '.htmlspecialchars($blogReceived['gender']).'</p>
     <p> Email: '.htmlspecialchars($blogReceived['email']).' </br>
        Message: '.htmlspecialchars($blogReceived['msg']).'
     </p>';

    $picUploaded = 'upload/blogImage/blogImg-'.$val.'.'.$blogReceived['imgName'];

    $blogDate = date('M', strtotime($blogReceived['submitDate'])) . '<br/>' . date('Y', strtotime($blogReceived['submitDate']));
    $date = '
    <div id="circle"><img src="images/News/circle.png"></div>
    <div id="date"><h2>'.$blogDate.'</h2></div>
    ';
   $contentBlog =  general::printRowBlog('',$picUploaded, $content,$date);


$content = '<div id="displayBlog"> '.$contentBlog.' </div>';
$wholeView->content = $content;
$wholeView->getView();

 ?>
