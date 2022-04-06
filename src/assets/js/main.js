"use strict";

/*----- Copyright -----*/
if (document.getElementById("year")) {
let date = new Date().getFullYear(); 

document.getElementById("year").innerHTML = date;    
}



/*--------------------------------------------*/

gsap.to( '.ball', {
    x: 300,
    stagger: 0.08,
    duration: 1
} );