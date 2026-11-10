console.log('flotte.js')
import $ from 'jquery';
import 'slick-carousel';

/*import 'slick-carousel';*/
//import '/node_modules/slick-carousel/slick/slick.js';


/*$('.your-class').slick({
    rtl: true,
/!*    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3*!/
});*/

/*$(".vertical-center-3").slick({
    dots: true,
    vertical: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3
});*/

//https://www.npmjs.com/package/slick-carousel
$(".center").slick({
    //centerMode: true,
    dots: true,
   //accessibility: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    //mobileFirst: true,
    //touchMove: true,
/*    dotsClass: 'custom_paging',
    customPaging: function (slick,index) {
        return (index + 1) + ' ' + '/' + ' ' + '0' + slick.slideCount;
    }*/
});
//$(".center").slick('slickSetOption', 'slidesToScroll', 3, true);

//Smooth scrooling
$(document).ready(function() {
    $("a.scrollLink").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 500);
    });
});
