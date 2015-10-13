angular.module('esCv').directive('cvContactForm', [cvContactForm]);
function cvContactForm()
{
  return {
    restrict: 'E',
    templateUrl: 'app/directives/cvContactForm/view.html',
    controller: 'CvContactForm as ctrl'
  };
}
