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

$('#shambler').on('click', function() {
  $(".popupShambler").toggle();
  // receiveTexts();
});

$('#closeShambler').on('click', function() {
  $(".popupShambler").hide();
});

$('#CounterStrike').on('click', function() {
  $(".popupCS").toggle();
  // receiveTexts();
});

$('#closeCounterStrike').on('click', function() {
  $(".popupCS").hide();
});

$('#terrorists').on('click', function() {
  $(".popupTerrorists").toggle();
  // receiveTexts();
});

$('#closeterrorists').on('click', function() {
  $(".popupTerrorists").hide();
});

$('#swat').on('click', function() {
  $(".popupSwat").toggle();
  // receiveTexts();
});

$('#closeSwat').on('click', function() {
  $(".popupSwat").hide();
});

$('#terraria').on('click', function() {   
  $(".popupTerraria").toggle();
  // receiveTexts();
});

$('#closeTerraria').on('click', function() {
  $(".popupTerraria").hide();
});

$('#summoner').on('click', function() { 
  $(".popupSummoner").toggle();
  // receiveTexts();
});

$('#closeSummoner').on('click', function() {
  $(".popupSummoner").hide();
});

$('#shooter').on('click', function() { 
  $(".popupShooter").toggle();
  // receiveTexts();
});

$('#closeShooter').on('click', function() {
  $(".popupShooter").hide();
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