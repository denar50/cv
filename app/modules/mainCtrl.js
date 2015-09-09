angular.module('esCv').controller('MainCtrl', MainCtrl);
function MainCtrl(){
  var self = this;
  self.sliderUrls = ['assets/img/slider1.jpg', 'assets/img/slider2.jpg', 'assets/img/slider3.jpg'];
  $(document).ready(function(){
    $(document).foundation();

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 62
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
  })
  
}
