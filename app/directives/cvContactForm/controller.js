angular.module('esCv').controller('CvContactForm', [CvContactForm]);
function CvContactForm()
{
  var self = this;
  self.submit = submit;
  init();

  function init()
  {
    resetForm();
  }

  function resetForm()
  {
    self.name='';
    self.email='';
    self.message='';
  }

  function submit(form)
  {
    debugger;
  }


}
