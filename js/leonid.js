  
  var tmp = new Object();
  receiveTexts();
  $('#toggleBirds').on('click', function() {
    $(".popupBirds").toggle();
    $(".ang1text").html("");
    applyTexts(tmp, ".ang1text", "angrybirds");
  });
  
  $('#closeBirds').on('click', function() {
    $(".popupBirds").hide();
  });

  receiveTexts();
  $('#toggleDescenders').on('click', function() {
    $(".popupDescenders").toggle();
    $(".desc1text").html("");
    applyTexts(tmp, ".desc1text", "descenders");
  });
  
  $('#closeDescenders').on('click', function() {
    $(".popupDescenders").hide();
  });

  receiveTexts();
  $('#toggleRiders').on('click', function() {
    $(".popupRiders").toggle();
    $(".rid1text").html("");
    applyTexts(tmp, ".rid1text", "ridersrepublic");
  });
  
  $('#closeRiders').on('click', function() {
    $(".popupRiders").hide();
  });
  
  receiveTexts();
  $('#toggleBear').on('click', function() {
    $(".popupBear").toggle();
    $(".masha1text").html("");
    applyTexts(tmp, ".masha1text", "masha");
  });
  
  $('#closeBear').on('click', function() {
    $(".popupBear").hide();
  });

  receiveTexts();
  $('#toggleWB').on('click', function() {
    $(".popupWB").toggle();
    $(".wb1text").html("");
    applyTexts(tmp, ".wb1text", "wbkids");
  });
  
  $('#closeWB').on('click', function() {
    $(".popupWB").hide();
  });
 
  receiveTexts();
  $('#toggleSoviet').on('click', function() {
    $(".popupSoviet").toggle();
    $(".sov1text").html("");
    applyTexts(tmp, ".sov1text", "soviet");
  });
  
  $('#closeSoviet').on('click', function() {
    $(".popupSoviet").hide();
  });

  receiveTexts();
  $('#togglePizza').on('click', function() {
    $(".popupPizza").toggle();
    $(".piz1text").html("");
    applyTexts(tmp, ".piz1text", "pizza");
  });

  $('#closePizza').on('click', function() {
    $(".popupPizza").toggle();
  });

  receiveTexts();
  $('#toggleMcn').on('click', function() {
    $(".popupMcn").toggle();
    $(".mac1text").html("");
    applyTexts(tmp, ".mac1text", "mac");
  });

  $('#closeMcn').on('click', function() {
    $(".popupMcn").toggle();
  });
 
  receiveTexts();
  $('#toggleSus').on('click', function() {
    $(".popupSus").toggle();
    $(".sus1text").html("");
    applyTexts(tmp, ".sus1text", "sushi");
  });
 
  $('#closeSus').on('click', function() {
    $(".popupSus").toggle();
  });
 
  receiveTexts();
  $('#toggleAbout').on('click', function() {
    $(".popupAbout").toggle();
    $(".about1text").html("");
    applyTexts(tmp, ".about1text", "about");
  });
 
  $('#closeAbout').on('click', function() {
    $(".popupAbout").toggle();
  });
 
  receiveTexts();
  $('#toggleSchool').on('click', function() {
    $(".popupSchool").toggle();
    $(".school1text").html("");
    applyTexts(tmp, ".school1text", "school");
  });
 
  $('#closeSchool').on('click', function() {
    $(".popupSchool").toggle();
  });

  receiveTexts();
  $('#toggleHob').on('click', function() {
    $(".popupHob").toggle();
    $(".hob1text").html("");
    applyTexts(tmp, ".hob1text", "hobby");
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

$('.signButton').on('click', function() {
  $(".connection-data").html("");
  $(".connection-data").append(" \
      <form class='form-5 clearfix'> \
        <div class='panel-body'> \
          <p> \
            <input type='text' placeholder='Логин' id='login'> \
            <input type='password' placeholder='Пароль' id='password'> \
          </p> \
        </div> \
        <button type='submit' name='submit' id='request'> \
          <i class='icon-arrow-right'></i> \
          <span>Вход</span> \
        </button> \
      </form> \
      ");
  url = "../js/leonid.js";
  $.getScript(url);
});

{/* <form class="form-5 clearfix">
    <p>
        <input type="text" id="login" name="login" placeholder="Логин">
        <input type="text" name="password" id="password" placeholder="Пароль">
    </p>
    <button type="submit" name="submit">
        <i class="icon-arrow-right"></i>
        <span>Вход</span>
    </button>    
</form> */}

function loginRequest(login, pass) {
  $.post('../php/indexLeonid.php', {log: login, password: pass}, async function(data) {
      try {
          tmp = await JSON.parse(data);
          alert(tmp[0].userStatus)
          } catch(e) {
          console.log(e);
          }   
      });
}

