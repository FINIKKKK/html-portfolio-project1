// --- Header-mini при скролле
$(window).scroll(() => {
    var windowTop = $(window).scrollTop();
    windowTop > 200 ? $('.header').addClass('header-mini') : $('.header').removeClass('header-mini');
});
if ($(window).scrollTop() > 200) {
    $('.header').addClass('header-mini')
} else {
    $('.header').removeClass('header-mini');
}



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



// --- Аккордион
$('.accordion').find('.accordion__item-header').click(function () {
    $('.accordion__item').removeClass('active');
    $(this).next().slideDown('fast');
    $('.accordion__item-answer').not($(this).next()).slideUp('slow');
    $(this).parent().addClass('active');
});



const swiper_ways = new Swiper('.swiper-ways', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: -30,
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
        2200: {
            slidesPerView: 6,
        },
        1700: {
            slidesPerView: 5,
        },
        1100: {
            slidesPerView: 4,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: -20,
        },
        550: {
            slidesPerView: 2,
            spaceBetween: -10,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    }
});



const swiper_places = new Swiper('.swiper-places', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 100,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        600: {
            autoplay: {
                enabled: false,
            },
        },
        0: {
            autoplay: {
                enabled: true,
                delay: 8000,
                disableOnInteraction: true,
            },
        },
    }
});



$('.gallery-magnific').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true,
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
        var name = $('#contact__form-name').val();
        var email = $('#contact__form-email').val();

        $(".error").remove();
        $(".input").removeClass('input-error');

        setTimeout(function () {
            $('.error').remove();
        }, 5000);

        if (name.length < 1) {
            $('#contact__form-name').addClass('input-error');
            $('#contact__form-name').after('<span class="error">Заполните поле</span>');
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

