$(document).ready(function () {
  $('INPUT#btn_translate').on('click', function () {
    const lang = $('INPUT#language_code').val();
    $('INPUT#language_code').val('');

    const url = 'https://www.fourtonfish.com/hellosalut/hello/?lang=' + lang;

    $.get(url, (data) => {
      $('DIV#hello').text(data.hello);
    });
  });
});
