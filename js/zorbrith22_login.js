var tmp2 = new Object();
var loginStatus = "";
$('.signButton').on('click', function() {
    $(".connection-data").html("");
    $(".connection-data").append(" \
        <form class='form-1'> \
            <p class='field'> \
                <input id='login' type='text' name='login' placeholder='Логин'> \
                <i class='icon-user icon-large'></i> \
            </p> \
            <p class='field'> \
                <input id='pass' type='password' name='password' placeholder='Пароль'> \
                <i class='icon-lock icon-large'></i> \
            </p> \
            <p class='submit'> \
                <button id='request' type='submit' name='submit'><i class='icon-arrow-right icon-large'></i></button> \
            </p> \
        </form> \
    ");
    url = "../js/zorbrith22_login.js";
    $.getScript(url);
});

function loginRequest(login, pass) {
    $.post('../php/loginZorinbanan.php', {log: login, password: pass}, async function(data) {
        try {
            tmp2 = await JSON.parse(data);
            loginStatus = tmp2[0].userStatus;
            } catch(e) {
            console.log(e);
            }   
        });
}

$('#request').on('click', function() {
    loginRequest($('#login').val(), $('#pass').val());
    $(".connection-data").hide("");
});