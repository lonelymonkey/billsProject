<?php
include "includes/databasebill.class.inc";

define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASS", "");
define("DB_NAME", "surfdatabase");

$database = new Database();

$database->query('INSERT INTO contactus (name, email, msg) VALUES (:name, :email, :msg)');
$database->bind(':name', 'John');
$database->bind(':email', 'John@yahoo.com.tw');
$database->bind(':msg', 'Hello World');

$database->execute();
echo $database->lastInsertId();
?>
