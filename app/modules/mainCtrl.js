angular.module('esCv').controller('MainCtrl', [MainCtrl]);
function MainCtrl(){
  var self = this;
  self.sliderUrls = ['assets/img/slider1.jpg', 'assets/img/slider2.jpg', 'assets/img/slider3.jpg'];
  $(document).ready(initDom);

  function initDom(){
    $(document).foundation();

    $('.menu-item a[href^="#"]').each(function(){
      var hash = this.hash;
      var target = $(hash);
      var scrollToPosition = target.offset().top - 62;
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
