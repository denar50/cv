angular.module('esCv').directive('cvContactMap', [cvContactMap]);
function cvContactMap()
{
  return {
    restrict: 'E',
    templateUrl: 'app/directives/cvContactMap/view.html',
    link: function(scope, element, attrs)
    {
      var mapCanvas = $(element).find('#map-canvas')[0];
      var mapOptions = {
        center: new google.maps.LatLng(7.1140244, -73.1106442),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        scrollwheel: false
      }
      var map = new google.maps.Map(mapCanvas, mapOptions);
    }
  }
}
