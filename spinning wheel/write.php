<?php
include '../includes/databasebill.class.inc';
include '../includes/config.inc';
  $data = $_POST;
  var_dump($data);
  $database = new Database;

  //$database->query('INSERT INTO mytable (FName, LName, Age, Gender) VALUES (:fname, :lname, :age, :gender)');
  $database->query('SELECT w.setID, w.setName, x.name, x.distribution, x.color from wheelset as w left join probabilityslice as x on w.setID = x.setID where w.setID = (select max(setID) from wheelset)');

  $lastEntry = $database->resultset();

  $entryLength = count($lastEntry);

/*  echo "<pre>";
  print_r($data);
  echo "</pre>";

  echo "<pre>";
  print_r($lastEntry);
  echo "</pre>";*/

  //compore the current set with the last set, if they are equal, just enter the winner into the database
  if($data['set'][0] == $lastEntry[0]['setName']){ //setname
    for($i = 0; $i<$entryLength; $i++){
      if($data['name'][$i] != $lastEntry[$i]['name']){
        storeNewSet($database, $data);
       echo 'new set with identical name added1';
        break;
      }
      elseif ($data['probability'][$i] != $lastEntry[$i]['distribution']) { //distribution
        storeNewSet($database, $data);
        echo 'new set with identical name added2';
        break;
      }
      elseif($data['color'][$i] != $lastEntry[$i]['color']){ //color
        storeNewSet($database, $data);
        echo 'new set with identical name added3';
        break;
      }
    }
  }
  else{
    storeNewSet($database, $data);
    echo 'new set added';
  }

  $database->query('SELECT COUNT(setID) FROM wheelSet');
  $foreignKey = $database->single();
  /*echo "<pre>";
  var_dump($foreignKey);
  echo "</pre>";*/

  $database->query('INSERT into wheelResult (setID,winner) VALUES (:setID,:winner)');
  $database->bind(':setID', intval($foreignKey));
  $database->bind(':winner', $data['winner'][0]);
  $database->execute();
//functions


  function storeNewSet($database, $data){

    $count = count($data['name']);

    $database->query('INSERT INTO wheelset (setName) VALUES (:setname)');
    $database->bind(':setname',$data['set'][0]);
    $database->execute();

    $setID = $database->lastInsertId();

    $database->beginTransaction();

    $database->query('INSERT INTO probabilityslice (setID,name,distribution,color) VALUES (:setID,:name,:distribution,:color)');

    for($i = 0; $i<$count; $i++){
      $database->bind(':setID',$setID);
      $database->bind(':name', $data['name'][$i]);
      $database->bind(':distribution', $data['probability'][$i]);
      $database->bind(':color', $data['color'][$i]);
      $database->execute();
    }

    $database->endTransaction();
  }


  /*
  var_dump($data);
  echo count($data->name);
  echo $setID;

  truncate table probabilitySlice;
  truncate table wheelResult;
  delete from wheelSet;
  ALTER TABLE wheelset AUTO_INCREMENT = 1;


  select * from wheelset;
  select * from probabilitySlice;
  select * from wheelresult;

  select w.setID, w.setName, x.name, x.distribution, x.color from wheelset as w left join probabilityslice as x on w.setID = x.setID where w.setID = (select max(setID) from wheelset);

  select w.setID, w.setName, x.name, x.distribution, x.color from wheelset as w left join probabilityslice as x on w.setID = x.setID;
  */
?>
