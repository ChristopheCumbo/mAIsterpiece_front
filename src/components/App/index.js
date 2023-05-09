// import reactLogo from './react-logo.svg';
// import of react-router-dom
import { Routes, Route } from 'react-router-dom';

// components
import LoginPage from '../LoginPage';
import HomePage from '../HomePage';
import RegisterPage from '../RegisterPage/RegisterPage';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

// style
import './styles.css';

// Main fonction for the application
function App() {
  return (
    <div className="app">
      {/* <img src={reactLogo} alt="react logo" />
      <h1>Composant : App</h1> */}
      <AppHeader />
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
      <AppFooter />
    </div>
  );
}

export default App;
