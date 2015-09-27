angular.module('esCv', ['easypiechart', 'pascalprecht.translate', 'ngCookies']);

angular.module('esCv').config(['$locationProvider', '$translateProvider', '$windowProvider',
function($locationProvider, $translateProvider, $windowProvider){
  $locationProvider.html5Mode(true);

  // Adding translations from .json files locates at app/i18n/
  $translateProvider.useStaticFilesLoader({
    prefix: 'app/i18n/locale-',
    suffix: '.json'
  });

  //defines the prefered language
  $translateProvider.determinePreferredLanguage(function()
  {
    var preferredLangKey = 'en';

    var language = $windowProvider.$get().navigator.languages ?
      $windowProvider.$get().navigator.languages[0] :
      $windowProvider.$get().navigator.language;

      if(language.substr(0, 2) == 'es') {

        preferredLangKey = 'es';
      }

      return preferredLangKey;
  });

  $translateProvider.fallbackLanguage('en');

  // Tell the module to store the language in the cookies
  $translateProvider.useCookieStorage();

  // secure strategy sanitization for translate
  $translateProvider.useSanitizeValueStrategy('escapeParameters');
}]);
