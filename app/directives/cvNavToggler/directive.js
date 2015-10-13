angular.module('esCv').directive('cvNavToggler', [cvNavToggler]);
function cvNavToggler()
{
  return {
    restrict: 'A',
    link: function(scope, element, attr)
    {
      $(element).find('.toggle-topbar.menu-icon a').on('click', function(){
        var offsetTop = $(element).offset().top;
        if(!$('#nav-bar').hasClass('expanded') && offsetTop > 0)
        {
          $('html body').stop().animate({
              'scrollTop': offsetTop
          }, 500, 'swing');
        }
      });
    }
  }
}
