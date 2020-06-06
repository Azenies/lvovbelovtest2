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

  $(function(){
    // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
    $('.dropdown').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).fadeIn();
    });

    // ADD SLIDEUP ANIMATION TO DROPDOWN //
    $('.dropdown').on('hide.bs.dropdown', function(e){
        e.preventDefault();
        $(this).find('.dropdown-menu').first().stop(true, true).fadeOut(400, function(){
            //On Complete, we reset all active dropdown classes and attributes
            //This fixes the visual bug associated with the open class being removed too fast
            $('.dropdown').removeClass('show');
            $('.dropdown-menu').removeClass('show');
            $('.dropdown').find('.dropdown-toggle').attr('aria-expanded','false');
        });
    });
});

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });