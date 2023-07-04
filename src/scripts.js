function setLightScheme() {
  $('meta[name="color-scheme"]').attr('content', 'light');
  $('body').removeClass('dark').addClass('light');
  $('#theme').text('🌙').toggleClass('theme-transition');
}

function setDarkScheme() {
  $('meta[name="color-scheme"]').attr('content', 'dark');
  $('body').removeClass('light').addClass('dark');
  $('#theme').text('☀️').toggleClass('theme-transition');
}

$('#theme').click(function () {
  const metaTag = $('meta[name="color-scheme"]');
  const currentScheme = metaTag.attr('content');

  if (currentScheme === 'light') {
    setDarkScheme();
  } else {
    setLightScheme();
  }
});


$(document).ready(function () {
  $('#add').click(function () {
    var inputText = $('#text_iten_list').val();

    if (inputText !== '') {
      let newListItem = '<div class="iten-list"><ul><li><span id="ok">✓</span><p>' + inputText + '</p><span id="remove">-</span></li></ul></div>';
      $('#list').append(newListItem);
      $('#text_iten_list').val('');
    }
  });

  $('#list').on('click', '#remove', function () {
    $(this).closest('.iten-list').remove();
  });

  $('#list').on('click', '#ok', function () {
    $(this).closest('li').toggleClass('iten_ok');
    $(this).closest('li').find('p').toggleClass('line_through');
  });
});