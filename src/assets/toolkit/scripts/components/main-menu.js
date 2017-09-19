import $ from 'jquery';

(function() {

  const $menuToggle = $('#menu-toggler'),
    $mainMenu = $('#main-menu'),
    $win = $('body');

  $menuToggle.on('click', () => {
    $mainMenu.toggleClass('open');
    return false;
  });


  $win.on('click', (e) => {
    if ($mainMenu.has(e.target).length === 0 && !$mainMenu.is(e.target)) {
      $mainMenu.removeClass('open');
    }
  });

  // $("li.sub-menu > a").on('click', function() {
  //   $(this).next('ul').slideToggle(400);
  //   return false;
  // });
}());
