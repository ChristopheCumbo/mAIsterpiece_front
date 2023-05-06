// import PropTypes from 'prop-types';

// import image de fond
// import BackgroundImage from 'https://www.zupimages.net/up/23/18/3bwm.jpg'
// import reactLogo from './react-logo.svg';
import Logo from '../../assets/proposition_logo.png';
// import composants
import NavBar from './NavBar';

// import scss
import './style.scss';

function AppHeader() {
  return (
    <div
      className="appHeader"
      style={{
        backgroundImage: 'url("https://www.zupimages.net/up/23/18/3bwm.jpg")',
      }}
    >
      <div className="appHeader__logoNavbar">
        <div className="appHeader__logoAndTitle">
          <img className="appHeader__logoImg" src={Logo} alt=" logo" />
          mAIsterpiece
        </div>
        <NavBar />
      </div>
      <div className="appHeader__searchBar">
        <p className="appHeader__textAboveSearchBar">Bienvenue sur A.I. Masterpiece ! Ici, vous pourrez apprécier
          et télécharger vos images générées par IA
        </p>
        <form>
          <input
            className="appHeader__headerSearch"
            type="text"
            name="headerSearch"
            id="headerSearch"
            placeholder="Rechercher votre image"
          />
        </form>

      </div>
    </div>
  );
}

// AppHeader.propTypes = {

// };

export default AppHeader;
