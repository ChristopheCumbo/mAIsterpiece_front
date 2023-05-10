import {
  UPDATE_INPUT_SEARCH_BAR,
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
  sortHomePageId: 'picturesMostRecents',
  inputSearchBar: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_PICTURES_HOMEPAGE:
      // after the first call to API to get the homepage's pictures
      return {
        ...state,
        listHomePage: action.payload.listHomePage,
        sortHomePageId: action.payload.sortId,
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

    case UPDATE_INPUT_SEARCH_BAR:
      return {
        ...state, // on recopie tout ce qu'il y a dans le state
        inputSearchBar: action.payload.newValue,
      };

    default:
      return state;
  }
}

export default reducer;
