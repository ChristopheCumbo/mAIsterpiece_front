// axios
import axios from 'axios';
// actions
import {
  CHECK_LOGIN,
  LOAD_MEMBER_PICTURES,
  LOAD_USER_INFOS,
  REGISTER_NEW_USER,
  SEND_PROFILE,
  SUBMIT_NEW_SETTINGS,
  actionClearRegisterFields,
  actionSaveConnectedUser,
  actionSaveInfosConnectedUser,
  actionSaveSettings,
  actionUpdateMemberPictures,
} from '../actions/user';
import { actionClearHomePage } from '../actions/pictures';
import { actionAddOneMessage } from '../actions/messages';
import { URL_SERVER_BACK } from '../utils/url';

const userMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    // Authentification from the backend
    case CHECK_LOGIN: {
      const { inputEmailFormAuth, inputPasswordFormAuth } = store.getState().user;

      try {
        const result = await axios.post(`${URL_SERVER_BACK}/api/login_check`, {
          username: inputEmailFormAuth,
          password: inputPasswordFormAuth,
        });
        console.log('userMiddleware\'s Token :', result.data.token);
        // store.dispatch(actionSaveConnectedUser(result.data.avatar, result.data.token));
        store.dispatch(actionSaveConnectedUser(result.data.token));
        // We need to retrieve personnal informations of that connected user
        const { token } = result.data;
        sessionStorage.setItem('jwtMaisterpiece', token);
        // console.log('essai :', token);
        // const result2 = await axios.get(
        //   `${URL_SERVER_BACK}/api/users/info`,
        //   {
        //     headers: {
        //       Authorization: `Bearer ${token}`,
        //     },
        //   },
        // );
        // console.log(result2);
        // store.dispatch(actionSaveInfosConnectedUser(result2.data));
        store.dispatch(actionClearHomePage());
        store.dispatch(actionAddOneMessage('success', 'Connexion réussie. Bienvenue !'));
      }
      catch (e) {
        // error message
        console.log(e);
        store.dispatch(actionAddOneMessage('error', `Erreur de type ${e.message}. Veuillez réessayer un peu plus tard.`));
      }

      break;
    }

    // Loading user's informations identified by JWT in localstorage
    case LOAD_USER_INFOS: {
      const jwt = sessionStorage.getItem('jwtMaisterpiece');
      try {
        const result = await axios.get(
          `${URL_SERVER_BACK}/api/users/info`,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          },
        );
        // console.log(result);
        store.dispatch(actionSaveInfosConnectedUser(result.data));
      }
      catch (e) {
        // error message
        console.log(e);
        store.dispatch(actionAddOneMessage('error', `Erreur de type ${e.message}. Veuillez réessayer un peu plus tard.`));
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
        const result = await axios.post(`${URL_SERVER_BACK}/api/users/sign-up`, {
          pseudo: inputLoginFormRegister,
          email: inputEmailFormRegister,
          password: inputPasswordFormRegister,
        });
        // console.log(result);
        store.dispatch(actionClearRegisterFields());
        store.dispatch(actionAddOneMessage('success', 'Inscription réussie, vous pouvez vous connecter.'));
      }
      catch (e) {
        // error message
        console.log(e);
        store.dispatch(actionAddOneMessage('error', `Erreur de type ${e.message}. Veuillez réessayer un peu plus tard.`));
      }

      break;
    }

    case SEND_PROFILE: {
      const { inputTextareaBio, inputAvatar } = store.getState().user;
      const { id } = store.getState().user.connectedUser;
      // const { jwt } = store.getState().user;
      const jwt = sessionStorage.getItem('jwtMaisterpiece');

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

        const result = await axios.put(`${URL_SERVER_BACK}/api/users/${id}/account/bio`, {
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
        store.dispatch(actionAddOneMessage('success', 'Profil mis à jour.'));
      }
      catch (e) {
        // error message
        console.log(e);
        store.dispatch(actionAddOneMessage('error', `Erreur de type ${e.message}. Veuillez réessayer un peu plus tard.`));
      }

      break;
    }

    case SUBMIT_NEW_SETTINGS: {
      const { inputPseudoFormSettings, inputEmailFormSettings, inputPasswordFormSettings } = store.getState().user;
      const { id } = store.getState().user.connectedUser;
      // const { jwt } = store.getState().user;
      const jwt = sessionStorage.getItem('jwtMaisterpiece');

      try {
        const result = await axios.put(`${URL_SERVER_BACK}/api/users/${id}/account/profil`, {
          email: inputEmailFormSettings,
          password: inputPasswordFormSettings,
          pseudo: inputPseudoFormSettings,
        }, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        console.log('Résultat new settings :', result);
        store.dispatch(actionSaveSettings());
        store.dispatch(actionAddOneMessage('success', 'Paramètres de connexion mis à jour.'));
      }
      catch (e) {
        // error message
        console.log(e);
        store.dispatch(actionAddOneMessage('error', `Erreur de type ${e.message}. Veuillez réessayer un peu plus tard.`));
      }

      break;
    }

    case LOAD_MEMBER_PICTURES: {
      try {
        const id = action.payload;
        // console.log('MiddleWare user id = ', id);
        // request
        const result = await axios.get(`${URL_SERVER_BACK}/api/users/${id}/account`);
        // console.log('Middleware User, Load Member pictures : ', result);
        // store the datas of the picture
        store.dispatch(actionUpdateMemberPictures(result.data));
      }
      catch (e) {
        // error message
        console.log(e);
        store.dispatch(actionAddOneMessage('error', `Erreur de type ${e.message}. Veuillez réessayer un peu plus tard.`));
      }
      break;
    }

    default:
  }

  next(action);
};

export default userMiddleware;
