import $ from 'jquery';

$.fn.madCustomSelect = function () {

  return this.each(function () {

    const list = $(this).children('ul'),
      select = $(this).find('select'),
      title = $(this).find('.select-title');

    // select items to list items

    if ($(this).find('[data-filter]').length) {
      for (let i = 0, len = select.children('option').length; i < len; i++) {
        list.append('<li data-filter="' + select.children('option').eq(i).data('filter') + '">' + select.children('option').eq(i).text() + '</li>')
      }
    } else {
      for (let i = 0, len = select.children('option').length; i < len; i++) {
        list.append('<li>' + select.children('option').eq(i).text() + '</li>');
      }
    }
    select.hide();

    // open list

    title.on('click', function () {
      list.slideToggle(400);
      $(this).toggleClass('active');
    });

    // selected option

    list.on('click', 'li', function () {
      const val = $(this).text();
      title.text(val);
      list.slideUp(400);
      select.val(val);
      title.toggleClass('active');
      return false;
    });

  });

};

if ($('.custom-select').length) {
  $('.custom-select').madCustomSelect();
}
