$('#darkest').on('click', function() {
    $(".popupDarkest").toggle();
    // receiveTexts();
});

$('#closeDarkest').on('click', function() {
  $(".popupDarkest").hide();
});

$('#oldWitch').on('click', function() {
  $(".popupOldWitch").toggle();
  // receiveTexts();
});

$('#closeOldWitch').on('click', function() {
  $(".popupOldWitch").hide();
});

// $('#CounterStrike').on('click', function() {
//     $(".popupCounterStrike").toggle();
// });

// $('#riders').on('click', function() {
//     $(".popupRiders").toggle();
// });

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