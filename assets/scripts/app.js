$(document).ready(function(){
  $('.light-switch').on('click', function(e) {
    var hex = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    $('#background').css('background',hex);
  });
});