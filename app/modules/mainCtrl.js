angular.module('esCv').controller('MainCtrl', ['$timeout', MainCtrl]);
function MainCtrl($timeout){
  var self = this;
  self.sliderUrls = ['assets/img/slider1.jpg', 'assets/img/slider2.jpg', 'assets/img/slider3.jpg'];
  $(document).ready(function(){
    $timeout(initDom, 0);
  });

  function initDom(){
    $(document).foundation();
    initNavLinks();
    $(window).resize(initNavLinks);
    function initNavLinks(){
      $('.menu-item a[href^="#"]').each(function(){
        var hash = this.hash;
        var target = $(hash);
        var scrollToPosition = target.offset().top - 60;
        $(this).off('click');
        $(this).on('click', function(e){
          $('html, body').stop().animate({
              'scrollTop': scrollToPosition
          }, 900, 'swing', function () {
              location.hash = hash;
          });
          return false;
        });
      });
    }
  }
}
