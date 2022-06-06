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


    // $('#slide-global').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     autoplay:true,
    //     speed:1500,
    // });
    function animationSlide(callback1, callback2){
        callback1();
        callback2();
    }

   
    function moveLeft(){
            setTimeout(function(){
                $(".content_l").animate({
                    left: '-5%',
                    opacity: '0',
                });
                $(".content_c").animate({
                    // left: '-5%',
                    opacity: '0',
                });
                $(".content_r").animate({
                    right: '-5%',
                    opacity: '0',
                });
        }, 1500);
    }

    function moveRight(){
            setTimeout(function(){
                $(".content_l").animate({
                    left: '0',
                    opacity: '1',
                });
                $(".content_c").animate({
                    left: '50%',
                    opacity: '1',
                });
                $(".content_r").animate({
                    right:'0%',
                    opacity: '1',
                });
        }, 2500);
    }
    setInterval(function(){
        animationSlide(moveLeft,moveRight);
    },8000)

    //THE MEET TEAM
    let member = {
        name:"THUỶ WOLF",
        position:"Film Director –Producer",
        exp:"Over 10 years of experience in the Television and Advertising industry",
        study:"Bachelor of Art in Film Directing Academy of Theatre & Film –Ho Chi Minh City"
    }
    $('.item-teams').click(function(){
        member.name = $(this).attr('data-name');
        member.position = $(this).attr('data-position');
        member.exp = $(this).attr('data-ex');
        member.study = $(this).attr('data-study');
        renderHtmlMeetTeam(member);
    })

    function renderHtmlMeetTeam(data){
        $('.name-member').html(data.name);
        $('.position-member').html(data.position);
        $('.exp-member').html(data.exp);
        $('.study-member').html(data.study);
    }
  });
      