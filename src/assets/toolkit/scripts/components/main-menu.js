import $ from 'jquery';

(function () {

  const $win = $(window),
    $menuToggle = $('#menu-toggler'),
    $mainMenu = $('#main-menu'),
    $wrapper = $('body'),
    $subNavToggle = $('.main-nav__link > a');

  $win.on('load resize', () => {
    const winWith = $win.outerWidth();

    if (winWith < 992) {
      if (!$mainMenu.hasClass('mobile-menu')) {
        $mainMenu.addClass('mobile-menu');
      }
    } else {
      if ($mainMenu.hasClass('mobile-menu')) {
        $mainMenu.removeClass('mobile-menu');
      }
    }
  });

  $menuToggle.on('click', () => {
    $mainMenu.toggleClass('open');
    return false;
  });


  $wrapper.on('click', (e) => {
    if ($mainMenu.has(e.target).length === 0 && !$mainMenu.is(e.target)) {
      $mainMenu.removeClass('open');
    }
  });

  $subNavToggle.on('click', (e) => {
    if ($mainMenu.hasClass('mobile-menu')) {
      e.preventDefault();
      $(e.target).parent().next('ul.sub-nav')
      .slideToggle(400);
    }
  });
}());
