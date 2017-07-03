$(document).ready(function() {
    $('.services').owlCarousel({
        items: 4,
        loop: false,
        nav: true,
        dots: false,
        smartSpeed: 700,
        responsiveClass: true,
        responsive: {
            0:{
                items: 1
            },
            450: {
                items: 2
            },

            768: {
                items: 3
            },

            1100: {
                items: 4
            }
        }
    });

    $('.menu-item-meth').click(function() {
        event.preventDefault();
        if (!$(this).hasClass('active-h')) {
            $('.menu-item-meth').removeClass('active-h');
            $(this).addClass('active-h');
        }
    });

    $('.burger').click(function(){
        $('.burger__line').toggleClass('active-b');
        $('.b-menu').toggleClass('open');

    });


    $('.form-sing').click(function () {
        event.preventDefault();
    });
    $('.form-sing').magnificPopup({
        removalDelay: 250,
        mainClass: 'mfp-fade'
    });



    $('#registration-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 3,
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                minlength: "Имя должно состоять минимум из 3-х символов",
                required: "Это поле обязательно для заполнения",
            },
            email: {
                required: "Это поле обязательно для заполнения",
                email: "Ведите правильный Email адресс",
            }
        }
    });
    $('#authorization-form').validate({
        rules: {
            login: {
                required: true,
                minlength: 3,
            },
            password: {
                required: true,
                minlength: 4,
            }
        },
        messages: {
            login: {
                minlength: "Имя должно состоять минимум из 3-х символов",
                required: "Это поле обязательно для заполнения",
            },
            password: {
                required: "Это поле обязательно для заполнения",
                minlength: "Пароль должен состоять минимум из 4-x символов",
            }
        }
    });

});
