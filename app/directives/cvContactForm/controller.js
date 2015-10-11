angular.module('esCv').controller('CvContactForm', ['submitEmail', '$timeout', CvContactForm]);
function CvContactForm(submitEmail, $timeout)
{
  var self = this;
  var sending = 'Sending',
      iddle = 'Send message',
      sent = 'Sent';
  self.submit = submit;
  init();

  function init()
  {
    resetForm();
  }

  function resetForm(form)
  {
    self.name='';
    self.email='';
    self.message='';
    self.currentButtonLabel = iddle;
    self.messageSending = false;
    self.messageIsSent = false;
    if(form)
    {
      form.$setPristine()
    }
  }

  function submit(form)
  {
    if(form.$valid)
    {
      self.messageSending = true;
      self.currentButtonLabel = sending;
      submitEmail(self.name, self.email, self.message).then(function(d){
        resetForm(form);
        self.messageSending = false;
        self.messageIsSent = true;
        self.currentButtonLabel = sent;
        $timeout(function(){
          self.messageIsSent = false;
          self.currentButtonLabel = iddle;
        }, 2000);
      }).catch(function(d){
        self.messageSending = false;
        self.currentButtonLabel = iddle;
        alert('There has been an error in the server. Please try again later.');
      });
    }
  }


}
