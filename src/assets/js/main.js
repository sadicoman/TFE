"use strict";

/*----- Copyright -----*/
if (document.getElementById("year")) {
let date = new Date().getFullYear(); 

document.getElementById("year").innerHTML = date;    
}
/*--------------------------------------------*/


/*----- Annimation GSAP -----*/
// gsap.to( '.ball', {
//     x: 300,
//     stagger: 0.08,
//     duration: 1
// } );
/*--------------------------------------------*/


/*----- Btn -----*/
let btnTaille = document.querySelectorAll(".btn");
let btnTailleHaut = document.querySelectorAll(".btn__el--haut");
let btnTailleBas = document.querySelectorAll(".btn__el--bas");

function updateStyleBtn(){
  for(let i = 0 ; i < btnTaille.length ; i++){ 
    // .length => nombre d'éléments dans le tableau "btnTaille"
    let btnHeight = btnTailleHaut[i].offsetHeight;
    let btnWidth = btnTailleHaut[i].offsetWidth;
    if(btnTaille[i].classList.contains("btn--icon")){
      // btnWidth += 15;
    }
    
    btnTailleBas[i].style.width = btnWidth+"px";
    btnTailleBas[i].style.height = btnHeight+"px";
  };
}

// mise à jour de la taille toutes les X millisecondes
let interval = setInterval(updateStyleBtn, 100);
interval;
/*--------------------------------------------*/

gsap.to(".roue2", {
	duration: 3, 
	rotation: 360,  
	transformOrigin: 'center', 
	repeat: -1,
	ease: 'linear',
  });