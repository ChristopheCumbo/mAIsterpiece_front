import { useState } from 'react';
// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import './style.scss';
import { Menu, X } from 'react-feather';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navBar__container">
      <Link className="navBar__link" to="/login">Connexion</Link> <span>/&nbsp;</span>
      <Link className="navBar__link" to="/register">Inscription</Link>

      <div className="navBar__container__mobile">
        <button type="button" onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </button>
        <ul className={`${isOpen ? '' : 'li-close'}`}>
          <li><Link to="/register">Inscription</Link></li>
          <li> <Link to="/login">Connexion</Link></li>
        </ul>
      </div>

    </div>
  );
}

// NavBar.propTypes = {

// };

export default NavBar;
