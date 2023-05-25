// import pour la LoginPage
import {
  CLEAR_JWT,
  CLEAR_REGISTER_FIELDS,
  SAVE_CONNECTED_USER,
  SAVE_INFOS_CONNECTED_USER,
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
  // inputs for connexion page
  inputEmailFormAuth: '',
  inputPasswordFormAuth: '',
  // inputs for register page
  inputLoginFormRegister: '',
  inputEmailFormRegister: '',
  inputPasswordFormRegister: '',
  inputConfirmPasswordFormRegister: '',
  // first connexion after registered
  firstConnection: false,
  // input for bio's textarea
  inputTextareaBio: 'Présentez-vous aux autres utilisateurs',
  // input for url's avatar
  inputAvatar: '',
  // others
  connectedUser: [],
  userId: '1',
  pseudo: 'Martin Martin',
  avatar: '',
  logged: false,
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
      // console.log('reducer jwt', action.payload.jwt);
      // console.log('reducer email', state.inputEmailFormAuth);
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

    case CLEAR_JWT:
      return {
        ...state,
        jwt: '',
        logged: false,
        firstConnection: false,
      };

    case UPDATE_MEMBER_PICTURES:
      return {
        ...state,
        memberListOfPictures: action.payload,
      };

    case CLEAR_REGISTER_FIELDS:
      return {
        ...state,
        inputLoginFormRegister: '',
        inputEmailFormRegister: '',
        inputPasswordFormRegister: '',
        inputConfirmPasswordFormRegister: '',
        firstConnection: true,
      };

    case SAVE_INFOS_CONNECTED_USER:
      return {
        ...state,
        connectedUser: action.payload,
        inputAvatar: action.payload.avatar,
        inputTextareaBio: action.payload.bio,
        userId: action.payload.id,
      };

    default:
      return state;
  }
}

export default reducer;
