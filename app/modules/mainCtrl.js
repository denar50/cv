angular.module('esCv').controller('MainCtrl', ['$timeout', '$rootScope', '$translate', MainCtrl]);
function MainCtrl($timeout, $rootScope, $translate){
  var self = this;
  var currentHash = $('.menu-item.active a').attr('href');
  self.sliderUrls = ['assets/img/slider1.jpg', 'assets/img/slider2.jpg', 'assets/img/slider3.jpg'];
  $(document).ready(function(){
    $timeout(initDom, 0);
  });

  function doOnHashChange(){
    switch (currentHash) {
      case '#technical':
          $rootScope.$broadcast('resetEasyPieChartAnimation');
        break;
      default:

    }
  }

  function initDom(){
    $(document).foundation();
    initNavLinks();
    function initNavLinks(){
      $('.menu-item a[href^="#"]').each(function(){
        var hash = this.hash;
        var target = $(hash);
        $(this).on('click', function(e){
          $('html, body').stop().animate({
              'scrollTop': target.offset().top - 60
          }, 900, 'swing', function () {
              if(currentHash !== hash){
                currentHash = hash;
                doOnHashChange();
              }
          });
          return false;
        });
      });
    }
  }
  function initGoogleMaps(){
    var mapCanvas = $('#map-canvas')[0];
    var mapOptions = {
      center: new google.maps.LatLng(7.1140244, -73.1106442),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      scrollwheel: false
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
  }

  google.maps.event.addDomListener(window, 'load', initGoogleMaps);

  function TechnicalInfo(percentage, title, description){
    this.percentage = percentage;
    this.title = title;
    this.description = description;
  };

  function ExperienceInfo(start, end, title, subtitle, description){
    this.start = start;
    this.end = end;
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
  }
  self.technical = [];
  self.technical.push(new TechnicalInfo(95, 'Javascript', 'Vanilla, jQuery, AngularJS'));
  self.technical.push(new TechnicalInfo(70, 'PHP', 'Laravel Framework'));
  self.technical.push(new TechnicalInfo(70, 'Databases', 'MySQL, PostgreSQL, MongoDB'));
  self.technical.push(new TechnicalInfo(95, 'Web', 'HTML5, CSS3 (SCSS)'));
  self.technical.push(new TechnicalInfo(90, 'Version control', 'Git, Subversion'));
  self.technical.push(new TechnicalInfo(70, 'Java', 'Enterprise Edition: JSF, EJB, JPA (Hibernate)'));


  self.experience = [];
  self.experience.push(new ExperienceInfo('May 10',
  'Present',
  'Ulzards',
  'Senior UX Designer',
  'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quom placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui faorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.'));

  self.experience.push(new ExperienceInfo('May 10',
  'Present',
  'Ulzards',
  'Senior UX Designer',
  'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quom placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui faorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.'));

  self.experience.push(new ExperienceInfo('May 10',
  'Present',
  'Ulzards',
  'Senior UX Designer',
  'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quom placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui faorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.'));

}
