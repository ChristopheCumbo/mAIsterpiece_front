// import pour la LoginPage
import {
  SAVE_CONNECTED_USER,
  UPDATE_LOGIN_FORM_AUTH,
  UPDATE_PASSWORD_AUTH,
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
  // state input page de connexion
  inputLoginFormAuth: '',
  inputPasswordFormAuth: '',
  // state input page d'inscription'
  inputLoginFormRegister: '',
  inputEmailFormRegister: '',
  inputPasswordFormRegister: '',
  inputConfirmPasswordFormRegister: '',
  pseudo: '',
  avatar: '',
  logged: false,
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

    default:
      return state;
  }
}

export default reducer;
