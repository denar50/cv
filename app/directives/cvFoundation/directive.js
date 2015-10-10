angular.module('esCv').directive('cvFoundation', ['$timeout', cvFoundation]);
function cvFoundation($timeout)
{
  return {
    restrict: 'A',
    link: function(scope, element, attrs)
    {
      $timeout(function(){
        $(document).foundation();
      }, 0);
    }
  }
}
