angular.module('esCv').directive('esStickyNav', ['$timeout', esStickyNav]);
function esStickyNav($timeout){
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
				stickClass: scope.stickClass || 'stuck-on-top',
				navElementActiveClass: scope.navElementActiveClass || 'active'
			};

			var isStuck = false;

			var currentNavElement;

			var elementHeight = element.height();

			//This ensures it will load after all other directives load
			var cancelTimeout = $timeout(function(){
				init();
			});

			function stickToTop(){
				element.addClass(classes.stickClass);
				element.css({
					position: 'fixed',
					top: 0
				});

				element.parent().css({
					paddingBottom: elementHeight + 'px'
				});
				isStuck = true;
			}

			function unstick(){
				element.removeClass(classes.stickClass);
				element.attr('style', '');
				element.parent().attr('style', '');
				isStuck = false;
			}

			function init(){
				updateNavBar();
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
				var activeSelector = '.' + classes.navElementClass + '.' + classes.navElementActiveClass;
				$(activeSelector).removeClass(classes.navElementActiveClass);
				currentNavElement = getCurrentElementContent().navElement;
				$(currentNavElement).addClass(classes.navElementActiveClass);
			}

			function getElInitialTopPosition(){
				var initialElementTop = $(element).parent().height()
				/*if($(element).css('position') === 'fixed'){
					 initialElementTop - elementHeight;
				}*/
				return initialElementTop;
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
					if(isStuck)
					{
						scrollTop < getElInitialTopPosition() && unstick();
					}
					else
					{
						distanceFromTop <= 0 && stickToTop();
					}
					updateNavBar();
				});
			}

			scope.$on('$destroy', function(){
				cancelTimeout();
				$(document).off();
				$(window).off();
			});

		}
	}
}
