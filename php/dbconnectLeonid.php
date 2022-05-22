<?php
//    $dbName = "test";
//    $dbUser = "root";
//    $dbPassword = "";

//    $dbconnect = mysqli_connect("localhost", "p96211a3_test", "Aa_123123", "p96211a3_test");   
   $dbconnect = mysqli_connect("localhost", "root", "", "webclass"); 
   
   if (mysqli_connect_errno()){
      echo "Connection failed:".mysqli_connect_errno();
      exit;
   }
    //printf("Изначальная кодировка: %s\n", $dbconnect->character_set_name());

    /* изменение набора символов на utf8 */
    if (!$dbconnect->set_charset("utf8")) {
        printf("Ошибка при загрузке набора символов utf8: %s\n", $dbconnect->error);
        exit();
    } else {
        //printf("Текущий набор символов: %s\n",
		$dbconnect->character_set_name();
    }
?>