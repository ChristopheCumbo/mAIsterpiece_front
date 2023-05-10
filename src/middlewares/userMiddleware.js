// axios
import axios from 'axios';
// actions
import { CHECK_LOGIN, actionSaveConnectedUser } from '../actions/user';

const userMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    // Authentification from the backend
    case CHECK_LOGIN: {
      const { inputLoginFormAuth, inputPasswordFormAuth } = store.getState().user;

      try {
        const result = await axios.post('http://localhost:3002/login', {
          inputLoginFormAuth,
          inputPasswordFormAuth,
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

    default:
  }

  next(action);
};

export default userMiddleware;
