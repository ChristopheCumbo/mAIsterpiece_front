import {
  UPDATE_PICTURES_HOMEPAGE,
  UPDATE_PICTURE_OF_THE_WEEK,
  UPDATE_SORTING_HOMEPAGE_PICTURES,
} from '../actions/pictures';

const initialState = {
  listHomePage: [],
  isLoading: false,
  pictureOfTheWeek: {
    src: {
      medium: '',
    },
  },
  sortHomePageId: 'optionMostRecents',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_PICTURES_HOMEPAGE:
      // after the first call to API to get the homepage's pictures
      return {
        ...state,
        listHomePage: action.payload.listHomePage,
      };

    case UPDATE_PICTURE_OF_THE_WEEK:
      // after the first call to API to get the homepage's picture of the week
      return {
        ...state,
        pictureOfTheWeek: action.payload,
      };

    case UPDATE_SORTING_HOMEPAGE_PICTURES:
      // called when changing the sort of the homepage's pictures is needed
      return {
        ...state,
        sortHomePageId: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
