var Rooms = {
  names: {},
  populateRooms: function(data) {
    data.forEach((item) => {
      let roomname = MessageView.format(item).roomname ?? 'lobby';
      Rooms.names[roomname] = true;
    });
    RoomsView.populateSelectBox();
  },
  createRoom: function(roomname) {
    let room = MessageView.format({'roomname': roomname}).roomname;
    Rooms.names[room] = true;
    RoomsView.populateSelectBox();
  },
  currentRoom: {},
  filterRoom: function(roomname, data = Messages.results) {
    let roomMessages = [];
    data.forEach((message) => {
      message = MessageView.format(message);
      if(MessageView.format(message).roomname === roomname) {
        roomMessages.push(message);
      }
    });
    return roomMessages;
  }

};