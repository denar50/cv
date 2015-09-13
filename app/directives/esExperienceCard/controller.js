angular.module('esCv').controller('EsExperienceCard', ['$scope', EsExperienceCard]);
function EsExperienceCard($scope){
    var self = this;
    self.title = $scope.title;
    self.startDate = $scope.startDate;
    self.endDate = $scope.endDate;
    self.subtitle = $scope.subtitle;
    self.description = $scope.description;
}
