  $('#toggleBirds').on('click', function() {
    $(".popupBirds").toggle();
    receiveTexts();
  });
  
  $('#closeBirds').on('click', function() {
    $(".popupBirds").hide();
    receiveTexts()
  });

  $('#toggleDescenders').on('click', function() {
    $(".popupDescenders").toggle();
    receiveTexts()
  });
  
  $('#closeDescenders').on('click', function() {
    $(".popupDescenders").hide();
    receiveTexts()
  });

  $('#toggleRiders').on('click', function() {
    $(".popupRiders").toggle();
    receiveTexts()
  });
  
  $('#closeRiders').on('click', function() {
    $(".popupRiders").hide();
    receiveTexts()
  });
  
  $('#toggleBear').on('click', function() {
    $(".popupBear").toggle();
    receiveTexts()
  });
  
  $('#closeBear').on('click', function() {
    $(".popupBear").hide();
    receiveTexts()
  });

  $('#toggleWB').on('click', function() {
    $(".popupWB").toggle();
    receiveTexts()
  });
  
  $('#closeWB').on('click', function() {
    $(".popupWB").hide();
    receiveTexts()
  });
 
  $('#toggleSoviet').on('click', function() {
    $(".popupSoviet").toggle();
    receiveTexts()
  });
  
  $('#closeSoviet').on('click', function() {
    $(".popupSoviet").hide();
    receiveTexts()
  });

  $('#togglePizza').on('click', function() {
    $(".popupPizza").toggle();
    receiveTexts()
  });

  $('#closePizza').on('click', function() {
    $(".popupPizza").toggle();
    receiveTexts()
  });

  $('#toggleMcn').on('click', function() {
    $(".popupMcn").toggle();
    receiveTexts()
  });

  $('#closeMcn').on('click', function() {
    $(".popupMcn").toggle();
    receiveTexts()
  });
 
  $('#toggleSus').on('click', function() {
    $(".popupSus").toggle();
    receiveTexts()
  });
 
  $('#closeSus').on('click', function() {
    $(".popupSus").toggle();
    receiveTexts()
  });
 
  $('#toggleAbout').on('click', function() {
    $(".popupAbout").toggle();
    receiveTexts()
  });
 
  $('#closeAbout').on('click', function() {
    $(".popupAbout").toggle();
    receiveTexts()
  });
 
  $('#toggleSchool').on('click', function() {
    $(".popupSchool").toggle();
    receiveTexts()
  });
 
  $('#closeSchool').on('click', function() {
    $(".popupSchool").toggle();
    receiveTexts()
  });
 
  $('#toggleHob').on('click', function() {
    $(".popupHob").toggle();
    receiveTexts()
  });
 
  $('#closeHob').on('click', function() {
    $(".popupHob").toggle();
    receiveTexts()
  });
 
function receiveTexts() {
  var tmp = new Object();
    $.post('../php/indexLeonid.php', {}, async function(data) {
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
    if (data[i].textName == "angrybirds") {
        $(".ang1text").append(data[i].text);
    }
    if (data[i].textName == "descenders") {
        $(".desc1text").append(data[i].text);
    }
    if (data[i].textName == "ridersrepublic") {
      $(".rid1text").append(data[i].text);
    }
    if (data[i].textName == "masha") {
      $(".masha1text").append(data[i].text);
    }
    if (data[i].textName == "wbkids") {
      $(".wb1text").append(data[i].text);
    }
    if (data[i].textName == "soviet") {
      $(".sov1text").append(data[i].text);
    }
    if (data[i].textName == "pizza") {
      $(".piz1text").append(data[i].text);
    }
    if (data[i].textName == "mac") {
      $(".mac1text").append(data[i].text);
    }
    if (data[i].textName == "sushi") {
      $(".sus1text").append(data[i].text);
    }
    if (data[i].textName == "about") {
      $(".about1text").append(data[i].text);
    }
    if (data[i].textName == "school") {
      $(".school1text").append(data[i].text);
    }
    if (data[i].textName == "hobby") {
      $(".hob1text").append(data[i].text);
    }
  }
}


function applyTexts(data) {
  for (var i = 0; i < Object.keys(data).length; i++) {
      if (data[i].textName == "ridersrepublic") {
          $(".rid1text").append(data[i].text);
      }
  //     if (data[i].textName == "poppy") {
  //         $("#ppOneText").append(data[i].text);
  //     }
  //     if (data[i].textName == "playtime") {
  //         $("#ppTwoText").append(data[i].text);
  //     }
  }
}

function applyTexts(data) {
  for (var i = 0; i < Object.keys(data).length; i++) {
      if (data[i].textName == "masha") {
          $(".masha1text").append(data[i].text);
      }
  //     if (data[i].textName == "poppy") {
  //         $("#ppOneText").append(data[i].text);
  //     }
  //     if (data[i].textName == "playtime") {
  //         $("#ppTwoText").append(data[i].text);
  //     }
  }
}

function applyTexts(data) {
  for (var i = 0; i < Object.keys(data).length; i++) {
      if (data[i].textName == "wbkids") {
          $(".wb1text").append(data[i].text);
      }
  //     if (data[i].textName == "poppy") {
  //         $("#ppOneText").append(data[i].text);
  //     }
  //     if (data[i].textName == "playtime") {
  //         $("#ppTwoText").append(data[i].text);
  //     }
  }
}

function applyTexts(data) {
  for (var i = 0; i < Object.keys(data).length; i++) {
      if (data[i].textName == "soviet") {
          $(".sov1text").append(data[i].text);
      }
  //     if (data[i].textName == "poppy") {
  //         $("#ppOneText").append(data[i].text);
  //     }
  //     if (data[i].textName == "playtime") {
  //         $("#ppTwoText").append(data[i].text);
  //     }
  }
}

function applyTexts(data) {
  for (var i = 0; i < Object.keys(data).length; i++) {
      if (data[i].textName == "pizza") {
          $(".piz1text").append(data[i].text);
      }
  //     if (data[i].textName == "poppy") {
  //         $("#ppOneText").append(data[i].text);
  //     }
  //     if (data[i].textName == "playtime") {
  //         $("#ppTwoText").append(data[i].text);
  //     }
  }
}

function applyTexts(data) {
  for (var i = 0; i < Object.keys(data).length; i++) {
      if (data[i].textName == "mac") {
          $(".mac1text").append(data[i].text);
      }
  //     if (data[i].textName == "poppy") {
  //         $("#ppOneText").append(data[i].text);
  //     }
  //     if (data[i].textName == "playtime") {
  //         $("#ppTwoText").append(data[i].text);
  //     }
  }
}

function applyTexts(data) {
  for (var i = 0; i < Object.keys(data).length; i++) {
      if (data[i].textName == "sushi") {
          $(".sus1text").append(data[i].text);
      }
  //     if (data[i].textName == "poppy") {
  //         $("#ppOneText").append(data[i].text);
  //     }
  //     if (data[i].textName == "playtime") {
  //         $("#ppTwoText").append(data[i].text);
  //     }
  }
}

function applyTexts(data) {
  for (var i = 0; i < Object.keys(data).length; i++) {
      if (data[i].textName == "about") {
          $(".about1text").append(data[i].text);
      }
  //     if (data[i].textName == "poppy") {
  //         $("#ppOneText").append(data[i].text);
  //     }
  //     if (data[i].textName == "playtime") {
  //         $("#ppTwoText").append(data[i].text);
  //     }
  }
}

function applyTexts(data) {
  for (var i = 0; i < Object.keys(data).length; i++) {
      if (data[i].textName == "about") {
          $(".about1text").append(data[i].text);
      }
  //     if (data[i].textName == "poppy") {
  //         $("#ppOneText").append(data[i].text);
  //     }
  //     if (data[i].textName == "playtime") {
  //         $("#ppTwoText").append(data[i].text);
  //     }
  }
}

function applyTexts(data) {
  for (var i = 0; i < Object.keys(data).length; i++) {
      if (data[i].textName == "school") {
          $(".school1text").append(data[i].text);
      }
  //     if (data[i].textName == "poppy") {
  //         $("#ppOneText").append(data[i].text);
  //     }
  //     if (data[i].textName == "playtime") {
  //         $("#ppTwoText").append(data[i].text);
  //     }
  }
}

function applyTexts(data) {
  for (var i = 0; i < Object.keys(data).length; i++) {
      if (data[i].textName == "hobby") {
          $(".hob1text").append(data[i].text);
      }
  //     if (data[i].textName == "poppy") {
  //         $("#ppOneText").append(data[i].text);
  //     }
  //     if (data[i].textName == "playtime") {
  //         $("#ppTwoText").append(data[i].text);
  //     }
  }
}