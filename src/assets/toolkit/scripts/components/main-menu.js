import $ from 'jquery';

(function () {

  const $menuToggle = $('#menu-toggler'),
    $mainMenu = $('#main-menu'),
    $win = $('body'),
    $subNavToggle = $('li.main-nav__item--has-subnav > a');

  $menuToggle.on('click', () => {
    $mainMenu.toggleClass('open');
    return false;
  });


  $win.on('click', (e) => {
    if ($mainMenu.has(e.target).length === 0 && !$mainMenu.is(e.target)) {
      $mainMenu.removeClass('open');
    }
  });

  $subNavToggle.on('click', function () {
    $(this).next('ul.sub-nav').slideToggle(400);
    return false;
  });
}());
