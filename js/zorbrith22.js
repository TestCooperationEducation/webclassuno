$('#openSquidOne').on('click', function() {
    $(".popupSquidOne").toggle();
    receiveTexts();
});

$('#closeSquidOne').on('click', function() {
    $(".popupSquidOne").hide();
});

$('#openSquidTwo').on('click', function() {
    $(".popupSquidTwo").toggle();
});

$('#closeSquidTwo').on('click', function() {
    $(".popupSquidTwo").hide();
});

$('#openSquidThree').on('click', function() {
    $(".popupSquidThree").toggle();
});

$('#closeSquidThree').on('click', function() {
    $(".popupSquidThree").hide();
});
$('#openPoppy').on('click', function() {
    $(".popupPoppy").toggle();
});

$('#closePoppy').on('click', function() {
    $(".popupPoppy").hide();
});

$('#openRainWorld').on('click', function() {
    $(".popupRainWorld").toggle();
});

$('#closeRainWorld').on('click', function() {
    $(".popupRainWorld").hide();
});

$('#openfnf').on('click', function() {
    $(".popupfnf").toggle();
});

$('#closefnf').on('click', function() {
    $(".popupfnf").hide();
});
$('#openParrotOne').on('click', function() {
    $(".popupParrotOne").toggle();
});

$('#closeParrotOne').on('click', function() {
    $(".popupParrotOne").hide();
});
$('#openParrotTwo').on('click', function() {
    $(".popupParrotTwo").toggle();
});

$('#closeParrotTwo').on('click', function() {
    $(".popupParrotTwo").hide();
});
$('#openParrotThree').on('click', function() {
    $(".popupParrotThree").toggle();
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

$('#receiveTexts').on('click', function() {
    receiveTexts();
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
            $("#sqOneText").append(data[i].text);
        }
        if (data[i].textName == "poppy") {
            $("#ppOneText").append(data[i].text);
        }
        if (data[i].textName == "playtime") {
            $("#ppTwoText").append(data[i].text);
        }
    }
}