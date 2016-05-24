$('img').click(function () {
  var $this = $(this);
  if ($this.hasClass('fadeOut')) {
    $this.removeClass('fadeOut');
  } else {
    $this.addClass('fadeOut');
  }
});