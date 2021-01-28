var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function(messages) {
    MessagesView.$chats[0].innerHTML = '';
    messages.forEach(message => MessagesView.renderMessage(message));
  },

  renderMessage: function(message) {
    message = MessageView.format(message);
    $(MessageView.render(message)).appendTo(this.$chats);
  }


};