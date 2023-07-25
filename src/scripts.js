function adicionarItem() {
  let inputText = $('#text_iten_list').val().toUpperCase();

  if (inputText !== '') {
    let newListItem = '<div class="iten-list" style="display: none;"><ul><li><span id="ok">✓</span><p>' + inputText + '</p><span id="remove">-</span></li></ul></div>';
    $('#list').append(newListItem);
    $('#text_iten_list').val('');
    $('.iten-list:last-child').fadeIn(500);

    localStorage.setItem('itens', $('#list').html());
  }
}

function setLightScheme() {
  $('meta[name="color-scheme"]').attr('content', 'light');
  $('body').removeClass('dark').addClass('light');
  $('#theme').text('🌙').toggleClass('theme-transition');

  localStorage.setItem('theme', 'light');
}

function setDarkScheme() {
  $('meta[name="color-scheme"]').attr('content', 'dark');
  $('body').removeClass('light').addClass('dark');
  $('#theme').text('☀️').toggleClass('theme-transition');

  // Salvar o tema escolhido no localStorage
  localStorage.setItem('theme', 'dark');
}

$('#text_iten_list').keypress(function(event) {
  if (event.which === 13 || event.which === 9) {
    adicionarItem();
  }
});

if (localStorage.getItem('itens')) {
  $('#list').html(localStorage.getItem('itens'));
}

if (localStorage.getItem('theme') === 'light') {
  setLightScheme();
} else {
  setDarkScheme();
}

$('#add').click(adicionarItem);

$('#theme').click(function () {
  const metaTag = $('meta[name="color-scheme"]');
  const currentScheme = metaTag.attr('content');

  if (currentScheme === 'light') {
    setDarkScheme();
  } else {
    setLightScheme();
  }
});

$('#list').on('click', '#remove', function () {
  $(this).closest('.iten-list').fadeOut(200, function () {
    $(this).remove();
    localStorage.setItem('itens', $('#list').html());
  });
});

$('#list').on('click', '#ok', function () {
  $(this).closest('li').toggleClass('iten_ok');
  localStorage.setItem('itens', $('#list').html());
});