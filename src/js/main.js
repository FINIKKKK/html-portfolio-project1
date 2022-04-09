// --- Маленький Header при скролле
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



// --- Плавный переход к Якорям
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

    // human.style.transform = `translateY(${value * 0.15}px)`;
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



// --- Slider(Ways)
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
        enabled: false,
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
    },
});
// Запуск Аutoplay только когда пользователь вошел в область видимости
$(window).scroll(function () {
    $('.ways').each(function () {
        if ($(window).scrollTop() + $(window).height() >= $(this).position().top && $(window).scrollTop() < $(this).position().top + $(this).height()) {
            swiper_ways.autoplay.start();
        }
    });
});



// --- Slider(Places)
const swiper_places = new Swiper('.swiper-places', {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 100,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 8000,
        disableOnInteraction: true,
    },
});



// --- Magnific-Popup
$('.gallery-magnific').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true,
    },
    image: {
        titleSrc: function (item) {
            return item.el.find('.gallery__item-place').html() + `<small>${item.el.find('.gallery__item-name').html()}</small>`;
        },
    }
});
$('.video-youtube').magnificPopup({
    type: 'iframe',
    removalDelay: 160,
    preloader: false,
});



// --- Проверка валидации 
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
            if ($("html").attr("lang") === 'ru') {
                $('#contact__form-name').after('<span class="error">Заполните поле</span>');
            } else {
                $('#contact__form-name').after('<span class="error">Fill in the field</span>');
            }
        }
        if (email.length < 1) {
            $('#contact__form-email').addClass('input-error');
            if ($("html").attr("lang") === 'ru') {
                $('#contact__form-email').after('<span class="error">Заполните поле</span>');
            } else {
                $('#contact__form-email').after('<span class="error">Fill in the field</span>');
            }
        } else {
            var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var validEmail = regEx.test(email);
            if (!validEmail) {
                $('#contact__form-email').addClass('input-error');
                if ($("html").attr("lang") === 'ru') {
                    $('#contact__form-email').after('<span class="error">Заполните правильно</span>');
                } else {
                    $('#contact__form-email').after('<span class="error">Fill in correctly</span>');
                }
            }
        }
    });
});



// --- Закрытие списка при скролле 
$(window).scroll(function () {
    var box1 = $('.header').offset().top;
    /*Если сделали скролл на 100px задаём новый класс для header*/
    if (box1 > 100) {
        $('.simple-select').removeClass('open');
    }
});



// --- Анимация при скролле(WOW)
wow = new WOW(
    {
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 100,
        mobile: true,
        live: true
    }
)
wow.init();



// --- Анимация появления чисел 
$(document).ready(function () {
    var show = true;
    var countbox = ".numbers__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.numbers__item-title').css('opacity', '1');
            $('.numbers__item-title').spincrement({
                thousandSeparator: "",
                duration: 2000
            });

            show = false;
        }
    });

});



// --- Проверка геолокации и автоматическое определение языка страницы
$.ajax({
    url: "https://get.geojs.io/v1/ip/geo.js",
    dataType: "jsonp",
    jsonpCallback: "geoip",
    success: function (data) {
        // Коды русскоязычных стран
        let countries = ["KZ", "UA", "RU", "BY", "UZ", "TM", "GE", "AZ", "MD", "KG"];

        // Изменение атрибутта lang у html
        if (countries.includes(data.country_code)) {
            $("html").attr("lang", "ru");
        } else {
            $("html").attr("lang", "en");
        }

        // Перевод страницы в зависимости от атрибута lang
        var tran = new Translater({
            lang: `${$("html").attr("lang")}`
        });

        // Смена Title
        var url = window.location.href;
        var page1 = new RegExp("/");

        if (page1.test(url) && $("html").attr("lang") === 'ru') {
            $("title").html("Проект 1");
        } else {
            $("title").html("Project 1");
        }

        // Смена активного элемента в списке языков
        if ($("html").attr("lang") === 'ru') {
            $('.simple-select ul li').removeClass('active');
            $('.simple-select ul li').first().addClass('active');
            $('.simple-select span').html('ru');
        } else {
            $('.simple-select ul li').removeClass('active');
            $('.simple-select ul li').last().addClass('active');
            $('.simple-select span').html('en');
        }

        // Смена языка в атрибутте lang
        $(".simple-select a").on("click", function (e) {
            e.preventDefault();
            $("html").attr("lang", $(this).text());
        });
        // Смена языка в списке
        $('.simple-select ul li a').first().click(function () {
            $(this).toggleClass('gg');
            tran.setLang('default');
        });
        $('.simple-select ul li a').last().click(function () {
            $(this).toggleClass('gg');
            tran.setLang('en');
        });
    }
});



// --- Custom Cursor
var cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $outline: document.querySelector('.cursor'),

    init: function () {
        // Set up element sizes
        this.outlineSize = this.$outline.offsetWidth;

        this.setupEventListeners();
        this.animateDotOutline();
    },

    setupEventListeners: function () {
        var self = this;

        // Anchor hovering
        document.querySelectorAll('a, .simple-select, .accordion__item-header, button').forEach(function (el) {
            el.addEventListener('mouseover', function () {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function () {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });

        // Anchor hovering
        document.querySelectorAll('input').forEach(function (el) {
            el.addEventListener('mouseover', function () {
                self.cursorEnlarged = true;
                $('.cursor').css('background-color', 'transparent');
            });
            el.addEventListener('mouseout', function () {
                self.cursorEnlarged = false;
                $('.cursor').css('background-color', 'rgba(28,28,28,.5)');
            });
        });

        // Click events
        document.addEventListener('mousedown', function () {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function () {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });


        document.addEventListener('mousemove', function (e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
        });

        // Hide/show cursor
        document.addEventListener('mouseenter', function (e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$outline.style.opacity = 1;
        });

        document.addEventListener('mouseleave', function (e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$outline.style.opacity = 0;
        });
    },

    animateDotOutline: function () {
        var self = this;

        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';

        requestAnimationFrame(this.animateDotOutline.bind(self));
    },

    toggleCursorSize: function () {
        var self = this;

        if (self.cursorEnlarged) {
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },

    toggleCursorVisibility: function () {
        var self = this;

        if (self.cursorVisible) {
            self.$outline.style.opacity = 1;
        } else {
            self.$outline.style.opacity = 0;
        }
    },

}
cursor.init();


