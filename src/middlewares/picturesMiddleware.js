import axios from 'axios';
// import { createClient } from 'pexels';
import {
  ACTION_SEARCH_BY_AUTHOR,
  ACTION_SEARCH_BY_PROMPT,
  ACTION_SEARCH_BY_TAG,
  ACTION_TOGGLE_LIKE_API,
  LOAD_PICTURES,
  LOAD_PICTURE_DATAS,
  LOAD_PICTURE_OF_THE_WEEK,
  SEND_NEW_PICTURE,
  SEND_REVIEWS,
  actionLoadSearchbyAuthor,
  actionLoadSearchbyPrompt,
  actionLoadSearchbyTag,
  actionReducerSendReviews,
  actionUpdatePictureDatas,
  actionUpdatePictureOfTheWeek,
  actionUpdatePicturesHomePage,
} from '../actions/pictures';

const picturesMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case LOAD_PICTURES: {
      // console.log('picturesMiddleware executé', action);
      try {
        const sortId = action.payload;
        // console.log(sortId);
        let adressAPI = 'http://alexandre-longeaud-server.eddi.cloud/api/pictures';
        switch (sortId) {
          case 'picturesMostRecents':
            adressAPI = 'http://alexandre-longeaud-server.eddi.cloud/api/pictures';
            break;
          case 'picturesMostReviewed':
            adressAPI = 'http://alexandre-longeaud-server.eddi.cloud/api/pictures/filtre/reviewed';
            break;
          case 'picturesMostClicked':
            adressAPI = 'http://alexandre-longeaud-server.eddi.cloud/api/pictures/filtre/clicked';
            break;
          case 'picturesMostLiked':
            adressAPI = 'http://alexandre-longeaud-server.eddi.cloud/api/pictures/filtre/liked';
            break;
          default:
            adressAPI = 'http://alexandre-longeaud-server.eddi.cloud/api/pictures';
        }
        // if (sortId === 'picturesMostRecents') {
        // adressAPI = 'https://api.pexels.com/v1/curated?page=9&per_page=30';
        // adressAPI = 'http://alexandre-longeaud-server.eddi.cloud/api/pictures';
        // }
        // const result = await axios.get(adressAPI);

        // request
        // const result = await axios.get('https://api.pexels.com/v1/curated?page=1&per_page=30', {
        const result = await axios.get(adressAPI);
        // console.log(result);
        // const result = await axios.get(adressAPI, {
        // headers: {
        //   Authorization: 'LHapVYEQzemuoKMIFpFcmZQtxzQm5RO0TLnvRpBshhMNJR1OJYpHVPGK',
        // },
        // });
        // console.log(result);
        // ici on a recu les resultats on devrait en profiter pour passer isLoading à false

        // on veut mettre dans le state le tableau result.data : on va demander au reducer en dispatchant une action
        // store.dispatch(actionUpdatePicturesHomePage(result.data.photos, sortId));
        store.dispatch(actionUpdatePicturesHomePage(result.data, sortId));
      }
      catch (e) {
        // error message
        console.log(e);
      }
      break;
    }

    case LOAD_PICTURE_OF_THE_WEEK: {
      try {
        // request
        // const result = await axios.get('https://api.pexels.com/v1/photos/12488389', {
        const result = await axios.get('http://alexandre-longeaud-server.eddi.cloud/api/pictures/week');
        // headers: {
        //   Authorization: 'LHapVYEQzemuoKMIFpFcmZQtxzQm5RO0TLnvRpBshhMNJR1OJYpHVPGK',
        // },
        // });
        // console.log('Image de la semaine : ', result);
        // store the datas of the picture of the week
        store.dispatch(actionUpdatePictureOfTheWeek(result.data));
      }
      catch (e) {
        // error message
        console.log(e);
      }
      break;
    }

    case LOAD_PICTURE_DATAS: {
      try {
        const { id } = action.payload;
        // request
        const result = await axios.get(`http://alexandre-longeaud-server.eddi.cloud/api/pictures/${id}`);
        // console.log(result);
        // store the datas of the picture
        store.dispatch(actionUpdatePictureDatas(result.data));
      }
      catch (e) {
        // error message
        console.log(e);
      }
      break;
    }

    case SEND_REVIEWS: {
      const { inputFormReviews } = store.getState().pictures;
      const { jwt } = store.getState().user;

      try {
        const { id } = action.payload;
        const result = await axios.post(
          `http://alexandre-longeaud-server.eddi.cloud/api/pictures/${id}/review`,
          {
            content: inputFormReviews,
          },
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          },
        );

        store.dispatch(actionReducerSendReviews());
      } catch (e) {
        console.log(e);
        // afficher un message d'erreur
      }

      break;
    }


    case SEND_NEW_PICTURE: {
      const { inputPrompt, inputTags } = store.getState().pictures;

      const formDataToJson = (formData) => {
        const jsonObject = {};
        formData.forEach((value, key) => {
          jsonObject[key] = value;
        });
        return JSON.stringify(jsonObject);
      };

      try {
        const formData = new FormData();
        formData.append('file', action.payload.newPictureFile);
        const jsonData = formDataToJson(formData);

        const result = await axios.post('http://localhost:3001', {
          jsonData,
          inputPrompt,
          inputTags,
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

    case ACTION_TOGGLE_LIKE_API: {
      const { jwt } = store.getState().user;
      // console.log('Middleware JWT : ', jwt);
      const { id } = action.payload;
      try {
        const result = await axios.post(`http://alexandre-longeaud-server.eddi.cloud/api/pictures/${id}/like`,
          {},
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          },
        );
        // console.log(result);
      }
      catch (e) {
        console.log(e);
        // afficher un message d'erreur
      }

      break;
    }

    case ACTION_SEARCH_BY_TAG: {
      const { searchValue } = action.payload;
      try {
        const result = await axios.post(
          `http://alexandre-longeaud-server.eddi.cloud/api/pictures/search/tag?search=${searchValue}`,
        );
        console.log(result);
        store.dispatch(actionLoadSearchbyTag(result.data));
      }
      catch (e) {
        console.log(e);
        // afficher un message d'erreur
      }

      break;
    }

    case ACTION_SEARCH_BY_AUTHOR: {
      const { searchValue } = action.payload;
      try {
        const result = await axios.post(
          `http://alexandre-longeaud-server.eddi.cloud/api/pictures/search/user?search=${searchValue}`,
        );
        console.log(result);
        store.dispatch(actionLoadSearchbyAuthor(result.data));
      }
      catch (e) {
        console.log(e);
        // afficher un message d'erreur
      }

      break;
    }

    case ACTION_SEARCH_BY_PROMPT: {
      const { searchValue } = action.payload;
      try {
        const result = await axios.post(
          `http://alexandre-longeaud-server.eddi.cloud/api/pictures/search/prompt?search=${searchValue}`,
        );
        console.log(result);
        store.dispatch(actionLoadSearchbyPrompt(result.data));
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

export default picturesMiddleware;
