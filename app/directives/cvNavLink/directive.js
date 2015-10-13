angular.module('esCv').directive('cvNavLink', ['doOnHashChange', cvNavLink]);
function cvNavLink(doOnHashChange)
{
  return {
    restrict: 'A',
    link: function(scope, element, attrs)
    {
      var hash = $(element).attr("href");
      var target = $(hash);
      $(element).on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('html body').stop().animate({
            'scrollTop': target.offset().top - 60
        }, 900, 'swing', function (){
          debugger;
              doOnHashChange(hash);
        });
        return false;
      });
    }
  };
}
