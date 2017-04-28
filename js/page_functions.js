
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