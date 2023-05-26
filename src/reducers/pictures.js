import {
  ACTION_LOAD_SEARCH_BY_AUTHOR,
  ACTION_LOAD_SEARCH_BY_PROMPT,
  ACTION_LOAD_SEARCH_BY_TAG,
  REDUCER_SEND_REVIEWS,
  UPDATE_FORM_ADD_REVIEWS,
  UPDATE_INPUT_ADD_PROMPT,
  UPDATE_INPUT_ADD_TAGS,
  UPDATE_INPUT_SEARCH_BAR,
  UPDATE_NB_LIKE,
  UPDATE_PICTURES_HOMEPAGE,
  UPDATE_PICTURE_DATAS,
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
  inputFormReviews: '',
  // for controlled inputs when uploading a picture
  inputPrompt: '',
  inputTags: '',
  pictureZoom: null,
  // pictureZoom: {
  //   isLoaded: false,
  // },
  listResultPage: [],
  like: false,
  nbLike: '',
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
        ...state,
        inputSearchBar: action.payload.newValue,
      };

    case UPDATE_FORM_ADD_REVIEWS:
      return {
        ...state,
        inputFormReviews: action.payload.newValue,
      };

    case REDUCER_SEND_REVIEWS:
      // after the first call to API to get the homepage's pictures
      return {
        ...state,
        inputFormReviews: '',
        pictureZoom: { ...state.pictureZoom, nombre_review: state.pictureZoom.nombre_review + 1 },
      };

    case UPDATE_INPUT_ADD_PROMPT:
      // controlled field for adding the prompt when adding a new picture
      return {
        ...state,
        inputPrompt: action.payload.newValue,
      };

    case UPDATE_INPUT_ADD_TAGS:
      // controlled field for adding tags when adding a new picture
      return {
        ...state,
        inputTags: action.payload.newValue,
      };

    case UPDATE_PICTURE_DATAS:
      return {
        ...state,
        pictureZoom: { ...action.payload.picture },
        inputFormReviews: '',
      };

    case ACTION_LOAD_SEARCH_BY_TAG:
      return {
        ...state,
        listResultPage: action.payload.searchData,
        inputSearchBar: '',
      };

    case ACTION_LOAD_SEARCH_BY_AUTHOR:
      return {
        ...state,
        listResultPage: action.payload.searchData,
        inputSearchBar: '',
      };

    case ACTION_LOAD_SEARCH_BY_PROMPT:
      return {
        ...state,
        listResultPage: action.payload.searchData,
        inputSearchBar: '',
      };

    default:
      return state;
  }
}

export default reducer;
