AOS.init();

$(window).scroll(function() {
    var height = $(window).scrollTop();

    if (height >= 2 ) {
        $(".f-navbar").addClass("remove-padding f-global-shadow transition");
    } else {
        $(".f-navbar").removeClass("remove-padding f-global-shadow");
    }

    if (height  >= 710) {
        $(".f-navbar").addClass("gradient-navbar");
    } else {
        $(".f-navbar").removeClass("gradient-navbar");
    }
});

//smooth page scroll
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});


