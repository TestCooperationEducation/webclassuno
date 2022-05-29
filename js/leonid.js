  var tmp = new Object();
  receiveTexts();
  $('#toggleBirds').on('click', function() {
    if (loginStatus == "good") {
         $(".popupBirds").toggle();
         $(".ang1text").html("");
        applyTexts(tmp, ".ang1text", "angrybirds");
    } else {
        alert("Ошибка входа");
    }
  });
  
  $('#closeBirds').on('click', function() {
    $(".popupBirds").hide();
  });

  
  $('#toggleDescenders').on('click', function() {
    if (loginStatus == "good") {
        $(".popupDescenders").toggle();
        $(".desc1text").html("");
        applyTexts(tmp, ".desc1text", "descenders");
    } else {
        alert("Ошибка входа");
    }
  });
  
  $('#closeDescenders').on('click', function() {
    $(".popupDescenders").hide();
  });

  
  $('#toggleRiders').on('click', function() {
    if (loginStatus == "good") {
    $(".popupRiders").toggle();
    $(".rid1text").html("");
    applyTexts(tmp, ".rid1text", "ridersrepublic");
  } else {
    alert("Ошибка входа");
}
  });
  
  $('#closeRiders').on('click', function() {
    $(".popupRiders").hide();
  });
  
  
  $('#toggleBear').on('click', function() {
    if (loginStatus == "good") {
    $(".popupBear").toggle();
    $(".masha1text").html("");
    applyTexts(tmp, ".masha1text", "masha");
  } else {
    alert("Ошибка входа");
}
  });
  
  $('#closeBear').on('click', function() {
    $(".popupBear").hide();
  });

  
  $('#toggleWB').on('click', function() {
    if (loginStatus == "good") {
    $(".popupWB").toggle();
    $(".wb1text").html("");
    applyTexts(tmp, ".wb1text", "wbkids");
  } else {
    alert("Ошибка входа");
}
  });
  
  $('#closeWB').on('click', function() {
    $(".popupWB").hide();
  });
 
  
  $('#toggleSoviet').on('click', function() {
    if (loginStatus == "good") {
    $(".popupSoviet").toggle();
    $(".sov1text").html("");
    applyTexts(tmp, ".sov1text", "soviet");
  } else {
    alert("Ошибка входа");
}
  });
  
  $('#closeSoviet').on('click', function() {
    $(".popupSoviet").hide();
  });

  
  $('#togglePizza').on('click', function() {
    if (loginStatus == "good") {
    $(".popupPizza").toggle();
    $(".piz1text").html("");
    applyTexts(tmp, ".piz1text", "pizza");
  } else {
    alert("Ошибка входа");
}
  });

  $('#closePizza').on('click', function() {
    $(".popupPizza").toggle();
  });

  
  $('#toggleMcn').on('click', function() {
    if (loginStatus == "good") {
    $(".popupMcn").toggle();
    $(".mac1text").html("");
    applyTexts(tmp, ".mac1text", "mac");
  } else {
    alert("Ошибка входа");
}
  });

  $('#closeMcn').on('click', function() {
    $(".popupMcn").toggle();
  });
 
  
  $('#toggleSus').on('click', function() {
    if (loginStatus == "good") {
    $(".popupSus").toggle();
    $(".sus1text").html("");
    applyTexts(tmp, ".sus1text", "sushi");
  } else {
    alert("Ошибка входа");
}
  });
 
  $('#closeSus').on('click', function() {
    $(".popupSus").toggle();
  });
 
  
  $('#toggleAbout').on('click', function() {
    if (loginStatus == "good") {
    $(".popupAbout").toggle();
    $(".about1text").html("");
    applyTexts(tmp, ".about1text", "about");
  } else {
    alert("Ошибка входа");
}
  });
 
  $('#closeAbout').on('click', function() {
    $(".popupAbout").toggle();
  });
 
  
  $('#toggleSchool').on('click', function() {
    if (loginStatus == "good") {
      $(".popupSchool").toggle();
      $(".school1text").html("");
      applyTexts(tmp, ".school1text", "school");
    } else {
      alert("Ошибка входа");
    }
  });
 
  $('#closeSchool').on('click', function() {
    $(".popupSchool").toggle();
  });

  
  $('#toggleHob').on('click', function() {
    if (loginStatus == "good") {
    $(".popupHob").toggle();
    $(".hob1text").html("");
    applyTexts(tmp, ".hob1text", "hobby");
  } else {
    alert("Ошибка входа");
}
  });
 
  $('#closeHob').on('click', function() {
    $(".popupHob").toggle();
  });
 
function receiveTexts() {
    $.post('../php/indexLeonid.php', {}, async function(data) {
      try {
          tmp = await JSON.parse(data);          
        } catch(e) {
          console.log(e);
        }   
    });         
}

function applyTexts(data, blockName, textName) {
  for (var i = 0; i < Object.keys(data).length; i++) {    
    if (data[i].textName == textName) {
      $(blockName).append(data[i].text);
    }
  }
}