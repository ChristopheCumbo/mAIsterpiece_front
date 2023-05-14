// Action type Login Page
export const UPDATE_LOGIN_FORM_AUTH = 'UPDATE_LOGIN_FORM_AUTH';
export const UPDATE_PASSWORD_AUTH = 'UPDATE_LOGIN_PASSWORD_AUTH';
export const CHECK_LOGIN = 'CHECK_LOGIN';
export const SAVE_CONNECTED_USER = 'SAVE_CONNECTED_USER';
// Action type Register Page
export const UPDATE_LOGIN_FORM_REGISTER = 'UPDATE_LOGIN_FORM_REGISTER';
export const UPDATE_EMAIL_FORM_REGISTER = 'UPDATE_EMAIL_FORM_REGISTER';
export const UPDATE_PASSWORD_REGISTER = 'UPDATE_PASSWORD_REGISTER';
export const UPDATE_CONFIRM_PASSWORD_REGISTER = 'UPDATE_CONFIRM_PASSWORD_REGISTER';
export const REGISTER_NEW_USER = 'REGISTER_NEW_USER';

// - action creators LoginPage

/**
 * action creator qui renvoie l'action UPDATE_LOGIN_FORM_AUTH
 * @return {Object} action
 */
export const actionUpdateLoginFormAuth = (newValue) => ({
  type: UPDATE_LOGIN_FORM_AUTH,
  payload: {
    newValue,
  },
});

/**
 * action creator qui renvoie l'action UPDATE_PASSWORD_AUTH
 * @return {Object} action
 */
export const actionUpdatePasswordFormAuth = (newValue) => ({
  type: UPDATE_PASSWORD_AUTH,
  payload: {
    newValue,
  },
});

/**
 * action pour demander au authMiddleware de faire la requete au back pour savoir si le user est bien authentifié
 * @return {Action} l'action à dispatcher
 */
export const actionCheckLogin = () => ({
  type: CHECK_LOGIN,
});

/**
 * action pour demander au reducer de mettre isLogged à true et de sauvegarder l'avatar
 * @param {String} avatar and token jwt
 * @return {Action} l'action à dispatcher
 */
export const actionSaveConnectedUser = (avatar, jwt) => ({
  type: SAVE_CONNECTED_USER,
  payload: {
    avatar,
    jwt,
  },
});

// - action creators RegisterPage

/**
 * action creator qui renvoie l'action UPDATE_LOGIN_FORM_REGISTER
 * @return {Object} action
 */
export const actionUpdateLoginFormRegister = (newValue) => ({
  type: UPDATE_LOGIN_FORM_REGISTER,
  payload: {
    newValue,
  },
});

/**
 * action creator qui renvoie l'action UPDATE_EMAIL_FORM_REGISTER
 * @return {Object} action
 */
export const actionUpdateEmailFormRegister = (newValue) => ({
  type: UPDATE_EMAIL_FORM_REGISTER,
  payload: {
    newValue,
  },
});
/**
 * action creator qui renvoie l'action UPDATE_PASSWORD_REGISTER
 * @return {Object} action
 */
export const actionUpdatePasswordFormRegister = (newValue) => ({
  type: UPDATE_PASSWORD_REGISTER,
  payload: {
    newValue,
  },
});

/**
 * action creator qui renvoie l'action UPDATE_CONFIRM_PASSWORD_REGISTER
 * @return {Object} action
 */
export const actionUpdateConfirmPasswordFormRegister = (newValue) => ({
  type: UPDATE_CONFIRM_PASSWORD_REGISTER,
  payload: {
    newValue,
  },
});

/**
 * Registers the new user on the backend
 * @return {Action}
 */
export const actionRegister = () => ({
  type: REGISTER_NEW_USER,
});
