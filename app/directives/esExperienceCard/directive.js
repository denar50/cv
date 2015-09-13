angular.module('esCv').directive('esExperienceCard', [esExperienceCard]);
function esExperienceCard(){
  return {
    restrict: 'E',
    scope: {
      startDate: '=',
      endDate: '=',
      title: '=',
      subtitle: '=',
      description: '='
    },
    controller: 'EsExperienceCard as ctrl',
    templateUrl: 'app/directives/esExperienceCard/view.html'
  }
}
