  $('#toggleBirds').on('click', function() {
    $(".popupBirds").toggle();
    receiveTexts();
  });
  
  $('#closeBirds').on('click', function() {
    $(".popupBirds").hide();
  });

  $('#toggleDescenders').on('click', function() {
    $(".popupDescenders").toggle();
  });
  
  $('#closeDescenders').on('click', function() {
    $(".popupDescenders").hide();
  });

  $('#toggleRiders').on('click', function() {
    $(".popupRiders").toggle();
  });
  
  $('#closeRiders').on('click', function() {
    $(".popupRiders").hide();
  });
  
  $('#toggleBear').on('click', function() {
    $(".popupBear").toggle();
  });
  
  $('#closeBear').on('click', function() {
    $(".popupBear").hide();
  });

  $('#toggleWB').on('click', function() {
    $(".popupWB").toggle();
  });
  
  $('#closeWB').on('click', function() {
    $(".popupWB").hide();
  });
 
  $('#toggleSoviet').on('click', function() {
    $(".popupSoviet").toggle();
  });
  
  $('#closeSoviet').on('click', function() {
    $(".popupSoviet").hide();
  });

  $('#togglePizza').on('click', function() {
    $(".popupPizza").toggle();
  });

  $('#closePizza').on('click', function() {
    $(".popupPizza").toggle();
  });

  $('#toggleMcn').on('click', function() {
    $(".popupMcn").toggle();
  });

  $('#closeMcn').on('click', function() {
    $(".popupMcn").toggle();
  });
 
  $('#toggleSus').on('click', function() {
    $(".popupSus").toggle();
  });
 
  $('#closeSus').on('click', function() {
    $(".popupSus").toggle();
  });
 
  $('#toggleAbout').on('click', function() {
    $(".popupAbout").toggle();
  });
 
  $('#closeAbout').on('click', function() {
    $(".popupAbout").toggle();
  });
 
  $('#toggleSchool').on('click', function() {
    $(".popupSchool").toggle();
  });
 
  $('#closeSchool').on('click', function() {
    $(".popupSchool").toggle();
  });
 
  $('#toggleHob').on('click', function() {
    $(".popupHob").toggle();
  });
 
  $('#closeHob').on('click', function() {
    $(".popupHob").toggle();
  });
 
  function receiveTexts() {
    var tmp = new Object();
      $.post('../php/indexZorinbanan.php', {}, async function(data) {
        try {
            tmp = await JSON.parse(data);
            // alert(tmp[0].text);
            // $("#sqOneText").append(tmp[0].text);
            applyTexts(tmp); 
          } catch(e) {
            console.log(e);
          }   
      });
         
}

function applyTexts(data) {
  for (var i = 0; i < Object.keys(data).length; i++) {
      if (data[i].textName == "squid") {
          $("#ang1text").append(data[i].text);
      }
  //     if (data[i].textName == "poppy") {
  //         $("#ppOneText").append(data[i].text);
  //     }
  //     if (data[i].textName == "playtime") {
  //         $("#ppTwoText").append(data[i].text);
  //     }
  }
}