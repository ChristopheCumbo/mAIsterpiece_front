import { UPDATE_PICTURES_HOMEPAGE } from "../actions/pictures";

const initialState = {
  listHomePage: [],
  isLoading: false,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_PICTURES_HOMEPAGE:
      // after the first loading of homepage's pictures
      return {
        ...state,
        listHomePage: action.payload.listHomePage,
      };

    default:
      return state;
  }
}

export default reducer;
