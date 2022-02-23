// --- Header-mini при скролле
$(window).scroll(() => {
    var windowTop = $(window).scrollTop();
    windowTop > 200 ? $('.header').addClass('header-mini') : $('.header').removeClass('header-mini');
});



// --- Hamburger
$('.hamburger').on('click', function () {
    $('.header').toggleClass('mobile');
})



// --- Плавный переход к Якорю
$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    $('header').removeClass('mobile');
    e.preventDefault();
});



// --- Parallax-Scroll
const bg = document.querySelector('.top');
const human = document.querySelector('.top__img-human');
const mountain = document.querySelector('.top__img-mountain');
const mountains = document.querySelector('.top__img-mountains');
const title = document.querySelector('.top__title');

document.addEventListener("scroll", function () {
    var value = window.scrollY;

    human.style.transform = `translateY(${value * 0.15}px)`;
    mountains.style.top = -value * 0.15 + 'px';
    title.style.top = value * 1 + 'px';
})




// --- Эффект-3D у "Places"
VanillaTilt.init(document.querySelectorAll(".places__item"), {
    max: 15,
    speed: 300
});



// --- Аккордион
$('.accordion').find('.accordion__item-header').click(function () {
    $('.accordion__item').removeClass('active');
    $(this).next().slideDown('fast');
    $('.accordion__item-answer').not($(this).next()).slideUp('slow');
    $(this).parent().addClass('active');
});


new Swiper('.swiper-ways', {
    slidesPerView: 4,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    breakpoints: {
        1100: {
            slidesPerView: 4,
        },
        800: {
            slidesPerView: 3,
        },
        500: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    }
});



new Swiper('.swiper-places', {
    loop: false,
    effect: "fade",
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    autoplay: {
        delay: 8000,
        disableOnInteraction: true,
    },
});




$('.gallery-magnific').magnificPopup({
    type: 'image',
    gallery: {
        // options for gallery
        enabled: true,
        tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
    },
    titleSrc: 'title',
});
$('.video-youtube').magnificPopup({
    type: 'iframe',
    removalDelay: 160,
    preloader: false,
});


// Проверка валидации 
$(document).ready(function () {
    $('#contact__form').submit(function (e) {
        e.preventDefault();
        var message = $('#contact__form-message').val();
        var email = $('#contact__form-email').val();

        $(".error").remove();
        $(".input").removeClass('input-error');

        if (message.length < 1) {
            $('#contact__form-message').addClass('input-error');
            $('#contact__form-message').after('<span class="error">Заполните поле</span>');
        }
        if (email.length < 1) {
            $('#contact__form-email').addClass('input-error');
            $('#contact__form-email').after('<span class="error">Заполните поле</span>');
        } else {
            var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var validEmail = regEx.test(email);
            if (!validEmail) {
                $('#contact__form-email').addClass('input-error');
                $('#contact__form-email').after('<span class="error">Заполните правильно</span>');
            }
        }
    });
});



$(window).scroll(function () {
    var box1 = $('.header').offset().top;
    /*Если сделали скролл на 100px задаём новый класс для header*/
    if (box1 > 100) {
        $('.simple-select').removeClass('open');
    } 
});