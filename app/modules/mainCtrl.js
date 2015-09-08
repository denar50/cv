angular.module('esCv').controller('MainCtrl', MainCtrl);
function MainCtrl(){
  var self = this;
  self.sliderUrls = ['assets/img/slider1.jpg', 'assets/img/slider2.jpg', 'assets/img/slider3.jpg'];
  $(document).ready(function(){
    $(document).foundation();
  })
  
}
