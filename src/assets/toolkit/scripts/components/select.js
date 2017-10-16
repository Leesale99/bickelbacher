import $ from 'jquery';

$.fn.madCustomSelect = function() {

  return this.each(function() {

    const $this = $(this),
      $select = $this.find('select'),
      $title = $this.children('.select__title'),
      $list = $this.children('.select__list'),
      $win = $('body');

    // select items to list items
    for (let i = 0, len = $select.children('option').length; i < len; i++) {
      $list.append('<li data-value="' + $select.children('option').eq(i).val() + '">' + $select.children('option').eq(i).text() + '</li>');
    }

    // open list
    $title.on('click', function() {
      $list.toggle();
      $(this).toggleClass('active');
    });

    // selected option
    $list.on('click', 'li', function() {
      const val = $(this).data('value'),
        text = $(this).text();
      $title.text(text);
      $list.toggle();
      $select.val(val
        ? val
        : text);
      $title.toggleClass('active');
      return false;
    });

    // close list
    $win.on('click', (e) => {
      if ($this.has(e.target).length === 0 && !$this.is(e.target)) {
        $list.hide();
      }
      return false;
    });
  });

};

(function() {

  $(document).ready(() => {
    if ($('.select').length) {
      $('.select').madCustomSelect();
    }
  });

}());
