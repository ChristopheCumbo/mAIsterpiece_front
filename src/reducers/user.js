// import pour la LoginPage
import {
  CLEAR_JWT,
  CLEAR_REGISTER_FIELDS,
  SAVE_CONNECTED_USER,
  SAVE_INFOS_CONNECTED_USER,
  SAVE_NEW_AVATAR_AND_PROFILE,
  SAVE_SETTINGS,
  UPDATE_CONFIRM_PASSWORD_FORM_SETTINGS,
  UPDATE_EMAIL_FORM_AUTH,
  UPDATE_EMAIL_FORM_SETTINGS,
  UPDATE_MEMBER_PICTURES,
  UPDATE_PASSWORD_AUTH,
  UPDATE_PASSWORD_FORM_SETTINGS,
  UPDATE_PSEUDO_FORM_SETTINGS,
  UPDATE_TEXTAREA_BIO,
  UPDATE_URL_AVATAR,
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
  // controlled fields for updating profile
  // bio's textarea
  inputTextareaBio: 'Présentez-vous aux autres utilisateurs',
  // url's avatar
  inputAvatar: '',
  // controlled fields for updating settings
  inputPseudoFormSettings: '',
  inputEmailFormSettings: '',
  inputPasswordFormSettings: '',
  inputConfirmPasswordFormSettings: '',
  // others
  connectedUser: {
    avatar: '',
    bio: '',
  },
  userId: '',
  pseudo: '',
  avatar: '',
  admin: false,
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
        // jwt: action.payload.jwt,
        // pseudo: state.user.inputLoginFormAuth,
        // avatar: action.payload.avatar,
        inputEmailFormAuth: '',
        inputPasswordFormAuth: '',
      };

    // Cases for the RegisterPage
    case UPDATE_LOGIN_FORM_REGISTER:
      return {
        ...state,
        inputLoginFormRegister: action.payload.newValue,
      };

    case UPDATE_EMAIL_FORM_REGISTER:
      return {
        ...state,
        inputEmailFormRegister: action.payload.newValue,
      };

    case UPDATE_PASSWORD_REGISTER:
      return {
        ...state,
        inputPasswordFormRegister: action.payload.newValue,
      };

    case UPDATE_CONFIRM_PASSWORD_REGISTER:
      return {
        ...state,
        inputConfirmPasswordFormRegister: action.payload.newValue,
      };

    // case for bio on Member Page
    case UPDATE_TEXTAREA_BIO:
      return {
        ...state,
        inputTextareaBio: action.payload.newValue,
      };

    case UPDATE_URL_AVATAR:
      return {
        ...state,
        inputAvatar: action.payload.newUrlAvatar,
      };

    case SAVE_NEW_AVATAR_AND_PROFILE:
      return {
        ...state,
        // connectedUser[avatar]: state.inputAvatar,
        connectedUser: { ...state.connectedUser, avatar: state.inputAvatar, bio: state.inputTextareaBio },
      };

    case CLEAR_JWT:
      return {
        ...state,
        // jwt: '',
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
        pseudo: action.payload.pseudo,
        avatar: action.payload.avatar,
        inputAvatar: action.payload.avatar,
        inputTextareaBio: action.payload.bio,
        inputPseudoFormSettings: action.payload.pseudo,
        inputEmailFormSettings: action.payload.email,
        userId: action.payload.id,
        admin: (action.payload.roles[0] === 'ROLE_ADMIN'),
        logged: true,
      };

    // Form for updating the settings
    case UPDATE_PSEUDO_FORM_SETTINGS:
      return {
        ...state,
        inputPseudoFormSettings: action.payload.newValue,
      };

    case UPDATE_EMAIL_FORM_SETTINGS:
      return {
        ...state,
        inputEmailFormSettings: action.payload.newValue,
      };

    case UPDATE_PASSWORD_FORM_SETTINGS:
      return {
        ...state,
        inputPasswordFormSettings: action.payload.newValue,
      };

    case UPDATE_CONFIRM_PASSWORD_FORM_SETTINGS:
      return {
        ...state,
        inputConfirmPasswordFormSettings: action.payload.newValue,
      };

    case SAVE_SETTINGS:
      return {
        ...state,
        pseudo: state.inputPseudoFormSettings,
      };

    default:
      return state;
  }
}

export default reducer;
