/*Clayton Walker
CIS 4004 Summer 2014 HW6
myJavaScript.js file*/

//function called to display date for footer
function displayDateAndTime () {
	document.write("Today is: " + Date());
}

//jQuery to show and hide a div when a mouse is hovering over an image
$("#yourimage").mouseover(function() {
    $("#hidden_div").show();
}).mouseout(function() { 
    $("#hidden_div").hide();
});

//jQuery to show and hide a div when a mouse is hovering over an image
$(function() {
        var moveLeft = 20;
        var moveDown = 10;
        
        $('#trigger').hover(function(e) {
          $('div#pop-up').show();
          //.css('top', e.pageY + moveDown)
          //.css('left', e.pageX + moveLeft)
          //.appendTo('body');
        }, function() {
          $('div#pop-up').hide();
        });
        
        $('#trigger').mousemove(function(e) {
          $("div#pop-up").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
        });
        
      });