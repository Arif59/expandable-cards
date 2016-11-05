$(document).ready(function() {
  $(document).on('click', '.card', function() {
    $('.duarte-wrapper, .card-expanded-content').removeClass('slide');
    $('.right').removeClass('rotate');
    $('.card, .card-clip, .duarte-wrapper, .name-info, .card-expanded-content, .next, .social').toggleClass('expanded');
  });
  $(document).on('click', '.next', function() {
    $('.duarte-wrapper, .card-expanded-content').toggleClass('slide');
    $('.right').toggleClass('rotate');
  });
});
