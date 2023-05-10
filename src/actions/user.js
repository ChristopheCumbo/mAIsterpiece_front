// Action type Login Page
export const UPDATE_LOGIN_FORM_AUTH = 'UPDATE_LOGIN_FORM_AUTH';
export const UPDATE_PASSWORD_AUTH = 'UPDATE_LOGIN_PASSWORD_AUTH';
// Action type Register Page
export const UPDATE_LOGIN_FORM_REGISTER = 'UPDATE_LOGIN_FORM_REGISTER';
export const UPDATE_EMAIL_FORM_REGISTER = 'UPDATE_EMAIL_FORM_REGISTER';
export const UPDATE_PASSWORD_REGISTER = 'UPDATE_PASSWORD_REGISTER';
export const UPDATE_CONFIRM_PASSWORD_REGISTER = 'UPDATE_CONFIRM_PASSWORD_REGISTER';

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
