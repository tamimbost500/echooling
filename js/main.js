(function($) {
    "use strict";


    // Start Top To Scroll
    let calcScrollValue = () => {
        let scrollProgress = document.getElementById("progress");
        let progressValue = document.getElementById("progress-value");
        let pos = document.documentElement.scrollTop;
        let calcHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        if (pos > 100) {
            scrollProgress.style.display = "grid";
        } else {
            scrollProgress.style.display = "none";
        }
        scrollProgress.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
        });
        scrollProgress.style.background = `conic-gradient(#0c0f32 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };

    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;


    //preloader
    $(window).on('load', function() {
        $("#loader").delay(1000).fadeOut(500);
    });


    // Ech Hero Video Popup (using Maginify Popup)
    $('.ech-hero-play-video-btn').magnificPopup({
  type: 'iframe',
  iframe: {
    patterns: {
      youtube: {
      src: 'https://www.youtube.com/embed/%id%?autoplay=1'
      },
    },
  }
});
    

    // Responsive Mobile Menu
    $(window).on('resize', function() {
        var windowWidth = $(window).width();

        if (windowWidth > 991) {
            $(".mobile-menu-active").removeClass("mobile-menu-active");
        }

    });
    $(".mobile-menu-toggle").on("click", function() {
        $(".ech-mobile-menu").toggleClass("mobile-menu-active");
    });

    $(".ech-mobile-menu ul li.has-submenu a").each(function() {
        $(this).on("click", function() {
            $(this).siblings('ul').slideToggle();
        });
    });

    $(".close-menu").on("click", function() {
        $(".ech-mobile-menu").removeClass("mobile-menu-active");
    });


    // Ech Hero Slider Area (Slick Slider)
    $(".hero-slider").slick({
        slidesToShow: 1,
        dots: false,
        prevArrow: '.arrow-prev',
        nextArrow: '.arrow-next',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    prevArrow: false,
                    nextArrow: false,
                }
            }
        ]
    });


    //Header Sticky Menu
    $(window).on("scroll", function() {
        var scrollBarPosition = $(this).scrollTop();
        if (scrollBarPosition > 80) {
            $(".header-sticky").addClass("sticky-on");
        } else {
            $(".header-sticky").removeClass("sticky-on");
        }
    });



})(jQuery)
