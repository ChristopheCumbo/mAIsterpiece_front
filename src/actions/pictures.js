// action type
export const LOAD_PICTURES = 'LOAD_PICTURES';
export const UPDATE_PICTURES_HOMEPAGE = 'UPDATE_PICTURES_HOMEPAGE';
export const LOAD_PICTURE_OF_THE_WEEK = 'LOAD_PICTURE_OF_THE_WEEK';
export const UPDATE_PICTURE_OF_THE_WEEK = 'UPDATE_PICTURE_OF_THE_WEEK';
export const UPDATE_SORTING_HOMEPAGE_PICTURES = 'UPDATE_SORTING_HOMEPAGE_PICTURES';
export const UPDATE_INPUT_SEARCH_BAR = 'UPDATE_INPUT_SEARCH_BAR';

// action creator
/**
 * First loading of images from API
*/
export const actionLoadPictures = () => ({
  type: LOAD_PICTURES,
});

/**
 * Updating the homepage's pictures
 * @param { Array } listHomePage list of pictures
*/
export const actionUpdatePicturesHomePage = (listHomePage) => ({
  type: UPDATE_PICTURES_HOMEPAGE,
  payload: { listHomePage },
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
