$('#darkest').on('click', function() {
    $(".popupDarkest").toggle();
    receiveTexts();
});

$('#CounterStrike').on('click', function() {
    $(".popupCounterStrike").toggle();
});

$('#riders').on('click', function() {
    $(".popupRiders").toggle();
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