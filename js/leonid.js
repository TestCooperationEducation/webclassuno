  
  var tmp = new Object();
  receiveTexts();
  $('#toggleBirds').on('click', function() {
    $(".popupBirds").toggle();
    applyTexts(tmp, "toggleBirds");
  });
  
  $('#closeBirds').on('click', function() {
    $(".popupBirds").hide();
  });

  receiveTexts();
  $('#toggleDescenders').on('click', function() {
    $(".popupDescenders").toggle();
    applyTexts(tmp, "toggleDescenders");
  });
  
  $('#closeDescenders').on('click', function() {
    $(".popupDescenders").hide();
  });

  receiveTexts();
  $('#toggleRiders').on('click', function() {
    $(".popupRiders").toggle();
    applyTexts(tmp, "toggleRiders");
  });
  
  $('#closeRiders').on('click', function() {
    $(".popupRiders").hide();
  });
  
  receiveTexts();
  $('#toggleBear').on('click', function() {
    $(".popupBear").toggle();
    applyTexts(tmp, "toggleBear");
  });
  
  $('#closeBear').on('click', function() {
    $(".popupBear").hide();
  });

  receiveTexts();
  $('#toggleWB').on('click', function() {
    $(".popupWB").toggle();
    applyTexts(tmp, "toggleWB");
  });
  
  $('#closeWB').on('click', function() {
    $(".popupWB").hide();
  });
 
  receiveTexts();
  $('#toggleSoviet').on('click', function() {
    $(".popupSoviet").toggle();
    applyTexts(tmp, "toggleSoviet");
  });
  
  $('#closeSoviet').on('click', function() {
    $(".popupSoviet").hide();
  });

  receiveTexts();
  $('#togglePizza').on('click', function() {
    $(".popupPizza").toggle();
    applyTexts(tmp, "togglePizza");
  });

  $('#closePizza').on('click', function() {
    $(".popupPizza").toggle();
  });

  receiveTexts();
  $('#toggleMcn').on('click', function() {
    $(".popupMcn").toggle();
    applyTexts(tmp, "toggleMcn");
  });

  $('#closeMcn').on('click', function() {
    $(".popupMcn").toggle();
  });
 
  receiveTexts();
  $('#toggleSus').on('click', function() {
    $(".popupSus").toggle();
    applyTexts(tmp, "toggleSus");
  });
 
  $('#closeSus').on('click', function() {
    $(".popupSus").toggle();
  });
 
  receiveTexts();
  $('#toggleAbout').on('click', function() {
    $(".popupAbout").toggle();
    applyTexts(tmp, "toggleAbout");
  });
 
  $('#closeAbout').on('click', function() {
    $(".popupAbout").toggle();
  });
 
  receiveTexts();
  $('#toggleSchool').on('click', function() {
    $(".popupSchool").toggle();
    applyTexts(tmp, "toggleSchool");;
  });
 
  $('#closeSchool').on('click', function() {
    $(".popupSchool").toggle();
  });

  receiveTexts();
  $('#toggleHob').on('click', function() {
    $(".popupHob").toggle();
    applyTexts(tmp, "toggleHob");;
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

function applyTexts(data, id) {
  for (var i = 0; i < Object.keys(data).length; i++) {
    if (id == "toggleBirds") {
      if (data[i].textName == "angrybirds") {
        $(".ang1text").append(data[i].text);
      }
    }
    if (id == "toggleDescenders") {
      if (data[i].textName == "descenders") {
          $(".desc1text").append(data[i].text);
      }
    }
    if (id == "toggleRiders") {
      if (data[i].textName == "ridersrepublic") {
        $(".rid1text").append(data[i].text);
      }
    }
    if (id == "toggleBear") {
      if (data[i].textName == "masha") {
      $(".masha1text").append(data[i].text);
      }
    }
    if (id == "toggleWB") {
      if (data[i].textName == "wbkids") {
        $(".wb1text").append(data[i].text);
      }
    }
    if (id == "toggleSoviet") { 
      if (data[i].textName == "soviet") {
        $(".sov1text").append(data[i].text);
      }
    }
    if (id == "togglePizza") {
      if (data[i].textName == "pizza") {
        $(".piz1text").append(data[i].text);
      }
    }
    if (id == "toggleMcn") {
      if (data[i].textName == "mac") {
        $(".mac1text").append(data[i].text);
      }
    }
    if (id == "toggleSus") {
      if (data[i].textName == "sushi") {
        $(".sus1text").append(data[i].text);
      }
    }
    if (id == "toggleAbout") {
      if (data[i].textName == "about") {
        $(".about1text").append(data[i].text);
      }
    }
    if (id == "toggleSchool") {
      if (data[i].textName == "school") {
        $(".school1text").append(data[i].text);
      }
    }
    if (id == "toggleHob") {
      if (data[i].textName == "hobby") {
        $(".hob1text").append(data[i].text);
      }
    }
  }
}