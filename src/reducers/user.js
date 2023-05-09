// import pour la LoginPage
import { UPDATE_LOGIN_FORM_AUTH, UPDATE_PASSWORD_AUTH } from '../actions/user';
// import pour la RegisterPage

const initialState = {
  inputLoginFormAuth: '',
  inputPasswordFormAuth: '',
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
      // case concernant la RegisterPage

    default:
      return state;
  }
}

export default reducer;
