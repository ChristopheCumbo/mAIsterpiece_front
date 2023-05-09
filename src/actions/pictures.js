// action type
export const LOAD_PICTURES = 'LOAD_PICTURES';
export const UPDATE_PICTURES_HOMEPAGE = 'UPDATE_PICTURES_HOMEPAGE';

// action creator
/**
 * First loading of images from API
*/
export const actionLoadPictures = () => ({
  type: LOAD_PICTURES,
});

/**
 * Updating the homepage's pictures
 * @param { Array } list list of pictures
*/
export const actionUpdatePicturesHomePage = (listHomePage) => ({
  type: UPDATE_PICTURES_HOMEPAGE,
  payload: { listHomePage },
});
