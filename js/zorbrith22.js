var tmp = new Object();
receiveTexts();
$('#openSquidOne').on('click', function() {
    if (loginStatus == "good") {
        $(".popupSquidOne").toggle();
        $("#sqOneText").html("");
        applyTexts(tmp, "squid", "#sqOneText");
    } else {
        alert("Ошибка входа");
    }
});

$('#closeSquidOne').on('click', function() {
    $(".popupSquidOne").hide();
});

$('#openSquidTwo').on('click', function() {
    if (loginStatus == "good") {
        $(".popupSquidTwo").toggle();
        $("#sqTwoText").html("");
        applyTexts(tmp, "squidgame", "#sqTwoText");    
    } else {
        alert("Ошибка входа");
    }
});

$('#closeSquidTwo').on('click', function() {
    $(".popupSquidTwo").hide();
});

$('#openSquidThree').on('click', function() {
    if (loginStatus == "good") {
    $(".popupSquidThree").toggle();
    $("#sqThreeText").html("");
    applyTexts(tmp, "game", "#sqThreeText");
    } else {
        alert("Ошибка входа");
    }    
});

$('#closeSquidThree').on('click', function() {
    $(".popupSquidThree").hide();
});
$('#openPoppy').on('click', function() {
    if (loginStatus == "good") {
    $(".popupPoppy").toggle();
    $("#ppOneText").html("");
    $("#ppTwoText").html("");
    applyTexts(tmp, "poppy", "#ppOneText");
    applyTexts(tmp, "playtime", "#ppTwoText");
    } else {
        alert("Ошибка входа");
    } 
});

$('#closePoppy').on('click', function() {
    $(".popupPoppy").hide();
});

$('#openRainWorld').on('click', function() {
    if (loginStatus == "good") {
    $(".popupRainWorld").toggle();
    $("#rwOneText").html("");
    $("#rwTwoText").html("");
    applyTexts(tmp, "RainWorld", "#rwOneText");
    applyTexts(tmp, "Rain", "#rwTwoText");
    } else {
        alert("Ошибка входа");
    }
});

$('#closeRainWorld').on('click', function() {
    $(".popupRainWorld").hide();
});

$('#openfnf').on('click', function() {
    if (loginStatus == "good") {
    $(".popupfnf").toggle();
    $("#fnfOneText").html("");
    $("#fnfTwoText").html("");
    applyTexts(tmp, "Fnf", "#fnfOneText");
    applyTexts(tmp, "nf", "#fnfTwoText");
    } else {
        alert("Ошибка входа");
    }
});

$('#closefnf').on('click', function() {
    $(".popupfnf").hide();
});
$('#openParrotOne').on('click', function() {
    if (loginStatus == "good") {
    $(".popupParrotOne").toggle();
    $("#prOneText").html("");
    applyTexts(tmp, "parrot", "#prOneText");
    } else {
        alert("Ошибка входа");
    }
});

$('#closeParrotOne').on('click', function() {
    $(".popupParrotOne").hide();
});
$('#openParrotTwo').on('click', function() {
    if (loginStatus == "good") {
    $(".popupParrotTwo").toggle();
    $("#prTwoText").html("");
    applyTexts(tmp, "rrot", "#prTwoText");
    } else {
        alert("Ошибка входа");
    }
});

$('#closeParrotTwo').on('click', function() {
    $(".popupParrotTwo").hide();
});
$('#openParrotThree').on('click', function() {
    if (loginStatus == "good") {
    $(".popupParrotThree").toggle();
    $("#prThreeText").html("");
    applyTexts(tmp, "par", "#prThreeText");
    } else {
        alert("Ошибка входа");
    }
});

$('#closeParrotThree').on('click', function() {
    $(".popupParrotThree").hide();
});
$('#openMonkeOne').on('click', function() {
    if (loginStatus == "good") {
    $(".popupMonkeOne").toggle();
    $("#mnOneText").html("");
    applyTexts(tmp, "monke", "#mnOneText");
    } else {
        alert("Ошибка входа");
    }
});

$('#closeMonkeOne').on('click', function() {
    $(".popupMonkeOne").hide();
});
$('#openMonkeTwo').on('click', function() {
    if (loginStatus == "good") {
    $(".popupMonkeTwo").toggle();
    $("#mnTwoText").html("");
    applyTexts(tmp, "knocking", "#mnTwoText");
    } else {
        alert("Ошибка входа");
    }
});

$('#closeMonkeTwo').on('click', function() {
    $(".popupMonkeTwo").hide();
});
$('#openMonkeThree').on('click', function() {
    if (loginStatus == "good") {
    $(".popupMonkeThree").toggle();
    $("#mnThreeText").html("");
    applyTexts(tmp, "indoor", "#mnThreeText");
    } else {
        alert("Ошибка входа");
    }
});

$('#closeMonkeThree').on('click', function() {
    $(".popupMonkeThree").hide();
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