angular.module('esCv').controller('EasyPieChartCtrl', ['$scope', function ($scope) {
    var self = this;
    self.options = {
        animate:{
            duration:2000,
            enabled:true
        },
        size: 152,
        barColor:'#FF675F',
        trackColor: '#E1E1E3',
        scaleColor:false,
        lineWidth:15,
        lineCap:'round',
        easing:'easeOutBounce'
    };
    debugger;
    self.percent = $scope.percent;
}]);
