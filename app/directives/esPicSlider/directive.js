angular.module('esCv').directive('esPicSlider', ['$timeout', esPicSlider]);
function esPicSlider($timeout){
  return {
    restrict: 'E',
    controller: 'EsPicSliderCtrl as ctrl',
    templateUrl: 'app/directives/esPicSlider/view.html',
    scope: {
      urls: "="
    },
    link: function(scope, element, attrs, controller){
      var liTemplate = "<li class='es-picture'><img src='#src#'/></li>";
      var wrapper = element.find('.es-wrapper');
      var width = scope.width || $(window).width();
      var height = scope.height || $(window).height();
      $(wrapper).css('width', width + 'px');
      $(wrapper).css('height', height + 'px');
      var ulEl = $(wrapper).find('ul');
      var liArray = [];
      var currentPic = 0;
      scope.urls.forEach(function(value, index){
        liArray.push($(liTemplate.replace('#src#', value)));
      });
      function changePic(){
        currentPic = currentPic >= liArray.length ? 0 : currentPic;
        ulEl.children().each(function(index, child){
          $(child).detach();
        });
        ulEl.append(liArray[currentPic]);
        currentPic++;
      }
      changePic();
      var picChangeTimeout = $timeout(changePic, 1000);
      scope.$on('destroy', function(){
        $timeout.cancel(picChangeTimeout);
      });
    }
  };
}
