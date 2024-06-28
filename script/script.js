$(function () {
    
    $(".g1").click(function () {
        $(".pop1").show();
    });
    $(".close").click(function () {
        $(".pop1").hide();
    });
    $(".g2").click(function () {
        $(".pop2").show();
    });
    $(".close").click(function () {
        $(".pop2").hide();
    });
    $(".g3").click(function () {
        $(".pop3").show();
    });
    $(".close").click(function () {
        $(".pop3").hide();
    });
    $(".g5").click(function () {
        $(".pop4").show();
    });
    $(".close").click(function () {
        $(".pop4").hide();
    });


    $(window).scroll(function () {

        $('.gallery1, .gallery2').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 5;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1' }, 2000);
            }

            var top_of_element = $(this).offset().top + $(this).outerHeight() / 5;
            var top_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '0.5' }, 500);
            }
        });
    });


    let prevScrollpos = window.pageYOffset;
    console.log("first Y offset : " + prevScrollpos)
    window.onscroll = headerbarToggle
    function headerbarToggle() {
        let headerbar = document.getElementById("headerbar");

        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos < currentScrollPos) {
            // headerbar.style.opacity = 1;
            $(".header").show();
        } else {
            // headerbar.style.opacity = 0;
            $(".header").hide();
        }
    };

});