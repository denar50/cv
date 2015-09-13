angular.module('esCv').directive('esEasyPieChart', [easyPieChart]);
function easyPieChart(){
  return {
    restrict: 'E',
    scope: {
      percent: '=',
      title: '=',
      description: '='
    },
    controller: 'EasyPieChartCtrl as ctrl',
    templateUrl: 'app/directives/easyPieChart/view.html'
  }
}
