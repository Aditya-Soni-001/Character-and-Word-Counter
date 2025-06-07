$(document).ready(function () {
  $('#text-input').on('input', function () {
    const text = $(this).val();
    $('#char-count').text(text.length);
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    $('#word-count').text(words);
  });
});