angular.module('esCv').factory('doOnHashChange', ['$rootScope', doOnHashChange]);
function doOnHashChange($rootScope)
{
  function doOnHashChangeFx(hash)
  {
    switch (hash) {
      case '#technical':
          $rootScope.$broadcast('resetEasyPieChartAnimation');
        break;
      default:

    }
  }
  return doOnHashChangeFx;

}
