$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        $('section').each(function () {
            var height = $(this).height();
            var offset = $(this).offset().top - 200;
            var top = $(window).scrollTop();
            var id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find('[href="#' + id + '"]').addClass('active');
            }
        });
    });

    $('a[href*="#"]').on('click', function (e) {
        var target = $(this).attr('href');
        if (target.length > 1 && $(target).length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(target).offset().top - 70
            }, 500);
        }
    });

    $('#contact-form').submit(function (event) {
        event.preventDefault();
        emailjs.init('user_TTDmetQLYgWCLzHTDgqxm');

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function () {
                document.getElementById('contact-form').reset();
                alert('Message sent successfully.');
            }, function () {
                alert('Something went wrong. Please try again or email me directly.');
            });
    });
});

var typed = new Typed('.typing-text', {
    strings: [
        'penetration testing',
        'secure backend systems',
        'AI security',
        'web application security',
        'vulnerability assessment'
    ],
    loop: true,
    typeSpeed: 45,
    backSpeed: 25,
    backDelay: 1800
});
