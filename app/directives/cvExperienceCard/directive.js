angular.module('esCv').directive('cvExperienceCard', [cvExperienceCard]);
function cvExperienceCard(){
  return {
    restrict: 'E',
    scope: {
      startDate: '=',
      endDate: '=',
      title: '=',
      subtitle: '=',
      description: '='
    },
    controller: 'CvExperienceCard as ctrl',
    templateUrl: 'app/directives/cvExperienceCard/view.html'
  }
}
