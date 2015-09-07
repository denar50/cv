angular.module('esCv').controller('MainCtrl', MainCtrl);
function MainCtrl(){
  var self = this;
  self.sliderUrls = ['assets/img/slider1.jpg', 'assets/img/slider2.jpg', 'assets/img/slider3.jpg'];

  $(document).foundation({
		"magellan-expedition": {
		  active_class: 'active', // specify the class used for active sections
		  threshold: 500, // how many pixels until the magellan bar sticks, 0 = auto
		  destination_threshold: 20, // pixels from the top of destination for it to be considered active
		  throttle_delay: 50, // calculation throttling to increase framerate
		  fixed_top: 0, // top distance in pixels assigend to the fixed element on scroll
		  offset_by_height: true // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
		}
	});
}
