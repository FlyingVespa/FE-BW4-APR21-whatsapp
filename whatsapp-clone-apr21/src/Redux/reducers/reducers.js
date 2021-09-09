const initialState = {
  selectedRoom: null,
  user: null,
  sidebarOpen: false,
  rooms: null,
};

export const appReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, sidebarOpen: action.payload };

    case "CHANGE_ROOM":
      return { ...state, selectedRoom: action.payload };

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "STORE_ROOMS":
      return {
        ...state,
        rooms: action.payload,
      };

    default:
      //   console.log('NOT RECOGNIZED ACTION!')
      return state;
  }
};
