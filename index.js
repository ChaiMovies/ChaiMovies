'use strict'
/*LLAMADA CARTELERA*/

/* 
document.addEventListener("DOMContentLoaded",async function()
{
    let películas = await Cartelera.getNuevasPelículas(1);
    console.log(películas)
});


  window.addEventListener("onscroll",async function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.querySelector("nav").style.backgroundColor = "yellow";
    } else {
      document.getElementById("nav").style.width = "90vw";
    }
  });
*/


const buttonsWrapper = document.querySelector(".botones");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", function( e ) {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-33.33333333333333%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-66.6666666667%)';
      e.target.classList.add('active');
    }
  }
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.querySelector("nav").className = "scrollNav";
  } else {
    document.querySelector("nav").className = "";
  }
}









  