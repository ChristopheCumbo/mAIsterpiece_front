// Action type Login Page
export const UPDATE_LOGIN_FORM_AUTH = 'UPDATE_LOGIN_FORM_AUTH';
export const UPDATE_PASSWORD_AUTH = 'UPDATE_LOGIN_PASSWORD_AUTH';

// Action type Register Page

// - action creators

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
