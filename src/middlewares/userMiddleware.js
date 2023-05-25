// axios
import axios from 'axios';
// actions
import {
  CHECK_LOGIN,
  LOAD_MEMBER_PICTURES,
  REGISTER_NEW_USER,
  SEND_PROFILE,
  SUBMIT_NEW_SETTINGS,
  actionClearRegisterFields,
  actionSaveConnectedUser,
  actionSaveInfosConnectedUser,
  actionUpdateMemberPictures,
} from '../actions/user';

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
        console.log('userMiddleware\'s Token :', result.data.token);
        // store.dispatch(actionSaveConnectedUser(result.data.avatar, result.data.token));
        store.dispatch(actionSaveConnectedUser(result.data.token));
        // We need to retrieve personnal informations of that connected user
        const { token } = result.data;
        // console.log('essai :', token);
        const result2 = await axios.get(
          'http://alexandre-longeaud-server.eddi.cloud/api/users/info',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        console.log(result2);
        store.dispatch(actionSaveInfosConnectedUser(result2.data));
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
      } = store.getState().user;

      try {
        const result = await axios.post('http://alexandre-longeaud-server.eddi.cloud/api/users/sign-up', {
          pseudo: inputLoginFormRegister,
          email: inputEmailFormRegister,
          password: inputPasswordFormRegister,
        });
        // console.log(result);
        store.dispatch(actionClearRegisterFields());
      }
      catch (e) {
        console.log(e);
        // error message
      }

      break;
    }

    case SEND_PROFILE: {
      const { inputTextareaBio, inputAvatar } = store.getState().user;
      const { id } = store.getState().user.connectedUser;
      const { jwt } = store.getState().user;

      // const formDataToJson = (formData) => {
      //   const jsonObject = {};
      //   formData.forEach((value, key) => {
      //     jsonObject[key] = value;
      //   });
      //   return JSON.stringify(jsonObject);
      // };

      try {
        // const formData = new FormData();
        // formData.append('files', action.payload.newAvatarFile);
        // const jsonData = formDataToJson(formData);

        const result = await axios.put(`http://alexandre-longeaud-server.eddi.cloud/api/users/${id}/account/bio`, {
          bio: inputTextareaBio,
          avatar: inputAvatar,
        }, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        //   jsonData,
        //   inputTextareaBio,
        // }, {
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // });
        console.log(result);
        // store.dispatch(actionSaveBioAndAvatar());
      }
      catch (e) {
        console.log(e);
        // afficher un message d'erreur
      }

      break;
    }

    case SUBMIT_NEW_SETTINGS: {
      const { inputPseudoFormSettings, inputEmailFormSettings, inputPasswordFormSettings } = store.getState().user;
      const { id } = store.getState().user.connectedUser;
      const { jwt } = store.getState().user;

      try {
        const result = await axios.put(`http://alexandre-longeaud-server.eddi.cloud/api/users/${id}/account/bio`, {
          pseudo: inputPseudoFormSettings,
          email: inputEmailFormSettings,
          password: inputPasswordFormSettings,
        }, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        console.log(result);
        // store.dispatch(actionSaveSettings());
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
