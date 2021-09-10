const initialState = {
  selectedRoom: null,
  user: null,
  sidebarOpen: false,
  rooms: null,
  socket: null,
  allUsers: null,
};

export const appReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, sidebarOpen: action.payload };

    case "SELECT_ROOM":
      return { ...state, selectedRoom: action.payload };

    case "STORE_USERS":
      return { ...state, allUsers: action.payload };

    case "SET_USER":
      return { ...state, user: action.payload };

    case "STORE_ROOMS":
      return { ...state, rooms: action.payload };

    case "INIT_SOCKET":
      return { ...state, socket: action.payload };

    case "PUSH_MESSAGE":
      const { roomId, message, sender } = action.payload;
      const room = state.rooms.find((room) => room._id === roomId);
      const newChatHistory = room.chatHistory.concat({ message, sender });

      room.chatHistory = newChatHistory;

      if (sender === state.user._id) {
        state.socket.emit("sendMessage", { message, sender });
      }

      return {
        ...state,
      };

    default:
      //   console.log('NOT RECOGNIZED ACTION!')
      return state;
  }
};
