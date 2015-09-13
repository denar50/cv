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
    function initNavLinks(){
      $('.menu-item a[href^="#"]').each(function(){
        var hash = this.hash;
        var target = $(hash);
        $(this).on('click', function(e){
          $('html, body').stop().animate({
              'scrollTop': target.offset().top - 60
          }, 900, 'swing', function () {
              //location.hash = hash;
          });
          return false;
        });
      });
    }
  }
}
