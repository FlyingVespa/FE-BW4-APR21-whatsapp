import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_STATE":
      return { ...state, isOpen: !state.isOpen };

    default:
      return state;
  }
};

export default mainReducer;
