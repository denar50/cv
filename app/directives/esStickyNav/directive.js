angular.module('esCv').directive('esStickyNav', [esStickyNav]);
function esStickyNav(){
	return {
		restrict: 'A',
		scope: {
			navElementClass: '=',
			stickClass: '=',
			navElementActiveClass: '='
		},
		link: function(scope, element, attrs, controller){
			var classes = {
				navElementClass: scope.navElementClass,
				stickClass: scope.stickClass || 'stuck-on-top'
			};

			var initialElementTop;

			var isStuck = false;

			var currentNavElement;

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
				updateNavBar();
				setElInitialTopPosition();
				addOnScrollEvent();
			}


			function getCurrentElementContent(){
				var currentElement = {};
				$(element).find('.' + classes.navElementClass).each(function(index, value){
					var anchorElement = $(value).find('a');
					var href = $(anchorElement).attr('href');
					var contentElement = $(href);
					var distanceFromTop = Math.abs(getDistanceFromTop(contentElement));
					if(!currentElement.navElement || distanceFromTop < currentElement.top){
						currentElement.navElement = value;
						currentElement.top = distanceFromTop;
					}
					
				});
				return currentElement;
			}

			function updateNavBar(){
				if(currentNavElement){
					$(currentNavElement).removeClass(classes.navElementActiveClass);
				}
				currentNavElement = getCurrentElementContent();
				$(currentNavElement).addClass(classes.navElementActiveClass);
			}

			function setElInitialTopPosition(){
				initialElementTop = $(element).offset().top;
			}

			function getDistanceFromTop(el){
				var elementOffset = $(el).offset().top,
				scrollTop = $(window).scrollTop();

				return (elementOffset - scrollTop);
			}

			function addOnScrollEvent(){
				$(document).on('scroll', function(){
					var distanceFromTop = getDistanceFromTop(element);
					var scrollTop = $(window).scrollTop();
					if(distanceFromTop <= 0 && scrollTop >= initialElementTop){
						stickToTop();
					}
					else
					{
							unstick();	
					}
					updateNavBar();
				});
			}
			
		}
	}
}