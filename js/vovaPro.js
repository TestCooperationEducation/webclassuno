$('#angry').on('click', function() {
    $(".popupAngry").toggle();
    receiveTexts();
});

$('#desc').on('click', function() {
    $(".popupDesc").toggle();
});

$('#riders').on('click', function() {
    $(".popupRiders").toggle();
});

$('#closeAngry').on('click', function() {
    $(".popupAngry").hide();
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