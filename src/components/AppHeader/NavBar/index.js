// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import './style.scss';

function NavBar() {
  return (
    <div className="navBar__container">
      <Link to="/login">Connexion</Link> /&nbsp;
      <Link to="/register">Inscription</Link>
    </div>
  );
}

// NavBar.propTypes = {

// };

export default NavBar;
