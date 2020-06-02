  $(document).ready(function () {

    $('.second-button').on('click', function () {

      $('.animated-icon2').toggleClass('open');
    });

    $('.carousel_inner').slick({
        initialSlide: 2,
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
    });

  });

  $('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).fadeIn();
  });

  $('.dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).fadeOut();
  });