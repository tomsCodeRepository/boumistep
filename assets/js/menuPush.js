import $ from 'jquery';

console.log("menuPush.js");

//https://www.w3schools.com/howto/howto_js_sidenav.asp

// Push left to right
//     $('#showLeftPush').on('click', function () {
// /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
// function openNav() {
//     document.getElementById("mySidenav").style.width = "450px";
//     document.getElementById("main").style.marginLeft = "450px";
//   }
//           openNav();
//           });


//           $('#closebtn').on('click', function () {
//            /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
//             function closeNav() {
//                 document.getElementById("mySidenav").style.width = "0";
//                 document.getElementById("main").style.marginLeft = "0";
//             }
//             closeNav();
//                       });


            $('#showLeftPush').on('click', function () {
            /* Open the sidenav */
                function openNav() {
                    console.log("open");
                document.getElementById("mySidenav").style.width = "100%";
            }
            openNav();
              });
    
    
              $('#closebtn').on('click', function () {
                /* Close/hide the sidenav */
                function closeNav() {
                document.getElementById("mySidenav").style.width = "0";
              }
            closeNav();
                          });






                    