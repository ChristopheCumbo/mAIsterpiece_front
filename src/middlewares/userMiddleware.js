// axios
import axios from 'axios';
// actions
import { CHECK_LOGIN, LOAD_MEMBER_PICTURES, REGISTER_NEW_USER, SEND_PROFILE, actionSaveConnectedUser, actionUpdateMemberPictures } from '../actions/user';

const userMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    // Authentification from the backend
    case CHECK_LOGIN: {
      const { inputEmailFormAuth, inputPasswordFormAuth } = store.getState().user;

      try {
        const result = await axios.post('http://alexandre-longeaud-server.eddi.cloud/api/login_check', {
          username: inputEmailFormAuth,
          password: inputPasswordFormAuth,
        });
        console.log('token du middleware :', result.data.token);
        // on veut enregirstrer dans le state le fait qu'on soit logué
        // on va demander au reducer : dispatch d'une action
        // store.dispatch(actionSaveConnectedUser(result.data.avatar, result.data.token));
        store.dispatch(actionSaveConnectedUser(result.data.token));
      }
      catch (e) {
        console.log(e);
        // afficher un message d'erreur
      }

      break;
    }

    case REGISTER_NEW_USER: {
      const {
        inputLoginFormRegister,
        inputEmailFormRegister,
        inputPasswordFormRegister,
        inputConfirmPasswordFormRegister,
      } = store.getState().user;

      try {
        const result = await axios.post('http://localhost:3002/login', {
          inputLoginFormRegister,
          inputEmailFormRegister,
          inputPasswordFormRegister,
          inputConfirmPasswordFormRegister,
        });
        console.log(result.data.token);
        // on veut enregirstrer dans le state le fait qu'on soit logué
        // on va demander au reducer : dispatch d'une action
        store.dispatch(actionSaveConnectedUser(result.data.avatar, result.data.token));
      }
      catch (e) {
        console.log(e);
        // afficher un message d'erreur
      }

      break;
    }

    case SEND_PROFILE: {
      const { inputTextareaBio } = store.getState().user;

      const formDataToJson = (formData) => {
        const jsonObject = {};
        formData.forEach((value, key) => {
          jsonObject[key] = value;
        });
        return JSON.stringify(jsonObject);
      };

      try {
        const formData = new FormData();
        formData.append('files', action.payload.newAvatarFile);
        const jsonData = formDataToJson(formData);

        const result = await axios.post('http://localhost:3001', {
          jsonData,
          inputTextareaBio,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        // store.dispatch(actionSaveConnectedUser(result.data.avatar, result.data.token));
      }
      catch (e) {
        console.log(e);
        // afficher un message d'erreur
      }

      break;
    }

    case LOAD_MEMBER_PICTURES: {
      try {
        const id = action.payload;
        // console.log('MiddleWare user id = ', id);
        // request
        const result = await axios.get(`http://alexandre-longeaud-server.eddi.cloud/api/users/${id}/account`);
        // console.log('Middleware User, Load Member pictures : ', result);
        // store the datas of the picture
        store.dispatch(actionUpdateMemberPictures(result.data));
      }
      catch (e) {
        // error message
        console.log(e);
      }
      break;
    }

    default:
  }

  next(action);
};

export default userMiddleware;
