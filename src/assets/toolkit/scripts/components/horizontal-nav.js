import $ from 'jquery';

(function() {

  $(document).ready(() => {

    const $nav = $('.horizontal-nav'),
      $navItem = $('.horizontal-nav__item'),
      $navPanel = $('.horizontal-nav__panel');

    $navItem.each(function(index) {
      let $this = $(this),
        $id = $($this).data('panel').toString();

      $this.on('click', (e) => {
        e.preventDefault();

        if (!$this.hasClass('active')) {
          $navItem.removeClass('active');
          $this.addClass('active');
        }

        $navPanel.removeClass('active');
        $($id).addClass('active');
      });
    });

  });

}());
