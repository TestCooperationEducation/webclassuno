$('#darkest').on('click', function() {
    $(".popupDarkest").toggle();
    receiveTexts();
});

$('#desc').on('click', function() {
    $(".popupDesc").toggle();
});

$('#riders').on('click', function() {
    $(".popupRiders").toggle();
});

$('#closeDarkest').on('click', function() {
    $(".popupDarkest").hide();
});

$('#closeDesc').on('click', function() {
    $(".popupDesc").hide();
});

$('#closeRiders').on('click', function() {
    $(".popupRiders").hide();
});

$('#receiveTexts').on('click', function() {
    receiveTexts();
});

$('#Counter-Strike').on('click', function() {
    $(".popupDarkest").toggle();
    receiveTexts();
});

$('#desc').on('click', function() {
    $(".popupDesc").toggle();
});

$('#riders').on('click', function() {
    $(".popupRiders").toggle();
});

$('#closeDarkest').on('click', function() {
    $(".popupDarkest").hide();
});

$('#closeDesc').on('click', function() {
    $(".popupDesc").hide();
});

$('#closeRiders').on('click', function() {
    $(".popupRiders").hide();
});

$('#receiveTexts').on('click', function() {
    receiveTexts();
});


function receiveTexts() {
    var tmp = new Object();
      $.post('../php/index.php', {}, async function(data) {
        try {
            tmp = await JSON.parse(data);
            alert(tmp[0].Text);
          } catch(e) {
            console.log(e);
          }   
      });    
}