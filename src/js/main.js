$(window).scroll(() => {
    var windowTop = $(window).scrollTop();
    windowTop > 200 ? $('.header').addClass('header-mini') : $('.header').removeClass('header-mini');
});

const bg = document.querySelector('.top');
const human = document.querySelector('.top__img-human');
const mountain = document.querySelector('.top__img-mountain');
const mountains = document.querySelector('.top__img-mountains');
const title = document.querySelector('.top__title');

document.addEventListener("scroll", function () {
    var value = window.scrollY;
    
    human.style.transform = `translateY(${value * 0.15}px)`;
    // mountain.style.top = value * 1 + 'px';
    mountains.style.top = -value * 0.15 + 'px';
    title.style.top = value * 1 + 'px';
})



$(document).ready(function () {

    $('.numbers__item-title').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });


    $(function () {
        $('.accordion').find('.accordion__item-header').click(function () {

            $('.accordion__item').removeClass('accordion__item--active');

            $(this).next().slideDown('fast');

            $('.accordion__item-answer').not($(this).next()).slideUp('slow');

            $(this).parent().addClass('accordion__item--active');
        });
    });


    $('.ways__items').slick({
        slidesToShow: 4,
        centerMode: true,
        nextArrow: '<div class="next"><svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5833 11.75L16.822 14.5112L25.7912 23.5L16.822 32.4888L19.5833 35.25L31.3333 23.5L19.5833 11.75Z" fill="#555555"/></svg></div>',
        prevArrow: '<div class="prev"><svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5833 11.75L16.822 14.5112L25.7912 23.5L16.822 32.4888L19.5833 35.25L31.3333 23.5L19.5833 11.75Z" fill="#555555"/></svg></div>',
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
        ]
    });

    $('.places__inner').slick({
        nextArrow: '<div class="next"><svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5833 11.75L16.822 14.5112L25.7912 23.5L16.822 32.4888L19.5833 35.25L31.3333 23.5L19.5833 11.75Z" fill="#555555"/></svg></div>',
        prevArrow: '<div class="prev"><svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5833 11.75L16.822 14.5112L25.7912 23.5L16.822 32.4888L19.5833 35.25L31.3333 23.5L19.5833 11.75Z" fill="#555555"/></svg></div>',
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 5000,
                    arrows: false,
                }
            },
        ]
    });


    VanillaTilt.init(document.querySelectorAll(".places__item"), {
        max: 15,
        speed: 300
    });


    $("body").on('click', '[href*="#"]', function (e) {
        var fixed_offset = 100;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
    });

    $('.hamburger').on('click', function () {
        $('.header').toggleClass('mobile');
    })


    new WOW({
        offset: 400,
    }).init();


});




