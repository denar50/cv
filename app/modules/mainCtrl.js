angular.module('esCv').controller('MainCtrl', ['$timeout', '$rootScope', '$translate', MainCtrl]);
function MainCtrl($timeout, $rootScope, $translate){
  var self = this;
  var currentHash = $('.menu-item.active a').attr('href');
  self.sliderUrls = ['assets/img/slider1.jpg', 'assets/img/slider2.jpg', 'assets/img/slider3.jpg'];

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

  self.experience.push(new ExperienceInfo('Mar. 2013',
  'Sept. 2013',
  'Nippon Computer Kaihatsu',
  'Intern student',
  'Chosen as intern student to live and work six months in Japan in an IT company doing tasks related to web development.'));

  self.experience.push(new ExperienceInfo('Sept. 2013',
  'Apr. 2014',
  'Creandosoft',
  'Java Developer',
  'Collaborated in the coding of the business logic, user interface and data layer of applications developed using the Java Enterprise Edition platform and Java Server Faces (with PrimeFaces, MyFaces and IceFaces as extensions)'));

  self.experience.push(new ExperienceInfo('May 2014',
  'May 2015',
  'Fastcloud',
  'Web Developer',
  'Collaborated in coding the frontend of webpages from any given design in HTML5 (HTML,CSS and Javascript). Using vanilla Javascript to write all the frontend and part of the backend logic (part Javascript and part Java).'));

  self.experience.push(new ExperienceInfo('May 2015',
  'Present',
  'Pensemos S.A.',
  'Frontend developer',
  'Currently collaborating in the coding of the frontend of web applications built using AngularJS, Foundation Sites and Jasmine for unit testing. '));

}
