angular.module('esCv').directive('esPicSlider', ['$interval', esPicSlider]);
function esPicSlider($interval){
  return {
    restrict: 'E',
    controller: 'EsPicSliderCtrl as ctrl',
    templateUrl: 'app/directives/esPicSlider/view.html',
    scope: {
      urls: "=",
      bottomOffset: "="
    },
    link: function(scope, element, attrs, controller){
      var bottomOffset = scope.bottomOffset && Number(scope.bottomOffset) || 0;
      var liTemplate = '<li class="es-picture columns large-12"><div class="pic">&nbsp;</div></li>';
      var wrapper = element.find('.es-pic-slider-wrapper');
      setSliderHeight();
      var ulEl = $(wrapper).find('ul');
      var liEls = [];
      scope.urls.forEach(function(value, index){
        var li = $(liTemplate);
        li.find('div.pic').css('backgroundImage', 'url(\''+value+'\')');
        liEls.push(li);
      });
      var picChangeTimeout;

      function onTopSlide(){
        var currentIndex = 0;

        var liEl = liEls[currentIndex];
        liEl.css("zIndex", 2);
        ulEl.append(liEl);

        picChangeTimeout = $interval(function(){
          var currentLi = liEls[currentIndex];
          currentIndex = (currentIndex + 1) >= liEls.length ? 0 : ++currentIndex;
          var nextLi = liEls[currentIndex];
          nextLi.css("zIndex", 1);
          ulEl.append(nextLi);
          currentLi.fadeOut(8000, function(){
            nextLi.css("zIndex", 2);
            currentLi.css("zIndex", 1);
            currentLi.detach();
            currentLi.fadeIn(0);
          });

        }, 9000);

      }
      /*$(window).resize(function(){
        setSliderHeight();
      });*/
      onTopSlide();

      function setSliderHeight()
      {
        $(element).css('height', ($(window).height() - bottomOffset) + 'px');
      }

      scope.$on('destroy', function(){
        $interval.cancel(picChangeTimeout);
      });
    }
  };
}
