// import reactLogo from './react-logo.svg';
// import of react-router-dom
import { Routes, Route } from 'react-router-dom';

// imports from react and react-redux
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// components
import LoginPage from '../LoginPage';
import HomePage from '../HomePage';
import RegisterPage from '../RegisterPage/RegisterPage';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import PageContact from '../PageContact';
import Error404 from '../Error404';

// style
import './styles.css';

// actions
import { actionLoadPictureOfTheWeek, actionLoadPictures } from '../../actions/pictures';


// Main fonction for the application
function App() {
  const dispatch = useDispatch();

  useEffect(
    () => {
      // Update of the picture of the week
      dispatch(actionLoadPictureOfTheWeek());
      // loading by default : most recents pictures
      dispatch(actionLoadPictures('picturesMostRecents'));
    },
    [], // first render
  );

  return (
    <div className="app">
      {/* <img src={reactLogo} alt="react logo" />
      <h1>Composant : App</h1> */}
      <AppHeader />
      <Routes>
        <Route path="/" element=<HomePage /> />
        <Route path="/login" element=<LoginPage /> />
        <Route path="/register" element=<RegisterPage /> />
        <Route path="/contact" element=<PageContact /> />
        <Route path="/mentionlegales" element=<p>la page de mention legales</p> />
        <Route path="/user" element=<p>la page d'un user</p> />
        <Route path="/addpicture" element=<p>la page d'ajout d'une image</p> />
        <Route path="*" element=<Error404 /> />
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
