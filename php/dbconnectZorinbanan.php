<?php
//    $dbName = "test";
//    $dbUser = "root";
//    $dbPassword = "";

   $dbconnect = mysqli_connect("localhost", "root", "", "test");   
   
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