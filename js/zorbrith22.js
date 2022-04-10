var tmp = new Object();
receiveTexts();
$('#openSquidOne').on('click', function() {
    $(".popupSquidOne").toggle();
    $("#sqOneText").html("");
    applyTexts(tmp, "squid", "#sqOneText");
});

$('#closeSquidOne').on('click', function() {
    $(".popupSquidOne").hide();
});

$('#openSquidTwo').on('click', function() {
    $(".popupSquidTwo").toggle();
    $("#sqTwoText").html("");
    applyTexts(tmp, "squidgame", "#sqTwoText");
});

$('#closeSquidTwo').on('click', function() {
    $(".popupSquidTwo").hide();
});

$('#openSquidThree').on('click', function() {
    $(".popupSquidThree").toggle();
    $("#sqThreeText").html("");
    applyTexts(tmp, "game", "#sqThreeText");
});

$('#closeSquidThree').on('click', function() {
    $(".popupSquidThree").hide();
});
$('#openPoppy').on('click', function() {
    $(".popupPoppy").toggle();
    $("#ppOneText").html("");
    $("#ppTwoText").html("");
    applyTexts(tmp, "poppy", "#ppOneText");
    applyTexts(tmp, "playtime", "#ppTwoText");
});

$('#closePoppy').on('click', function() {
    $(".popupPoppy").hide();
});

$('#openRainWorld').on('click', function() {
    $(".popupRainWorld").toggle();
    $("#rwOneText").html("");
    $("#rwTwoText").html("");
    applyTexts(tmp, "RainWorld", "#rwOneText");
    applyTexts(tmp, "Rain", "#rwTwoText");
});

$('#closeRainWorld').on('click', function() {
    $(".popupRainWorld").hide();
});

$('#openfnf').on('click', function() {
    $(".popupfnf").toggle();
    $("#fnfOneText").html("");
    $("#fnfTwoText").html("");
    applyTexts(tmp, "Fnf", "#fnfOneText");
    applyTexts(tmp, "nf", "#fnfTwoText");
});

$('#closefnf').on('click', function() {
    $(".popupfnf").hide();
});
$('#openParrotOne').on('click', function() {
    $(".popupParrotOne").toggle();
    $("#prOneText").html("");
    applyTexts(tmp, "parrot", "#prOneText");
});

$('#closeParrotOne').on('click', function() {
    $(".popupParrotOne").hide();
});
$('#openParrotTwo').on('click', function() {
    $(".popupParrotTwo").toggle();
    $("#prTwoText").html("");
    applyTexts(tmp, "rrot", "#prTwoText");
});

$('#closeParrotTwo').on('click', function() {
    $(".popupParrotTwo").hide();
});
$('#openParrotThree').on('click', function() {
    $(".popupParrotThree").toggle();
    $("#prThreeText").html("");
    applyTexts(tmp, "par", "#prThreeText");
});

$('#closeParrotThree').on('click', function() {
    $(".popupParrotThree").hide();
});
$('#openMonkeOne').on('click', function() {
    $(".popupMonkeOne").toggle();
    $("#mnOneText").html("");
    applyTexts(tmp, "monke", "#mnOneText");
});

$('#closeMonkeOne').on('click', function() {
    $(".popupMonkeOne").hide();
});
$('#openMonkeTwo').on('click', function() {
    $(".popupMonkeTwo").toggle();
    $("#mnTwoText").html("");
    applyTexts(tmp, "knocking", "#mnTwoText");
});

$('#closeMonkeTwo').on('click', function() {
    $(".popupMonkeTwo").hide();
});
$('#openMonkeThree').on('click', function() {
    $(".popupMonkeThree").toggle();
    $("#mnThreeText").html("");
    applyTexts(tmp, "indoor", "#mnThreeText");
});

$('#closeMonkeThree').on('click', function() {
    $(".popupMonkeThree").hide();
});

$('#request').on('click', function() {
    // var login = $('#login').val();
    // var pass =  $('#pass').val();
    loginRequest($('#login').val(), $('#pass').val());
});

function receiveTexts() {    
    $.post('../php/indexZorinbanan.php', {}, async function(data) {
    try {
        tmp = await JSON.parse(data);
        } catch(e) {
        console.log(e);
        }   
    });
         
}

function applyTexts(data, texName, id) {
    for (var i = 0; i < Object.keys(data).length; i++) {
        if (data[i].textName == texName) {
            $(id).append(data[i].text);
        }
    }
}

// $('.signButton').on('click', function() {
//     $(".connection-data").html("");
//     $(".connection-data").append(" \
//         <div class='panel-body'> \
//             <input type='text' value='Логин' id='login'> \
//             <input type='text' value='Пароль' id='pass'> \
//         </div> \
//         <button id='request'>Отправить запрос</button> \
//         ");
//     url = "../js/zorbrith22.js";
//     $.getScript(url);
// });

$('.signButton').on('click', function() {
    $(".connection-data").html("");
    $(".connection-data").append(" \
        <div class='connection-data'> \
            <input type='text' name='login' id='login'> \
            <input type='password' name='password' id='password'> \
        </div> \
        <button id='submit'>submit</button> \
        ");
    url = "../js/zorbrith22.js";
    $.getScript(url);
});

function loginRequest(login, pass) {
    $.post('../php/loginZorinbanan.php', {log: login, password: pass}, async function(data) {
        try {
            tmp = await JSON.parse(data);
            alert(tmp[0].userStatus)
            } catch(e) {
            console.log(e);
            }   
        });
}