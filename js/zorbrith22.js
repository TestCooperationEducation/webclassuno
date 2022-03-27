var tmp = new Object();
receiveTexts();
$('#openSquidOne').on('click', function() {
    $(".popupSquidOne").toggle();
    applyTexts(tmp, "squid", "#sqOneText");
});

$('#closeSquidOne').on('click', function() {
    $(".popupSquidOne").hide();
});

$('#openSquidTwo').on('click', function() {
    $(".popupSquidTwo").toggle();
    applyTexts(tmp, "squidgame", "#sqTwoText");
});

$('#closeSquidTwo').on('click', function() {
    $(".popupSquidTwo").hide();
});

$('#openSquidThree').on('click', function() {
    $(".popupSquidThree").toggle();
    applyTexts(tmp, "game", "#sqThreeText");
});

$('#closeSquidThree').on('click', function() {
    $(".popupSquidThree").hide();
});
$('#openPoppy').on('click', function() {
    $(".popupPoppy").toggle();
    applyTexts(tmp, "poppy", "#ppOneText");
    applyTexts(tmp, "playtime", "#ppTwoText");
});

$('#closePoppy').on('click', function() {
    $(".popupPoppy").hide();
});

$('#openRainWorld').on('click', function() {
    $(".popupRainWorld").toggle();
    applyTexts(tmp, "RainWorld", "#rwOneText");
    applyTexts(tmp, "Rain", "#rwTwoText");
});

$('#closeRainWorld').on('click', function() {
    $(".popupRainWorld").hide();
});

$('#openfnf').on('click', function() {
    $(".popupfnf").toggle();
    applyTexts(tmp, "Fnf", "#fnfOneText");
    applyTexts(tmp, "nf", "#fnfTwoText");
});

$('#closefnf').on('click', function() {
    $(".popupfnf").hide();
});
$('#openParrotOne').on('click', function() {
    $(".popupParrotOne").toggle();
    applyTexts(tmp, "parrot", "#prOneText");
});

$('#closeParrotOne').on('click', function() {
    $(".popupParrotOne").hide();
});
$('#openParrotTwo').on('click', function() {
    $(".popupParrotTwo").toggle();
    applyTexts(tmp, "rrot", "#prTwoText");
});

$('#closeParrotTwo').on('click', function() {
    $(".popupParrotTwo").hide();
});
$('#openParrotThree').on('click', function() {
    $(".popupParrotThree").toggle();
    applyTexts(tmp, "par", "#prThreeText");
});

$('#closeParrotThree').on('click', function() {
    $(".popupParrotThree").hide();
});
$('#openMonkeOne').on('click', function() {
    $(".popupMonkeOne").toggle();
});

$('#closeMonkeOne').on('click', function() {
    $(".popupMonkeOne").hide();
});
$('#openMonkeTwo').on('click', function() {
    $(".popupMonkeTwo").toggle();
});

$('#closeMonkeTwo').on('click', function() {
    $(".popupMonkeTwo").hide();
});
$('#openMonkeThree').on('click', function() {
    $(".popupMonkeThree").toggle();
});

$('#closeMonkeThree').on('click', function() {
    $(".popupMonkeThree").hide();
});

// $('#receiveTexts').on('click', function() {
//     receiveTexts();
// });

function receiveTexts() {
    
      $.post('../php/indexZorinbanan.php', {}, async function(data) {
        try {
            tmp = await JSON.parse(data);
            // alert(tmp[0].text);
            // $("#sqOneText").append(tmp[0].text);
            // applyTexts(tmp); 
          } catch(e) {
            console.log(e);
          }   
      });
         
}

function applyTexts(data, texName, id) {
    for (var i = 0; i < Object.keys(data).length; i++) {
        if (data[i].textName == texName) {
            $(id).append(data[i].text);
        if (data[i].textName == "monke") {
            $("#mnOneText").append(data[i].text);
        }
        if (data[i].textName == "knocking") {
            $("#mnTwoText").append(data[i].text);
        }
        if (data[i].textName == "indoor") {
            $("#mnThreeText").append(data[i].text);
        }
    }
}