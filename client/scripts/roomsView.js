var RoomsView = {

  $button: $('#rooms button'),
  $roomsList: $('#roomsList'),
  $select: $('#roomSelect'),

  initialize: function() {
    RoomsView.$select.on('focus', () => RoomsView.roomSelectHandler('show'));
    RoomsView.$select.on('blur', () => RoomsView.roomSelectHandler('hide'));
    RoomsView.$button.on('click mousedown mouseup', () => Rooms.createRoom(RoomsView.$select.val()));
  },

  render: function() {
  },

  renderRoom: function(roomname, data = Messages.results) {
    let messages = Rooms.filterRoom(roomname, data);
    MessagesView.render(messages);
  },

  roomSelectHandler: function(visibility) {
    visibility === 'show' ? RoomsView.$roomsList.fadeIn(50) : RoomsView.$roomsList.fadeOut(50);
    let roomname = RoomsView.$select.val();
    RoomsView.renderRoom(roomname);
  },

  populateSelectBox: function() {
    RoomsView.$roomsList.html('');
    for (roomname in Rooms.names) {
      let option = $(`<option>${roomname}</option>`);
      option.appendTo(RoomsView.$roomsList);
      option.on('click mousedown mouseup', (e) => {
        RoomsView.$select.val(e.target.innerHTML);
        RoomsView.$roomsList.hide();
      });
    }

    RoomsView.$roomsList.css({
      'width': RoomsView.$select[0].offsetWidth + 'px',
      'left': RoomsView.$select[0].offsetLeft + 'px',
      'top': RoomsView.$select[0].offsetTop + RoomsView.$select[0].offsetHeight + 'px',
    });
  }

};


