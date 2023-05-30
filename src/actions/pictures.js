// action type
export const LOAD_PICTURES = 'LOAD_PICTURES';
export const UPDATE_PICTURES_HOMEPAGE = 'UPDATE_PICTURES_HOMEPAGE';
export const LOAD_PICTURE_OF_THE_WEEK = 'LOAD_PICTURE_OF_THE_WEEK';
export const UPDATE_PICTURE_OF_THE_WEEK = 'UPDATE_PICTURE_OF_THE_WEEK';
export const UPDATE_SORTING_HOMEPAGE_PICTURES = 'UPDATE_SORTING_HOMEPAGE_PICTURES';
export const LOAD_PICTURES_FILTERED = 'LOAD_PICTURES_FILTERED';
export const SEND_REVIEWS = 'SEND_REVIEWS';
export const REDUCER_SEND_REVIEWS = 'REDUCER_SEND_REVIEWS';
export const SEND_NEW_PICTURE = 'SEND_NEW_PICTURE';
export const LOAD_PICTURE_DATAS = 'LOAD_PICTURE_DATAS';
export const UPDATE_PICTURE_DATAS = 'UPDATE_PICTURE_DATAS';
export const ACTION_TOGGLE_LIKE_API = 'ACTION_TOGGLE_LIKE_API';
export const UPDATE_NB_LIKE = 'UPDATE_NB_LIKE';
export const CLEAR_FORM_NEW_PICTURE = 'CLEAR_FORM_NEW_PICTURE';
export const ACTION_CLEAR_HOMEPAGE = 'ACTION_CLEAR_HOMEPAGE';
// for member page
// export const LOAD_MEMBER_PICTURES = 'LOAD_MEMBER_PICTURES';
// export const UPDATE_MEMBER_PICTURES = 'UPDATE_MEMBER_PICTURES';
export const ACTION_DELETE_PICTURE = 'ACTION_DELETE_PICTURE';
export const ACTION_REFRESH_MEMBER_PAGE = 'ACTION_REFRESH_MEMBER_PAGE';

// for searchBar
export const ACTION_SEARCH_BY_TAG = 'ACTION_SEARCH_BY_TAG';
export const ACTION_SEARCH_BY_AUTHOR = 'ACTION_SEARCH_BY_AUTHOR';
export const ACTION_SEARCH_BY_PROMPT = 'ACTION_SEARCH_BY_PROMPT';
export const ACTION_LOAD_SEARCH_BY_TAG = 'ACTION_LOAD_SEARCH_BY_TAG';
export const ACTION_LOAD_SEARCH_BY_AUTHOR = 'ACTION_LOAD_SEARCH_BY_AUTHOR';
export const ACTION_LOAD_SEARCH_BY_PROMPT = 'ACTION_LOAD_SEARCH_BY_PROMPT';

// for controlled fields
export const UPDATE_INPUT_ADD_PROMPT = 'UPDATE_INPUT_ADD_PROMPT';
export const UPDATE_INPUT_ADD_TAGS = 'UPDATE_INPUT_ADD_TAGS';
export const UPDATE_INPUT_SEARCH_BAR = 'UPDATE_INPUT_SEARCH_BAR';
export const UPDATE_FORM_ADD_REVIEWS = 'UPDATE_FORM_ADD_REVIEWS';

// action creator
/**
 * First loading of images from API
*/
export const actionLoadPictures = (sortId) => ({
  type: LOAD_PICTURES,
  payload: sortId,
});

/**
 * ********************************
*/
// export const actionLoadPicturesFiltered = (id) => ({
//   type: LOAD_PICTURES_FILTERED,
//   payload: id,
// });

/**
 * Updating the homepage's pictures
 * @param { Array } listHomePage list of pictures
*/
export const actionUpdatePicturesHomePage = (listHomePage, sortId) => ({
  type: UPDATE_PICTURES_HOMEPAGE,
  payload: { listHomePage, sortId },
});

/**
 * First loading of the picture of the week
*/
export const actionLoadPictureOfTheWeek = () => ({
  type: LOAD_PICTURE_OF_THE_WEEK,
});

/**
 * Updating the homepage's picture of the week
 * @param { Object } datasPictureOfTheWeek from the picture
*/
export const actionUpdatePictureOfTheWeek = (datasPictureOfTheWeek) => ({
  type: UPDATE_PICTURE_OF_THE_WEEK,
  payload: datasPictureOfTheWeek,
});

/**
 * Updating the homepage's pictures sorting
 * @param { String } sortId choosen id from the available sorts (see data.js)
*/
export const actionUpdateSortingHomepagePictures = (sortId) => ({
  type: UPDATE_SORTING_HOMEPAGE_PICTURES,
  payload: sortId,
});

/**
 * action creator qui renvoie l'action UPDATE_INPUT_SEARCH_BAR
 * @return {Object} action
 */
export const actionUpdateSearchBar = (newValue) => ({
  type: UPDATE_INPUT_SEARCH_BAR,
  payload: {
    newValue,
  },
});

export const actionUpdateFormAddReviews = (newValue) => ({
  type: UPDATE_FORM_ADD_REVIEWS,
  payload: {
    newValue,
  },
});

export const actionSendReviews = (id) => ({
  type: SEND_REVIEWS,
  payload: {
    id,
  },
});

export const actionReducerSendReviews = () => ({
  type: REDUCER_SEND_REVIEWS,
});

// Actions creators for controlled fields of AddPicture modal
export const actionUpdateInputAddPrompt = (newValue) => ({
  type: UPDATE_INPUT_ADD_PROMPT,
  payload: {
    newValue,
  },
});
export const actionUpdateInputAddTags = (newValue) => ({
  type: UPDATE_INPUT_ADD_TAGS,
  payload: {
    newValue,
  },
});

/**
 * action creator for submitting the AddPicture form
 * @return {Object} action
 */
export const actionSubmitNewPicture = (newPictureFile, idAI) => ({
  type: SEND_NEW_PICTURE,
  payload: {
    newPictureFile,
    idAI,
  },
});

/**
 * action creator for reset the fields of the new picture's form
 * @return {Object} action
 */
export const actionClearFormNewPicture = () => ({
  type: CLEAR_FORM_NEW_PICTURE,
});

/**
 * action creator for retrieving via API one picture's datas
 * @return {Object} action
 */
export const actionLoadPictureDatas = (id) => ({
  type: LOAD_PICTURE_DATAS,
  payload: {
    id,
  },
});

/**
 * action creator for updating one picture's datas
 * @return {Object} action
 */
export const actionUpdatePictureDatas = (picture) => ({
  type: UPDATE_PICTURE_DATAS,
  payload: {
    picture,
  },
});

/**
 * action creator for toggle the like of a picture in database
 * @return {Object} action
 */
export const actionToggleLikeAPI = (id) => ({
  type: ACTION_TOGGLE_LIKE_API,
  payload: {
    id,
  },
});


// SEARCHBAR
/**
 * action creator search by tag
 * @return {Object} action
 */
export const actionSearchbyTag = (searchValue) => ({
  type: ACTION_SEARCH_BY_TAG,
  payload: {
    searchValue,
  },
});

/**
 * action creator search by author
 * @return {Object} action
 */
export const actionSearchbyAuthor = (searchValue) => ({
  type: ACTION_SEARCH_BY_AUTHOR,
  payload: {
    searchValue,
  },
});

/**
 * action creator search by prompt
 * @return {Object} action
 */
export const actionSearchbyPrompt = (searchValue) => ({
  type: ACTION_SEARCH_BY_PROMPT,
  payload: {
    searchValue,
  },
});

/**
 * action creator load search by tag
 * @return {Object} action
 */
export const actionLoadSearchbyTag = (searchData) => ({
  type: ACTION_LOAD_SEARCH_BY_TAG,
  payload: {
    searchData,
  },
});

/**
 * action creator load search by author
 * @return {Object} action
 */
export const actionLoadSearchbyAuthor = (searchData) => ({
  type: ACTION_LOAD_SEARCH_BY_AUTHOR,
  payload: {
    searchData,
  },
});

/**
 * action creator load search by prompt
 * @return {Object} action
 */
export const actionLoadSearchbyPrompt = (searchData) => ({
  type: ACTION_LOAD_SEARCH_BY_PROMPT,
  payload: {
    searchData,
  },
});

// MEMBER PAGE

/**
 * action creator for delete picture in database
 * @return {Object} action
 */
export const actionDeletePicture = (pictureId, memberId) => ({
  type: ACTION_DELETE_PICTURE,
  payload: {
    pictureId,
    memberId,
  },
});

/**
 * action creator for refresh the member Page
 * @return {Object} action
 */
// export const actionRefreshMemberPage = () => ({
//   type: ACTION_REFRESH_MEMBER_PAGE,
// });

// OTHERS

/**
 * action creator for reset the homepage
 * @return {Object} action
 */
export const actionClearHomePage = () => ({
  type: ACTION_CLEAR_HOMEPAGE,
});
