import $ from 'jquery';

(function () {

  const search = $('.search'),
    inputField = $('.search__field');

  search.on('click', (e) => {
    e.preventDefault();
    inputField.focus();
    search.addClass('focused');
  });

  inputField.blur(() => {
    search.removeClass('focused');
  });
}());
