// import PropTypes from 'prop-types';

// import image de fond
// import BackgroundImage from 'https://www.zupimages.net/up/23/18/3bwm.jpg'
// import reactLogo from './react-logo.svg';

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
          Logo et titre
        </div>
        <NavBar />
      </div>
      <div className="appHeader__searchBar">
        <p className="appHeader__textAboveSearchBar">Bienvenue sur ce site, bravo etc.</p>
        <form>
          <input
            type="text"
            name="headerSearch"
            id="headerSearch"
            placeholder="Votre recherche ici ..."
          />
        </form>

      </div>
    </div >
  );
}

// AppHeader.propTypes = {

// };

export default AppHeader;
