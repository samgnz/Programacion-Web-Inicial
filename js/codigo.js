// CARROUSEL HOME 

var imgs = document.querySelectorAll('.slider img');
var currentImg = 0;  
const interval = 4000;

var timer = setInterval(changeSlide, interval);

function changeSlide(n) {
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].style.opacity = 0;
    }
  
    currentImg = (currentImg + 1) % imgs.length;

if (n != undefined) {
    clearInterval(timer);
    timer = setInterval(changeSlide, interval);
    currentImg = n;
}
  
    imgs[currentImg].style.opacity = 1;
  }