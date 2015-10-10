angular.module('esCv').directive('cvEasyPieChart', [cvEasyPieChart]);
function cvEasyPieChart(){
  return {
    restrict: 'E',
    scope: {
      percent: '=',
      title: '=',
      description: '='
    },
    controller: 'EasyPieChartCtrl as ctrl',
    templateUrl: 'app/directives/cvEasyPieChart/view.html'
  }
}
