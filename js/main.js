$(function () {
    $('.top_banner i').on('click', function () {
        $('.top_banner').slideUp();
    })

    $('.main_slider').on('init relnit afterChange', function (e, s, c) {
        console.log(e, s, c);
        // after change 될때 slick current를 감으라는 얘기
        var TG = $('.slick-current')
        TG.addClass('xxx').siblings().removeClass('xxx')
        // slick current 에 xxx (클래스) 붙임
        $('.num').text((c ? c + 1 : 1) + '/' + s.slideCount);
    });

    $('.main_slider').slick({
        //arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        dots: true,
    })

})



