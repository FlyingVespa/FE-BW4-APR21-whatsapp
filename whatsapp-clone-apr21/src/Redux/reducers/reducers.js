import { initialState } from "../store";

export const rightbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_STATE":
      return { ...state, isOpen: !state.isOpen };

    default:
      return state;
  }
};
export const roomSelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ROOM_SELECT":
      return { ...state, isSelect: !state.isSelect };

    default:
      return state;
  }
};

export const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload,
      };

    default:
      //   console.log('NOT RECOGNIZED ACTION!')
      return state;
  }
};
