angular.module('esCv').controller('CvContactForm', ['submitEmail', CvContactForm]);
function CvContactForm(submitEmail)
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
    if(form.$valid)
    {
      submitEmail(self.name, self.email, self.message).then(function(d){
        debugger;
      }).catch(function(d){
        debugger;
      });
    }
  }


}
