// import pour la LoginPage
import {
  CLEAR_JWT,
  SAVE_CONNECTED_USER,
  UPDATE_EMAIL_FORM_AUTH,
  UPDATE_MEMBER_PICTURES,
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
  inputEmailFormAuth: '',
  inputPasswordFormAuth: '',
  // state input for register page
  inputLoginFormRegister: '',
  inputEmailFormRegister: '',
  inputPasswordFormRegister: '',
  inputConfirmPasswordFormRegister: '',
  // state input for bio's textarea
  inputTextareaBio: 'Présentez-vous aux autres utilisateurs',
  // state others
  userId: '1',
  pseudo: 'Martin Martin',
  avatar: '',
  logged: true,
  jwt: '',
  // state for member page
  memberListOfPictures: [],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // case for LoginPage
    case UPDATE_EMAIL_FORM_AUTH:
      return {
        ...state,
        inputEmailFormAuth: action.payload.newValue,
      };

    case UPDATE_PASSWORD_AUTH:
      return {
        ...state, // on recopie tout ce qu'il y a dans le state
        inputPasswordFormAuth: action.payload.newValue,
      };

    case SAVE_CONNECTED_USER:
      console.log('reducer jwt', action.payload.jwt);
      console.log('reducer email', state.inputEmailFormAuth);
      return {
        ...state,
        logged: true,
        jwt: action.payload.jwt,
        // pseudo: state.user.inputLoginFormAuth,
        // avatar: action.payload.avatar,
        inputEmailFormAuth: '',
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

    case UPDATE_MEMBER_PICTURES:
      return {
        ...state,
        memberListOfPictures: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
