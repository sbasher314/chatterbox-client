var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function(messages) {
    messages.forEach(message => MessagesView.renderMessage(message));
  },

  renderMessage: function({text = '', username = 'anonymous'} = {}) {
    let data = MessageView.render({'text': text, 'username': username});
    this.$chats.append(data);
  }
};