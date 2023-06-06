// imports from redux
import { createStore, applyMiddleware, compose } from 'redux';

// import of all reducers combined by index.js in /reducers
import rootReducer from 'src/reducers/';

// All middlewares
import userMiddleware from '../middlewares/userMiddleware';
import picturesMiddleware from '../middlewares/picturesMiddleware';
// import filterMiddleware from '../middlewares/filterMiddleware';

// devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// all middlewares combined
const enhancers = composeEnhancers(
  applyMiddleware(
    // middlewares'list :
    picturesMiddleware,
    userMiddleware,
  ),
);

const store = createStore(rootReducer, enhancers);

export default store;
