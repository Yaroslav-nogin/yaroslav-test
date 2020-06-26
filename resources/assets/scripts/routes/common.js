export default {
  init() {
    $('#show').on('click', function () {
      $('.first').addClass('open');
    })

    $('#hide').on('click', function () {
      $('.first').removeClass('open');
    })
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
