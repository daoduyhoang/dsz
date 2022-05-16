$(document).ready(function(){
    $('.slide-men').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><img src='../images/page_3/circle-arow-left.svg'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='../images/page_3/circle-arow-right.svg'></i></button>"
    });

    $('.slide-banner').slick({
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><img src='../images/page_3/circle-arow-left.svg'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='../images/page_3/circle-arow-right.svg'></i></button>"
    });
  });
      