var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function(messages) {
    messages.forEach(message => {
      message.username ??= 'anonymous'
      message.text ??= '';
      let data = MessageView.render(message);
      this.$chats.append(data);
    });
  }

};