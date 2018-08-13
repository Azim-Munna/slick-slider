$('.slick_slider').slick({
  centerMode: true,
  centerPadding: '150px',
  slidesToShow: 1,

  // fade: true,
  
  // responsive: [
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       arrows: false,
  //       centerMode: true,
  //       centerPadding: '40px',
  //       slidesToShow: 3
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       arrows: false,
  //       centerMode: true,
  //       centerPadding: '40px',
  //       slidesToShow: 1
  //     }
  //   }
  // ]
});

//  $('.slick_slider').slick({
//    centerMode: true,
//    centerPadding: '150px',
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   // fade: true,
//   asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// });
$("button.slick-next.slick-arrow").html(" ");
$("button.slick-prev.slick-arrow ").html(" ");