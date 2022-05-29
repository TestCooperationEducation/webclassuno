  var tmp2 = new Object();
  var loginStatus = "";
$('.signButton').on('click', function() {
  loginMenu();
});

function loginMenu() {
  $(".connection-data").html("");
  $(".connection-data").append(" \
      <form class='form-5 clearfix'> \
        <div class='panel-body'> \
          <p> \
            <input type='text' placeholder='Логин' id='login'> \
            <input type='password' placeholder='Пароль' id='pass'> \
          </p> \
        </div> \
        <button type='submit' name='submit' id='request'> \
          <i class='icon-arrow-right'></i> \
          <span>Вход</span> \
        </button> \
      </form> \
      ");
  url = "../js/leonidLogin.js";
  $.getScript(url);
}

function loginRequest(login, pass) {
  $.post('../php/loginLeonid.php', {log: login, password: pass}, async function(data) {
      try {
          tmp2 = await JSON.parse(data);
          loginStatus = tmp2[0].userstatus;
          alert(loginStatus);
        } catch(e) {
          console.log(e);
      } 
      });
}

$('#request').on('click', function() {
  loginRequest($('#login').val(), $('#pass').val());
  $(".connection-data").hide("");
});