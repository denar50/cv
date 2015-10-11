angular.module('esCv').factory('submitEmail', ['$resource', function ($resource)
{
  var resource = $resource('/api/send-email');
  function submit(from, subject, text)
  {
    debugger;
    return resource.save({from: from, subject: subject, text: text}).$promise;
  }
  return submit;
}]);
