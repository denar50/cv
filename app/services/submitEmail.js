angular.module('esCv').factory('submitEmail', ['$resource', function ($resource)
{
  var resource = $resource('/api/send-email');
  function submit(name, email, text)
  {
    return resource.save({name: name, email: email, text: text}).$promise;
  }
  return submit;
}]);
