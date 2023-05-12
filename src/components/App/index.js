// import of react-router-dom
import { Routes, Route } from 'react-router-dom';

// imports from react and react-redux
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// components
import LoginPage from '../LoginPage';
import HomePage from '../HomePage';
import RegisterPage from '../RegisterPage/RegisterPage';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import PageContact from '../PageContact';
import AppHeaderMin from '../AppHeader/AppHeaderMin';
import Error404 from '../Error404';
import ZoomPicture from '../ZoomPicture';

// style
import './styles.css';

// actions
import { actionLoadPictureOfTheWeek, actionLoadPictures } from '../../actions/pictures';

// Main fonction for the application
function App() {
  const dispatch = useDispatch();
  // state's variable to set the small menu (bool)
  const [showScrollHeader, setShowScrollHeader] = useState(false);

  useEffect(
    () => {
      // Update of the picture of the week
      dispatch(actionLoadPictureOfTheWeek());
      // loading by default : most recents pictures
      dispatch(actionLoadPictures('picturesMostRecents'));
      const appHeaderHeight = document.querySelector('.appHeader').offsetHeight;
      // console.log(document.querySelector('.appHeader').offsetHeight);
      const handleScroll = () => {
        // const isScrollComplete = window.scrollY >= appHeaderHeight;
        const isScrollComplete = window.scrollY >= appHeaderHeight - 49;
        setShowScrollHeader(isScrollComplete);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    },
    [], // first render
  );

  // useEffect(
  //   () => {
  //     console.log(AppHeaderHeight);
  //   },
  //   [AppHeaderHeight],
  // );

  // console.log(AppHeaderHeight);
  //      (window.scrollY >= <AppHeader />.offsetHeight)
  // function showAppHeaderMin() {
  //   console.log(window.scrollY);
  //   if (window.scrollY >= AppHeaderHeight) {
  //     return <AppHeaderMin />;
  //   }
  //   return '';
  // }

  return (
    <div className="app">
      <AppHeader />
      {/* {showAppHeaderMin()} */}
      {/* {
        window.addEventListener('scroll', () => {
          (window.scrollY >= AppHeaderHeight)
            && <AppHeaderMin />
        })
      } */}
      {
        showScrollHeader && <AppHeaderMin />
      }
      <Routes>
        <Route path="/" element=<HomePage /> />
        <Route path="/login" element=<LoginPage /> />
        <Route path="/register" element=<RegisterPage /> />
        <Route path="/contact" element=<PageContact /> />
        <Route path="/mentionlegales" element=<p>la page de mention legales</p> />
        <Route path="/user" element=<p>la page d'un user</p> />
        <Route path="/picture/:id" element=<ZoomPicture /> />
        <Route path="/error" element=<Error404 /> />
        <Route path="*" element=<Error404 /> />
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
