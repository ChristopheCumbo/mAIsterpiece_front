import { createStore, applyMiddleware, compose } from 'redux';

// on importe la combinaison de tous nos reducers depuis le fichier index.js du dossier reducers
import rootReducer from 'src/reducers/';
import userMiddleware from '../middlewares/userMiddleware';
import picturesMiddleware from '../middlewares/picturesMiddleware';
import filterMiddleware from '../middlewares/filterMiddleware';

/*
pour donner à notre store à la fois les devtools :
- yarn add redux-devtools-extension puis import (cf mode d'emploi redux.md)
- pas d'ajout de package et directement  "window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose"
https://github.com/reduxjs/redux-devtools/tree/main/extension#installation
*/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    // ici la liste de nos middlewares
    // filterMiddleware,
    picturesMiddleware,
    userMiddleware,
  ),
);

const store = createStore(rootReducer, enhancers);

export default store;
