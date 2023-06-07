import PropTypes from 'prop-types';

import { Link, redirect, useNavigate } from 'react-router-dom';
import './style.scss';
import { Menu, User, X } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';
import { actionClearJwt } from '../../../actions/user';
import { actionClearHomePage, actionLoadPictureOfTheWeek, actionLoadPictures } from '../../../actions/pictures';
import { URL_SERVER_BACK } from '../../../utils/url';

function NavBar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  // check in the state if the user is logged
  const isLogged = useSelector((state) => state.user.logged);

  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(actionClearJwt(event.target.value));
    dispatch(actionClearHomePage());
    dispatch(actionLoadPictures('picturesMostRecents'));
    dispatch(actionLoadPictureOfTheWeek());
    navigate('/');
    // redirect('/');
  };

  return (
    <div className="navBar__container">
      {!isLogged
        ? (
          <>
            <Link className="navBar__link" to="/login">Connexion</Link> <span>/&nbsp;</span>
            <Link className="navBar__link" to="/register">Inscription</Link>
          </>
        )
        : (
          <>
            <Link to={URL_SERVER_BACK}><User className="logo_user" /></Link>
            <Link onClick={handleLogout} className="navBar__link" to="">Deconnexion</Link>
          </>
        )}
      <div className="navBar__container__mobile">
        <button type="button" onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu className="navBar__button" />}
        </button>
        <ul onClick={toggleMenu} className={`${isOpen ? '' : 'li-close'}`}>
          {!isLogged && (
            <>
              <li> <Link to="/register">Inscription</Link></li>
              <li> <Link to="/login">Connexion</Link></li>
            </>
          )}
          {isLogged && (
            <li><Link onClick={handleLogout} to="">Deconnexion</Link></li>
          )}
          <li> <Link to="/contact">Contact</Link></li>
          <li> <Link to="/mentionslegales">Mention Legales</Link></li>

        </ul>
      </div>

    </div>
  );
}

NavBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default NavBar;
