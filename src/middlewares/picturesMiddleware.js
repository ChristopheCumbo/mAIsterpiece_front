import axios from 'axios';
// import { createClient } from 'pexels';
import { LOAD_PICTURES, actionUpdatePicturesHomePage } from '../actions/pictures';

const picturesMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case LOAD_PICTURES: {
      // console.log('picturesMiddleware executé', action);
      // la requete
      const result = await axios.get('https://api.pexels.com/v1/curated?page=1&per_page=30', {
        headers: {
          Authorization: 'LHapVYEQzemuoKMIFpFcmZQtxzQm5RO0TLnvRpBshhMNJR1OJYpHVPGK',
        },
      });
      // console.log(result);
      // ici on a recu les resultats on devrait en profiter pour passer isLoading à false

      // on veut mettre dans le state le tableau result.data : on va demander au reducer en dispatchant une action
      store.dispatch(actionUpdatePicturesHomePage(result.data.photos));
      break;
    }

    default:
      next(action);
  }
};

export default picturesMiddleware;
