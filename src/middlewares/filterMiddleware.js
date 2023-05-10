// TEST MIDDLEWARE

import { LOAD_PICTURES_FILTERED } from "../actions/pictures";

const filterMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case LOAD_PICTURES_FILTERED: {
      try {
        console.log(action.payload);
      }
      catch (e) {
        console.log(e);
        // afficher un message d'erreur
      }

      break;
    }

    default:
      next(action);
  }
};

export default filterMiddleware;
