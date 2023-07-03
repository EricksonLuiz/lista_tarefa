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

$('#theme').click(function() {
  const metaTag = $('meta[name="color-scheme"]');
  const currentScheme = metaTag.attr('content');

  if (currentScheme === 'light') {
    setDarkScheme();
  } else {
    setLightScheme();
  }
});
