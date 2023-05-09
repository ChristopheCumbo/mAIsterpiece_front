import { UPDATE_PICTURES_HOMEPAGE, UPDATE_PICTURE_OF_THE_WEEK } from '../actions/pictures';

const initialState = {
  listHomePage: [],
  isLoading: false,
  pictureOfTheWeek: {
    src: {
      medium: '',
    },
  },
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_PICTURES_HOMEPAGE:
      // after the first loading of homepage's pictures
      return {
        ...state,
        listHomePage: action.payload.listHomePage,
      };

    case UPDATE_PICTURE_OF_THE_WEEK:
      // after the first loading of homepage's pictures
      return {
        ...state,
        pictureOfTheWeek: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
