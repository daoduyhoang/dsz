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
      