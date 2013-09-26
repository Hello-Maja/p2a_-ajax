$(document).ready(function(){
	    console.log('Hi There');
  $('#get-color').on('click', function(event){
    event.preventDefault();

  $.post('/color', function(result){
  console.log(result);     
  $('ul li:nth-child('+result.cell+')').css('background-color', result.color)
    }, 'json');
  })
});