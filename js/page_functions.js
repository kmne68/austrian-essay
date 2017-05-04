
function changeImage()
{
var img = document.getElementById("image");
img.src="./images/menger.png";
return false;
}


var imgs = ['./images/menger.png', './images/hayek.jpg', './images/mises.jpg', './images/smith.jpg'];

function changeImage() {
    //var img = document["buttonOne"];
    var img = document.getElementById("image");
    if (!img._index) img._index = 0;
    img.src = imgs[img._index++];
    if (img._index >= imgs.length) img._index = 0;
  }


  var divs = $("div.Image").get().sort(function(){ 
            return Math.round(Math.random())-0.5; //so we get the right +/- combo
           }).slice(0,4);
$(divs).show();


(function makeDiv(){
    // vary size for fun
    var divsize = ((Math.random()*100) + 50).toFixed();
    var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
    $newdiv = $('<div/>').css({
        'width':divsize+'px',
        'height':divsize+'px',
        'background-color': color
    });

    // make position sensitive to size and document's width
    var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
    var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

    $newdiv.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'display':'none'
    }).appendTo( 'body' ).fadeIn(100).delay(1000).fadeOut(500, function(){
      $(this).remove();
      makeDiv(); 
    }); 
})();