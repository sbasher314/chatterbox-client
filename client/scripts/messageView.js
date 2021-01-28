var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%- username %></div>
        <div><%- text %></div>
      </div>
    `),

  format: function({text = '', username = 'anonymous', roomname = 'lobby'} = {}) {
    return {'text': text.trim(), 'username': username, 'roomname': roomname};
  }
};