/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
// import './styles/app.css';
import './styles/app.scss';

// https://animate.style/ 
// Commenter si pas d'utilisation des animations
import 'animate.css';

// start the Stimulus application
// import './bootstrap';
//import bootstrap from "bootstrap/dist/js/bootstrap.bundle"
//require('bootstrap');


import $ from 'jquery';
//exemple d'import de fonction avec jquery
// import greet from './greetExemple';
// $(document).ready(function() {
// $('body').prepend('<h1>'+greet('jill')+'</h1>');
// });
import { Tooltip, Toast, Popover } from 'bootstrap';
/*const myCarouselElement = document.querySelector('#carouselExampleDark')
const carousel = new bootstrap.Carousel(myCarouselElement, {
    wrap: true
})

setTimeout(()=>{

    console.log("hello");
    carousel.cycle();

},1000);*/
//console.log("carousel", carousel);


//menu
//let dropDownMask = document.getElementsByClassName("dropDownMask");
let dropDownMask = document.getElementById('maskHeight-01');
let cardHover = document.getElementById('cardHover-01');

dropDownMask.addEventListener('mouseenter', (event)=>{
    event.target.style.transition = "height 50ms ease-in-out"
    //event.target.style.transition = "height ease-in-out 3s"
    event.target.style.backgroundColor = "white"
    event.target.style.height= '92px';
    event.target.style.boxShadow = 'rgba(0, 0, 0, 0.2) 1px 1px 4px 1px';
})
dropDownMask.addEventListener('mouseleave', (event)=>{

    event.target.style.height= '63px';
    event.target.style.boxShadow = 'none';


    event.target.style.backgroundColor = "rgba(255, 255, 255, 0)"
/*    let elem1 = document.getElementById('maskHeight-01') //ok
    elem1.style.backgroundColor = "rgba(255, 255, 255, 0)"*/
})

cardHover.addEventListener('mouseenter', (event)=>{
    //event.target.style.transition = "height 300ms ease-in-out"
    console.log('hover')
    let elem = document.getElementById('maskHeight-01');
    elem.style.height = '92px'
    elem.style.backgroundColor = "white"
    elem.style.boxShadow = 'rgba(0, 0, 0, 0.2) 1px 1px 4px 1px';
    //event.target.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 1px 5px 1px';
/*    elem.style.transition = "height 300ms ease-in-out"*/
})
cardHover.addEventListener('mouseleave', (event)=>{
    //event.target.style.transition = "height 300ms ease-in-out"
    let elem = document.getElementById('maskHeight-01');
    elem.style.height = '64px'
    elem.style.backgroundColor = "rgba(255, 255, 255, 0)"
    elem.style.boxShadow = 'none';
    //elem.style.backgroundColor = "transparent"
    //empeche les affichages involontaires au survol du menu
    cardHover.style.pointerEvents = "none";
    setTimeout(()=>{cardHover.style.pointerEvents = "auto"}, 1000)
/*    elem.style.transition = "height 300ms ease-in-out"*/
})



let scrollElem = document.getElementById('pageScroll');
console.log('scroll', scrollElem.scrollTop)
//scrollElem.addEventListener('scroll',(event)=>{
window.addEventListener('scroll',(event)=>{

    /*console.log(scrollElem.scrollTop)*/
    //console.log('window.scrollTop', window.scrollTop)

    let scrollValue = scrollY;

    if(scrollValue.valueOf() > 20){//100
        //let color = document.getElementsByClassName('navCardBar')[0];
        //document.getElementsByClassName('navCardBar')[0].styles.backgroundColor
        /*let style = getComputedStyle(color);*/

        let elem = document.getElementById('idNavCardBar')
        const mediaQueryMaxWidth1200 = window.matchMedia('(max-width: 1200px)')
        //console.log("matches:", mediaQueryMaxWidth1200.matches)
        if(mediaQueryMaxWidth1200.matches){ //version mobile
            const mediaQueryOrientation = window.matchMedia("(orientation: landscape)");
            if(mediaQueryOrientation.matches){
                elem.style.backgroundColor = "rgba(255, 255, 255, 0)"
                elem.style.boxShadow = "none"
            }else {
                elem.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
                elem.style.boxShadow = "0px 1px 0px rgba(0, 0, 0, 0.2)"
            }

        }
        else { //version desktop
            elem.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
        }

        //let elem = document.getElementById('idNavCardBar')

/*        mediaQueryMaxWidth1200.addEventListener('change', (e)=>{
            console.log("enter")
            if (e.matches) {
                console.log("moins de 1200px")
                //elem.style.backgroundColor = "rgba(255, 255, 255, 0)"
            }else {
                console.log("plus de 1200px")
                //elem.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
            }
        })*/


        let elem1 = document.getElementById('maskHeight-01') //ok
        elem1.style.backgroundColor = "rgba(255, 255, 255, 0)"

        let btnMenu = document.getElementById('showLeftPush')
        btnMenu.style.backgroundColor = "rgba(255, 255, 255, 0)"
        btnMenu.style.borderColor = "rgba(255, 255, 255, 0)"
/*        let elem2 = document.getElementById('cardHover-01-01')
        elem1.style.backgroundColor = "rgba(255, 255, 255, 0.9)"*/

/*        let elem3 = document.getElementById('cardHover-01-01')
        elem3.style.backgroundColor = "black"*/


    }else {
        let elem = document.getElementById('idNavCardBar')
        elem.style.backgroundColor = "rgba(255, 255, 255, 0.3)"
/*        let elem1 = document.getElementById('maskHeight-01') //ok
        elem1.style.backgroundColor = "rgba(255, 255, 255, 0)"*/

/*        let elem1 = document.getElementById('maskHeight-01')
        elem1.style.backgroundColor = "#a7dbe4"*/
    }


})

/*window.addEventListener('orientationchange', ()=>{
    console.log("change")
    const mediaQueryMaxWidth1200 = window.matchMedia('(max-width: 1200px)')
    //console.log("matches:", mediaQueryMaxWidth1200.matches)
    if(mediaQueryMaxWidth1200.matches){
        console.log("1200")
        const mediaQueryOrientation = window.matchMedia("(orientation: landscape)");
        if(mediaQueryOrientation.matches){
            console.log("landscape")
            let elem = document.getElementById('idNavCardBar')
            elem.style.boxShadow = "none"
        }

    }


})*/

/*window.addEventListener('scroll', function() {
    let test = document.getElementsByClassName('page-wrapper')[0];
    console.log('test')
});*/
//Hide adresse bar : fonctionne
/*$('body').height('2000px')*/
/*window.onbeforunload = function () {
    window.scrollTo(0,0);
};
$(window).scrollTop(80)*/
/*setTimeout(()=>{
    $('body').height('auto')
    /!*    let sideNavHight = document.getElementById("mySidenav")
        console.log('sideNavHight', sideNavHight.offsetHeight)
        document.getElementById("mySidenav").style.height = sideNavHight.offsetHeight + 80;*!/
    //$('.sidenav').height('auto')
    $(window).scrollTop(0)
},0)*/
$(window).scrollTop()
setTimeout(()=>{
    $('body').height('auto')
    /*    let sideNavHight = document.getElementById("mySidenav")
        console.log('sideNavHight', sideNavHight.offsetHeight)
        document.getElementById("mySidenav").style.height = sideNavHight.offsetHeight + 80;*/
    //$('.sidenav').height('auto')
    $(window).scrollTop(0)
},0)






/*document.addEventListener("DOMContentLoaded", () => {
    /!*console.log("Hello World!");*!/
});*/

/*$(document).ready(function () {
    console.log("jQuery");
})*/

/*document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        console.log("ready interactive");


    }
};*/


//<< Gestion des animations textuelle du carousel

/*function carousel() {

console.log("carousel !")


}*/

//import PhotoSwipeLightbox from '/node_modules/photoswipe/dist/photoswipe-lightbox.esm.js';

/*import '/node_modules/slick-carousel/slick/slick.scss';
import '/node_modules/slick-carousel/slick/slick.js';*/
//import '/node_modules/slick-carousel/slick/slick.js';
//import 'slick-carousel';
//import 'slick-carousel';

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/build/manifest/sw.js")
        .then((registration) => {
            registration.addEventListener("updatefound", () => {
                // If updatefound is fired, it means that there's
                // a new service worker being installed.
                const installingWorker = registration.installing;
                console.log(
                    "A new service worker is being installed:",
                    installingWorker
                );

                // You can listen for changes to the installing service worker's
                // state via installingWorker.onstatechange
            });
        })
        .catch((error) => {
            console.error(`Service worker registration failed: ${error}`);
        });
} else {
    console.error("Service workers are not supported.");
}



// if ("serviceWorker" in navigator) {
//     navigator.serviceWorker
//         .register("/build/manifest/sw.js")
//         .then((registration) => {
//             registration.addEventListener("updatefound", () => {
//                 // If updatefound is fired, it means that there's
//                 // a new service worker being installed.
//                 const installingWorker = registration.installing;
//                 console.log(
//                     "A new service worker is being installed:",
//                     installingWorker
//                 );
//
//                 // You can listen for changes to the installing service worker's
//                 // state via installingWorker.onstatechange
//             });
//         })
//         .catch((error) => {
//             console.error(`Service worker registration failed: ${error}`);
//         });
// } else {
//     console.error("Service workers are not supported.");
// }

// import PhotoSwipeLightbox from 'photoswipe/lightbox';
// import 'photoswipe/style.css';

// import PhotoSwipeLightbox from '/node_modules/photoswipe/dist/photoswipe-lightbox.esm.js';
// import pswpModule from '/node_modules/photoswipe/dist/photoswipe.esm.js';


import PhotoSwipeLightbox from '/node_modules/photoswipe/dist/photoswipe-lightbox.esm.js';
// import 'photoswipe/style.css';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#photoswipe-gallery',
  children: 'a',
  pswpModule: () => import('photoswipe'),
  //bgOpacity: 0.2,
});
lightbox.init();


//Jquery
//import jquery from 'jquery';


// // Initialize and add the map
// function initMap() {
//     // The location of Uluru
//     const cabinetSandra = { lat: 43.63724616901664, lng: 3.8210787155524875};
//     // The map, centered at cabinetSandra
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 15,
//       center: cabinetSandra,
//     });
//     // The marker, positioned at cabinetSandra
//     const marker = new google.maps.Marker({
//       position: cabinetSandra,
//       map: map,
//     });
//   }
  
//   window.initMap = initMap;


  

/*$(function() {
    carousel()
    console.log("dd")
    console.log( "app.js!" );
});*/

