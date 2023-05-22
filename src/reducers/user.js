// import pour la LoginPage
import {
  CLEAR_JWT,
  SAVE_CONNECTED_USER,
  UPDATE_LOGIN_FORM_AUTH,
  UPDATE_PASSWORD_AUTH,
  UPDATE_TEXTAREA_BIO,
} from '../actions/user';
// import pour la RegisterPage
import {
  UPDATE_LOGIN_FORM_REGISTER,
  UPDATE_EMAIL_FORM_REGISTER,
  UPDATE_PASSWORD_REGISTER,
  UPDATE_CONFIRM_PASSWORD_REGISTER,
}
  from '../actions/user';

const initialState = {
  // state input for connexion page
  inputLoginFormAuth: '',
  inputPasswordFormAuth: '',
  // state input for register page
  inputLoginFormRegister: '',
  inputEmailFormRegister: '',
  inputPasswordFormRegister: '',
  inputConfirmPasswordFormRegister: '',
  // state input for bio's textarea
  inputTextareaBio: 'Présentez-vous aux autres utilisateurs',
  // state others
  userId: '1234',
  pseudo: 'Martin Martin',
  avatar: '',
  logged: false,
  jwt: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // case concernant la LoginPage
    case UPDATE_LOGIN_FORM_AUTH:
      return {
        ...state, // on recopie tout ce qu'il y a dans le state
        inputLoginFormAuth: action.payload.newValue,
      };

    case UPDATE_PASSWORD_AUTH:
      return {
        ...state, // on recopie tout ce qu'il y a dans le state
        inputPasswordFormAuth: action.payload.newValue,
      };

    case SAVE_CONNECTED_USER:
      return {
        ...state,
        logged: true,
        pseudo: state.user.inputLoginFormAuth,
        jwt: action.payload.jwt,
        avatar: action.payload.avatar,
        inputLoginFormAuth: '',
        inputPasswordFormAuth: '',
      };

    // case concernant la RegisterPage
    case UPDATE_LOGIN_FORM_REGISTER:
      return {
        ...state, // on recopie tout ce qu'il y a dans le state
        inputLoginFormRegister: action.payload.newValue,
      };

    case UPDATE_EMAIL_FORM_REGISTER:
      return {
        ...state, // on recopie tout ce qu'il y a dans le state
        inputEmailFormRegister: action.payload.newValue,
      };

    case UPDATE_PASSWORD_REGISTER:
      return {
        ...state, // on recopie tout ce qu'il y a dans le state
        inputPasswordFormRegister: action.payload.newValue,
      };

    case UPDATE_CONFIRM_PASSWORD_REGISTER:
      return {
        ...state, // on recopie tout ce qu'il y a dans le state
        inputConfirmPasswordFormRegister: action.payload.newValue,
      };

    // case for bio on Member Page
    case UPDATE_TEXTAREA_BIO:
      return {
        ...state,
        inputTextareaBio: action.payload.newValue,
      };

    case 'CLEAR_JWT':
      return {
        ...state,
        jwt: '',
        logged: false,
      };

    default:
      return state;
  }
}

export default reducer;
