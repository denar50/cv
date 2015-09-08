angular.module('esCv').directive('esStickyNav', [esStickyNav]);
function esStickyNav(){
	return {
		restrict: 'A',
		scope: {
			navElementsClass: '=',
			stickClass: '='
		},
		link: function(scope, element, attrs, controller){
			var classes = {
				navElementsClass: scope.navElementsClass,
				stickClass: scope.stickClass || 'stuck-on-top'
			};

			var initialElementTop;

			var isStuck = false;

			init();

			function stickToTop(){
				if(!element.hasClass(classes.stickClass))
				{
					element.addClass(classes.stickClass);
					element.css({
						position: 'fixed',
						top: 0
					});
				}
			}

			function unstick(){
				element.removeClass(classes.stickClass);
				element.attr('style', '');
			}

			function init(){
				setElInitialTopPosition();
				addOnScrollEvent();
			}

			function setElInitialTopPosition(){
				initialElementTop = $(element).offset().top;
			}

			function getDistanceFromTop(){
				var elementOffset = $(element).offset().top,
				scrollTop = $(window).scrollTop();

				return (elementOffset - scrollTop);
			}

			function addOnScrollEvent(){
				$(document).on('scroll', function(){
					var distanceFromTop = getDistanceFromTop();
					var scrollTop = $(window).scrollTop();
					if(distanceFromTop <= 0 && scrollTop >= initialElementTop){
						stickToTop();
					}
					else
					{
							unstick();	
					}
				});
			}
			
		}
	}
}