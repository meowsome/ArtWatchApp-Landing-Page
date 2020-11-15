window.addEventListener("load", function () {
    //Text Carousel
    var carouselWords = [
        "OTTERS",
        "PAWS",
        "FOXES",
        "FLUFFY TAIL",
        "FANART"
    ]
    var first = 0;
    var second = 1;
    var third = 2;
    var fourth = 3;
    var fifth = 4;

    function carousel() {
        setTimeout(function () {
            $(".carousel").html(`<h4 class="carousel-text-zeroth carousel-text">${carouselWords[fifth]}</h4><h4 class="carousel-text-first carousel-text">${carouselWords[first]}</h4><h4 class="carousel-text-second carousel-text">${carouselWords[second]}</h4><div class="carousel-text-wrapper"><h4 class="carousel-text-third carousel-text">${carouselWords[third]}</h4></div><h4 class="carousel-text-fourth carousel-text">${carouselWords[fourth]}</h4><h4 class="carousel-text-fifth carousel-text">${carouselWords[fifth]}</h4>`);
            if (first === 0) {
                first = 4;
            } else {
                first--;
            }
            if (second === 0) {
                second = 4;
            } else {
                second--;
            }
            if (third === 0) {
                third = 4;
            } else {
                third--;
            }
            if (fourth === 0) {
                fourth = 4;
            } else {
                fourth--;
            }
            if (fifth === 0) {
                fifth = 4;
            } else {
                fifth--;
            }
            setTimeout(function () {
                $('.carousel-text-zeroth').each(function () {
                    $(this).addClass("carousel-transition-zeroth-anim");
                });
                $('.carousel-text-first').each(function () {
                    $(this).addClass("carousel-transition-first-anim");
                });
                $('.carousel-text-second').each(function () {
                    $(this).addClass("carousel-transition-second-anim");
                });
                $('.carousel-text-third').each(function () {
                    $(this).addClass("carousel-transition-third-anim");
                });
                $('.carousel-text-fourth').each(function () {
                    $(this).addClass("carousel-transition-fourth-anim");
                });
                $('.carousel-text-fifth').each(function () {
                    $(this).addClass("carousel-transition-fifth-anim");
                });
            }, 2000);
            carousel();
        }, 3001);
    }
    setTimeout(function () {
        $('.carousel-text-zeroth').each(function () {
            $(this).addClass("carousel-transition-zeroth-anim");
        });
        $('.carousel-text-first').each(function () {
            $(this).addClass("carousel-transition-first-anim");
        });
        $('.carousel-text-second').each(function () {
            $(this).addClass("carousel-transition-second-anim");
        });
        $('.carousel-text-third').each(function () {
            $(this).addClass("carousel-transition-third-anim");
        });
        $('.carousel-text-fourth').each(function () {
            $(this).addClass("carousel-transition-fourth-anim");
        });
        $('.carousel-text-fifth').each(function () {
            $(this).addClass("carousel-transition-fifth-anim");
        });
    }, 2000);
    carousel();


    //Scroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            'scrollTop': $(this.hash).offset().top + 1
        }, 750, 'swing');
    });
});
