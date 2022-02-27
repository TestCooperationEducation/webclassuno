<?php
  if (isset($_POST['dbName']) === true && empty($_POST['dbName']) === false &&
      isset($_POST['dbUser']) === true && empty($_POST['dbUser']) === false &&
      isset($_POST['dbPassword']) === true && empty($_POST['dbPassword']) === false) {
    include("dbconnect.php");
    $login = (trim($_POST['login']));
    $password = (trim($_POST['password']));
    // mysql_real_escape_string
    if (isset($_POST['accounting']) === true && empty($_POST['accounting']) === false) {
      $accounting = trim($_POST['accounting']);
    }
    if (isset($_POST['reportType']) === true && empty($_POST['reportType']) === false) {
      $reportType = trim($_POST['reportType']);
    }
    if (isset($_POST['analyticsType']) === true && empty($_POST['analyticsType']) === false) {
      $analyticsType = trim($_POST['analyticsType']);
      $weeks = trim($_POST['weeks']);
      $start = trim($_POST['start']);
    }
    if (isset($_POST['area']) === true && empty($_POST['area']) === false) {
      $area = trim($_POST['area']);
      $areaTrigger = true;
    } else {
      $area = '0';
      $areaTrigger = false;
    }
    if (isset($_POST['area']) === false) {
      $areaTrigger = false;
    }
    if (isset($_POST['day']) === true && empty($_POST['day']) === false) {
      $dayOfTheWeek = trim($_POST['day']);
    } else {
      $dayOfTheWeek = '0';
    }
    $salesPartnerTrigger = false;
    if (isset($_POST['salesPartnersID']) === true && empty($_POST['salesPartnersID']) === false) {
      $salesPartnerID = trim($_POST['salesPartnersID']);
      $salesPartnerTrigger = true;
    }
    $index = (int)$area - 1;
    if ((int)$area == 7) {
      $index = (int)$area - 2;
    }
    // if (isset($_POST['accSubject']) === true && empty($_POST['accSubject']) === false) {
      $accSubjectPost = trim($_POST['accSubject']);
    // } else {
    //   $accSubject = 1;
    // }
    if ($accSubjectPost == 2) {
      $accSubject = "На Ли Ген Сун";
    }
    if ($accSubjectPost == 3) {
      $accSubject = "На Че Роман Енгунович";
    }
    if ($accSubjectPost == 1) {
      $accSubject = "";
    }
    if ($accSubjectPost == 4) {
      $accSubject = "ООО Кайман";
    }
    if ($accSubjectPost == 5) {
      $accSubject = "ООО Кайман Плюс";
    }
    date_default_timezone_set("UTC"); // Устанавливаем часовой пояс по Гринвичу
    $time = time(); // Вот это значение отправляем в базу
    $time += 11 * 3600; // Добавляем 11 часов к времени по Гринвичу
    $dateTimeDoc = date("Y-m-d H:i:s", $time); // Выводим время пользователя, согласно его часовому поясу

    $date = date("Y-m-d H:i:s");
    $currDate = date("Y-m-d H:i:s");
    $currDate = strtotime($dateTimeDoc);
    $date = strtotime($dateTimeDoc);
    if ($accounting == "1") {
      // $date = date('Y-m-d', $date);
    } else {
      $date = strtotime("-4 day", $date);
    }
    // $dateTime = date('Y-m-d H:i:s', $date);
    // $dateTime = "2019-06-10 00:00:00";
    if (empty($_POST['dateStart']) === false && empty($_POST['dateEnd']) === false) {
      $dateStart = (trim($_POST['dateStart']));
      $dateEnd = (trim($_POST['dateEnd']));
    } else {
      $dateStart = date('Y-m-d', $date);
      $dateEnd = date('Y-m-d H:i:s', $currDate);
    }
    $areaArray[0] = 'invoice_one';
    $areaArray[1] = 'invoice_two';
    $areaArray[2] = 'invoice_three';
    $areaArray[3] = 'invoice_four';
    $areaArray[4] = 'invoice_five';
    $areaArray[5] = 'invoice_seven';

    $resultArray = array();
    $tempArray = array();
    if ($reportType == 'report') {
      if ($salesPartnerTrigger == false && $areaTrigger == false) {
        for ($i = 0; $i < count($areaArray); $i++) {
          $areaArrayTmp = $areaArray[$i];
          $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
          ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
          InvoiceSum, номенклатура.Наименование, salespartners.Юр_Наименование FROM $areaArrayTmp
          INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
          INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
          WHERE DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd'  ORDER BY ItemID";
          if ($result = mysqli_query($dbconnect, $sql)){
            while($row = $result->fetch_object()){
              $tempArray = $row;
              array_push($resultArray, $tempArray);
            }
          } else {
            $json["failed"] = 'Login failed. Invalid login
            and/or password';
            echo json_encode($json, JSON_UNESCAPED_UNICODE);
            mysqli_close($dbconnect);
          }
        }
      }
      if ($salesPartnerTrigger == false && $areaTrigger == true) {
        $areaArrayTmp = $areaArray[(int)$index];
        $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
        ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
        InvoiceSum, номенклатура.Наименование, salespartners.Юр_Наименование FROM $areaArrayTmp
        INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
        INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
        WHERE DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd'  ORDER BY InvoiceNumber";
        if ($result = mysqli_query($dbconnect, $sql)){
          while($row = $result->fetch_object()){
            $tempArray = $row;
            array_push($resultArray, $tempArray);
          }
        } else {
          $json["failed"] = 'Login failed. Invalid login
          and/or password';
          echo json_encode($json, JSON_UNESCAPED_UNICODE);
          mysqli_close($dbconnect);
        }
      }
      if ($salesPartnerTrigger == true && $areaTrigger == true) {
        $areaArrayTmp = $areaArray[(int)$index];
        $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
        ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
        InvoiceSum, номенклатура.Наименование, salespartners.Юр_Наименование FROM $areaArrayTmp
        INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
        INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
        WHERE (DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd')  AND SalesPartnerID LIKE '$salesPartnerID'
        ORDER BY ItemID";
        if ($result = mysqli_query($dbconnect, $sql)){
          while($row = $result->fetch_object()){
            $tempArray = $row;
            array_push($resultArray, $tempArray);
          }
        } else {
          $json["failed"] = 'Login failed. Invalid login
          and/or password';
          echo json_encode($json, JSON_UNESCAPED_UNICODE);
          mysqli_close($dbconnect);
        }
      }

      if ($salesPartnerTrigger === true && $areaTrigger === false) {
        for ($i = 1; $i < 6; $i++) {
          $areaArrayTmp = $areaArray[$i];
          $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
          ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
          InvoiceSum, номенклатура.Наименование, salespartners.Юр_Наименование FROM $areaArrayTmp
          INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
          INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
          WHERE (DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd')  AND SalesPartnerID LIKE '$salesPartnerID'
          ORDER BY ItemID";
          if ($result = mysqli_query($dbconnect, $sql)){
            while($row = $result->fetch_object()){
              $tempArray = $row;
              array_push($resultArray, $tempArray);
            }
          } else {
            $json["failed"] = 'Login failed. Invalid login
            and/or password';
            echo json_encode($json, JSON_UNESCAPED_UNICODE);
            mysqli_close($dbconnect);
          }
        }
      }
    }
    if ($accounting == '1') {
      $areaArrayTmp = $areaArray[(int)$index];
      $sql = "SELECT InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
      Quantity, Price, Total, DateTimeDocLocal, InvoiceSum,
      salespartners.Наименование, salespartners.ИНН, salespartners.ID as ID, salespartners.accSubject as type, salespartners.Юр_Наименование,
      номенклатура.Наименование as itemName, номенклатура.Артикул_1С as item, accAddress FROM $areaArrayTmp
      INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
      INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
      WHERE salespartners.accSubject LIKE '$accSubject' AND (DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd')  AND AccountingType LIKE 'провод' ";
      if ($result = mysqli_query($dbconnect, $sql)){
        while($row = $result->fetch_object()){
          $tempArray = $row;
          array_push($resultArray, $tempArray);
        }
      } else {
        $json["failed"] = 'Login failed. Invalid login
        and/or password';
        echo json_encode($json, JSON_UNESCAPED_UNICODE);
        mysqli_close($dbconnect);
      }
    }
    if ($reportType == 'byDayReport') {
      if ($salesPartnerTrigger == true) {
        $areaArrayTmp = $areaArray[(int)$index];
        $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
        ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
        InvoiceSum, номенклатура.Наименование, salespartners.Юр_Наименование FROM $areaArrayTmp
        INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
        INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
        WHERE DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd' AND SalesPartnerID LIKE '$salesPartnerID'
        ORDER BY ItemID, DateTimeDocLocal";;
        if ($result = mysqli_query($dbconnect, $sql)){
          while($row = $result->fetch_object()){
            $tempArray = $row;
            array_push($resultArray, $tempArray);
          }
        } else {
          $json["failed"] = 'Login failed. Invalid login
          and/or password';
          echo json_encode($json, JSON_UNESCAPED_UNICODE);
          mysqli_close($dbconnect);
        }
      } else {
        $areaArrayTmp = $areaArray[(int)$index];
        $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
        ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
        InvoiceSum, номенклатура.Наименование, salespartners.Юр_Наименование FROM $areaArrayTmp
        INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
        INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
        WHERE DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd' ORDER BY ItemID, DateTimeDocLocal";
        if ($result = mysqli_query($dbconnect, $sql)){
          while($row = $result->fetch_object()){
            $tempArray = $row;
            array_push($resultArray, $tempArray);
          }
        } else {
          $json["failed"] = 'Login failed. Invalid login
          and/or password';
          echo json_encode($json, JSON_UNESCAPED_UNICODE);
          mysqli_close($dbconnect);
        }
      }
    }
    if ($reportType == 'byNetCostReport') {
      if ($salesPartnerTrigger == false && $areaTrigger == false) {
        for ($i = 0; $i < count($areaArray); $i++) {
          $areaArrayTmp = $areaArray[$i];
          $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
          ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
          InvoiceSum, номенклатура.Наименование, номенклатура.netCost, salespartners.Юр_Наименование FROM $areaArrayTmp
          INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
          INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
          WHERE DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd'  ORDER BY ItemID";
          if ($result = mysqli_query($dbconnect, $sql)){
            while($row = $result->fetch_object()){
              $tempArray = $row;
              array_push($resultArray, $tempArray);
            }
          } else {
            $json["failed"] = 'Login failed. Invalid login
            and/or password';
            echo json_encode($json, JSON_UNESCAPED_UNICODE);
            mysqli_close($dbconnect);
          }
        }
      }
      if ($salesPartnerTrigger == false && $areaTrigger == true) {
        $areaArrayTmp = $areaArray[(int)$index];
        $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
        ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
        InvoiceSum, номенклатура.Наименование, номенклатура.netCost, salespartners.Юр_Наименование FROM $areaArrayTmp
        INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
        INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
        WHERE DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd'  ORDER BY InvoiceNumber";
        if ($result = mysqli_query($dbconnect, $sql)){
          while($row = $result->fetch_object()){
            $tempArray = $row;
            array_push($resultArray, $tempArray);
          }
        } else {
          $json["failed"] = 'Login failed. Invalid login
          and/or password';
          echo json_encode($json, JSON_UNESCAPED_UNICODE);
          mysqli_close($dbconnect);
        }
      }
      if ($salesPartnerTrigger == true && $areaTrigger == true) {
        $areaArrayTmp = $areaArray[(int)$index];
        $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
        ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
        InvoiceSum, номенклатура.Наименование, номенклатура.netCost, salespartners.Юр_Наименование FROM $areaArrayTmp
        INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
        INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
        WHERE (DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd')  AND SalesPartnerID LIKE '$salesPartnerID'
        ORDER BY ItemID";
        if ($result = mysqli_query($dbconnect, $sql)){
          while($row = $result->fetch_object()){
            $tempArray = $row;
            array_push($resultArray, $tempArray);
          }
        } else {
          $json["failed"] = 'Login failed. Invalid login
          and/or password';
          echo json_encode($json, JSON_UNESCAPED_UNICODE);
          mysqli_close($dbconnect);
        }
      }
    }
    if ($reportType == 'ingredientsReport') {
      if ($salesPartnerTrigger == false && $areaTrigger == false) {
        for ($i = 0; $i < count($areaArray); $i++) {
          $areaArrayTmp = $areaArray[$i];
          $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, ItemID, номенклатура.Наименование as itemName, Quantity,
          Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
          InvoiceSum, AgentID, SalesPartnerID, AccountingType, salespartners.Юр_Наименование FROM $areaArrayTmp
          INNER JOIN номенклатура ON $areaArrayTmp.ItemID=номенклатура.Артикул
          INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
          WHERE (DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd') AND Quantity>0 ORDER BY $areaArrayTmp.ItemID";
          if ($result = mysqli_query($dbconnect, $sql)){
            while($row = $result->fetch_object()){
              $tempArray = $row;
              array_push($resultArray, $tempArray);
            }
          } else {
            $json["failed"] = 'Login failed. Invalid login
            and/or password';
            echo json_encode($json, JSON_UNESCAPED_UNICODE);
            mysqli_close($dbconnect);
          }
        }
      }
      if ($salesPartnerTrigger == false && $areaTrigger == true) {
        $areaArrayTmp = $areaArray[(int)$index];
        $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
        ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
        InvoiceSum, номенклатура.Наименование, salespartners.Юр_Наименование FROM $areaArrayTmp
        INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
        INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
        WHERE DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd'  ORDER BY InvoiceNumber";
        if ($result = mysqli_query($dbconnect, $sql)){
          while($row = $result->fetch_object()){
            $tempArray = $row;
            array_push($resultArray, $tempArray);
          }
        } else {
          $json["failed"] = 'Login failed. Invalid login
          and/or password';
          echo json_encode($json, JSON_UNESCAPED_UNICODE);
          mysqli_close($dbconnect);
        }
      }
      if ($salesPartnerTrigger == true && $areaTrigger == true) {
        $areaArrayTmp = $areaArray[(int)$index];
        $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
        ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
        InvoiceSum, номенклатура.Наименование, salespartners.Юр_Наименование FROM $areaArrayTmp
        INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
        INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
        WHERE (DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd')  AND SalesPartnerID LIKE '$salesPartnerID'
        ORDER BY ItemID";
        if ($result = mysqli_query($dbconnect, $sql)){
          while($row = $result->fetch_object()){
            $tempArray = $row;
            array_push($resultArray, $tempArray);
          }
        } else {
          $json["failed"] = 'Login failed. Invalid login
          and/or password';
          echo json_encode($json, JSON_UNESCAPED_UNICODE);
          mysqli_close($dbconnect);
        }
      }

      if ($salesPartnerTrigger === true && $areaTrigger === false) {
        for ($i = 1; $i < 6; $i++) {
          $areaArrayTmp = $areaArray[$i];
          $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
          ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
          InvoiceSum, номенклатура.Наименование, salespartners.Юр_Наименование FROM $areaArrayTmp
          INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
          INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
          WHERE (DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd')  AND SalesPartnerID LIKE '$salesPartnerID'
          ORDER BY ItemID";
          if ($result = mysqli_query($dbconnect, $sql)){
            while($row = $result->fetch_object()){
              $tempArray = $row;
              array_push($resultArray, $tempArray);
            }
          } else {
            $json["failed"] = 'Login failed. Invalid login
            and/or password';
            echo json_encode($json, JSON_UNESCAPED_UNICODE);
            mysqli_close($dbconnect);
          }
        }
      }
    }
    if ($reportType == 'analytics') {
      if ($analyticsType == 'analyticsExecuteChoiceAbsent') {
        if ($salesPartnerTrigger == false && $areaTrigger == true) {
          $date = strtotime($dateStart);
          $strtintsum = (int)$start - 1;
          $dateStartInit = strtotime("-".$strtintsum." day", $date);
          $daysAdd = (7 - (int)$start);
          $areaArrayTmp = $areaArray[(int)$index];
          for ($i = 0; $i < $weeks; $i++) {
            if ($start < 7 && $weeks > 0) {
              $dateStart = date('Y-m-d', $dateStartInit);
              $date = strtotime($daysAdd." day", $date);
              $dateStartInit = $date;
              $dateEnd = date('Y-m-d', $date);
              $daysAdd = 7;
              // Select B.ID From `salespartners` As B Where NOT Exists ( Select 1 From `invoice_two` As L1
              // Where L1.SalesPartnerID = B.ID AND L1.DateTimeDoc BETWEEN "2021-12-06" AND "2021-12-11") AND `Район`=2
              $sql = "SELECT salespartners.ID, salespartners.Наименование, salespartners.Юр_Наименование
              FROM salespartners WHERE NOT EXISTS (SELECT 1 FROM $areaArrayTmp
              WHERE $areaArrayTmp.SalesPartnerID = salespartners.ID AND $areaArrayTmp.DateTimeDoc BETWEEN '$dateStart' AND '$dateEnd')
              AND salespartners.Район = '$area' AND salespartners.CurrState = 1";
              if ($result = mysqli_query($dbconnect, $sql)){
                while($row = $result->fetch_object()){
                  $tempArray = $row;
                  $tempArray->checked_period = $dateStart." --- ".$dateEnd;
                  $tempArray->checked_period_number = $i;
                  $tempArray->weeks_number = $weeks;
                  array_push($resultArray, $tempArray);
                }
              } else {
                $json["failed"] = 'Login failed. Invalid login
                and/or password';
                echo json_encode($json, JSON_UNESCAPED_UNICODE);
                mysqli_close($dbconnect);
              }
            }
          }
        }
      } elseif ($analyticsType == 'analyticsExecuteChoiceReport') {
        if ($salesPartnerTrigger == false && $areaTrigger == false) {
          $date = strtotime($dateStart);
          $strtintsum = (int)$start - 1;
          $dateStartInit = strtotime("-".$strtintsum." day", $date);
          $daysToReverse = (int)$weeks * 7;
          $dateInitReversed = strtotime("-".$daysToReverse." day", $dateStartInit);
          $tmp = date('Y-m-d', $dateInitReversed);
          $daysAdd = (7 - (int)$start);
          $areaArrayTmp = $areaArray[(int)$index];
          for ($j = 0; $j < $weeks*2; $j++) {
            if ($start < 7 && $weeks > 0) {
              $dateStart = date('Y-m-d', $dateStartInit);
              $date = strtotime($daysAdd." day", $date);
              $dateStartInit = $date;
              $dateEnd = date('Y-m-d', $date);
              $daysAdd = 7;
              for ($i = 0; $i < count($areaArray); $i++) {
                $areaArrayTmp = $areaArray[$i];
                $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
                ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
                InvoiceSum, Surplus, номенклатура.Наименование as itemName, salespartners.Наименование as spName FROM $areaArrayTmp
                INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
                INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
                WHERE DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd'  ORDER BY AgentID, DateTimeDocLocal, SalesPartnerID,  ItemID";
                if ($result = mysqli_query($dbconnect, $sql)){
                  while($row = $result->fetch_object()){
                    $tempArray = $row;
                    $tempArray->checked_period = $tmp." --- ".$dateEnd;
                    $tempArray->checked_period_number = $j;
                    $tempArray->weeks_number = $weeks*2;
                    array_push($resultArray, $tempArray);
                  }
                } else {
                  $json["failed"] = 'Login failed. Invalid login
                  and/or password';
                  echo json_encode($json, JSON_UNESCAPED_UNICODE);
                  mysqli_close($dbconnect);
                }
              }
            }
          }
        }
      } else {
        if ($salesPartnerTrigger == false && $areaTrigger == false) {
          for ($i = 0; $i < count($areaArray); $i++) {
            $areaArrayTmp = $areaArray[$i];
            $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
            ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
            InvoiceSum, Surplus, номенклатура.Наименование as itemName, salespartners.Наименование as spName FROM $areaArrayTmp
            INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
            INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
            WHERE DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd'  ORDER BY SalesPartnerID, DateTimeDocLocal, ItemID";
            if ($result = mysqli_query($dbconnect, $sql)){
              while($row = $result->fetch_object()){
                $tempArray = $row;
                array_push($resultArray, $tempArray);
              }
            } else {
              $json["failed"] = 'Login failed. Invalid login
              and/or password';
              echo json_encode($json, JSON_UNESCAPED_UNICODE);
              mysqli_close($dbconnect);
            }
          }
        }
        if ($salesPartnerTrigger == false && $areaTrigger == true) {
          $areaArrayTmp = $areaArray[(int)$index];
          $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
          ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
          InvoiceSum, Surplus, номенклатура.Наименование as itemName, salespartners.Наименование as spName FROM $areaArrayTmp
          INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
          INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
          WHERE DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd'  ORDER BY SalesPartnerID, DateTimeDocLocal, ItemID";
          if ($result = mysqli_query($dbconnect, $sql)){
            while($row = $result->fetch_object()){
              $tempArray = $row;
              array_push($resultArray, $tempArray);
            }
          } else {
            $json["failed"] = 'Login failed. Invalid login
            and/or password';
            echo json_encode($json, JSON_UNESCAPED_UNICODE);
            mysqli_close($dbconnect);
          }
        }
      }
    }
    echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
    mysqli_close($dbconnect);
  }
?>