// import reactLogo from './react-logo.svg';
// import du react-router-dom
import { Routes, Route } from 'react-router-dom';

// import composants
import LoginPage from '../LoginPage';
import HomePage from '../HomePage';
import RegisterPage from '../RegisterPage/RegisterPage';

import './styles.css';

function App() {
  return (
    <div className="app">
      {/* <img src={reactLogo} alt="react logo" />
      <h1>Composant : App</h1> */}
      <Routes>
        <Route path="/" element=<HomePage /> />
        <Route path="/login" element=<LoginPage /> />
        <Route path="/register" element=<RegisterPage /> />
        <Route path="/contact" element=<p>la page contact</p> />
        <Route path="/mentionlegales" element=<p>la page de mention legales</p> />
        <Route path="/user" element=<p>la page d'un user</p> />
        <Route path="/addpicture" element=<p>la page d'ajout d'une image</p> />
        <Route path="*" element=<p>la page 404</p> />
      </Routes>
    </div>
  );
}

export default App;
/*

   <AppHeader />
      <PictureOfTheWeek />
      <Home />
      <AppFooter />

      */
