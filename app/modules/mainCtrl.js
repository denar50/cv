angular.module('esCv').controller('MainCtrl', ['$timeout', '$rootScope', MainCtrl]);
function MainCtrl($timeout, $rootScope){
  var self = this;
  var currentHash = $('.menu-item.active a').attr('href');
  self.sliderUrls = ['assets/img/slider1.jpg', 'assets/img/slider2.jpg', 'assets/img/slider3.jpg'];
  $(document).ready(function(){
    $timeout(initDom, 0);
  });

  function doOnHashChange(){
    switch (currentHash) {
      case '#technical':
          $rootScope.$broadcast('resetEasyPieChartAnimation');
        break;
      default:

    }
  }

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
              if(currentHash !== hash){
                currentHash = hash;
                doOnHashChange();
              }
          });
          return false;
        });
      });
    }
  }
}
