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

  function TechnicalInfo(percentage, title, description){
    this.percentage = percentage;
    this.title = title;
    this.description = description;
  };
  self.technical = [];
  self.technical.push(new TechnicalInfo(90, 'PHOTOSHOP', 'Donec accumsan ligula vitae mag na curabitur id'));
  self.technical.push(new TechnicalInfo(49, 'PHOTOSHOP', 'Donec accumsan ligula vitae mag na curabitur id'));
  self.technical.push(new TechnicalInfo(70, 'PHOTOSHOP', 'Donec accumsan ligula vitae mag na curabitur id'));
  self.technical.push(new TechnicalInfo(79, 'PHOTOSHOP', 'Donec accumsan ligula vitae mag na curabitur id'));
  self.technical.push(new TechnicalInfo(80, 'PHOTOSHOP', 'Donec accumsan ligula vitae mag na curabitur id'));
  self.technical.push(new TechnicalInfo(90, 'PHOTOSHOP', 'Donec accumsan ligula vitae mag na curabitur id'));
}
