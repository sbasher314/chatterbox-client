var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },


  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    let submitButton = FormView.$form.find('.submit');
    let messageBox = FormView.$form.find('#message');
    let selectedRoom = $('#rooms').find('select').val();
    let message = {'text': messageBox.val(), 'username': App.username, 'room': selectedRoom};
    submitButton.attr('disabled', 'disabled');
    setTimeout(() => { submitButton.removeAttr('disabled'); }, 1000);
    //send message to server ---
    Parse.create(MessageView.format(message), () => {
      App.update();
      messageBox.val('');
    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};