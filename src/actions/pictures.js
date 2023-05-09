// action type
export const LOAD_PICTURES = 'LOAD_PICTURES';
export const UPDATE_PICTURES_HOMEPAGE = 'UPDATE_PICTURES_HOMEPAGE';
export const LOAD_PICTURE_OF_THE_WEEK = 'LOAD_PICTURE_OF_THE_WEEK';
export const UPDATE_PICTURE_OF_THE_WEEK = 'UPDATE_PICTURE_OF_THE_WEEK';

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
 * @param { Array } datasPictureOfTheWeek from the picture
*/
export const actionUpdatePictureOfTheWeek = (datasPictureOfTheWeek) => ({
  type: UPDATE_PICTURE_OF_THE_WEEK,
  payload: datasPictureOfTheWeek,
});
