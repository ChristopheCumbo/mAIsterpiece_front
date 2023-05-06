// import reactLogo from './react-logo.svg';

// import composants
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import Home from '../Home';
import PictureOfTheWeek from '../PictureOfTheWeek';

import './styles.css';

function App() {
  return (
    <div className="app">
      {/* <img src={reactLogo} alt="react logo" />
      <h1>Composant : App</h1> */}
      <AppHeader />
      <PictureOfTheWeek />
      <Home />
      <AppFooter />
    </div>
  );
}

export default App;
