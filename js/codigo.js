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


  
  // BOTON ENVIAR FORMULARIO

function mensajeEnviado() {
  alert("¡Gracias por contactarnos! En breve nos comunicaremos")
}




  // BOTON LEER MÁS


  function verMas() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Leer Más";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Leer Menos";
      moreText.style.display = "inline";
    }
  }