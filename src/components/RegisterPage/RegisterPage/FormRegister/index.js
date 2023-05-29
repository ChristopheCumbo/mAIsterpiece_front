// imports from react-redux and react-router-dom
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import {
  actionUpdateLoginFormRegister,
  actionUpdateEmailFormRegister,
  actionUpdatePasswordFormRegister,
  actionUpdateConfirmPasswordFormRegister,
  actionRegister,
} from '../../../../actions/user';

// import PropTypes from 'prop-types';

// styles and logo
import Logo from '../../../../assets/proposition_logo.png';
import './style.scss';

function FormRegister() {
  // from the state
  const inputLoginFormRegister = useSelector((state) => state.user.inputLoginFormRegister);
  const inputEmailFormRegister = useSelector((state) => state.user.inputEmailFormRegister);
  const inputPasswordFormRegister = useSelector((state) => state.user.inputPasswordFormRegister);
  const inputConfirmPasswordFormRegister = useSelector((state) => state.user.inputConfirmPasswordFormRegister);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handlers ****************
  const handleChangeInputLogin = (event) => {
    dispatch(actionUpdateLoginFormRegister(event.target.value));
  };
  const handleChangeEmailLogin = (event) => {
    dispatch(actionUpdateEmailFormRegister(event.target.value));
  };
  const handleChangePasswordLogin = (event) => {
    dispatch(actionUpdatePasswordFormRegister(event.target.value));
  };
  const handleChangeConfirmPasswordLogin = (event) => {
    dispatch(actionUpdateConfirmPasswordFormRegister(event.target.value));
  };
  const handleRegister = (event) => {
    event.preventDefault();
    if (inputPasswordFormRegister === inputConfirmPasswordFormRegister) {
      dispatch(actionRegister());
      navigate('/login');
    }
    else {
      // TODO introduire un sytème de messages pour indiquer les situations en erreur
      console.log('Passwords différends');
    }
  };

  return (
    <div className="formRegister">
      <div className="formRegister__logoAndTitle">
        <img className="formRegister__logoImg" src={Logo} alt=" logo" />
        <p>mAIsterpiece</p>
      </div>
      <p className="register">Inscription</p>
      <div>
        <form className="formRegister__container" onSubmit={handleRegister}>
          <div className="formRegister__label">
            <label htmlFor="inputLogin" className="">Login</label>
            <input
              className="formRegister__input"
              type="text"
              name="inputLogin"
              id="inputLogin"
              placeholder="Login"
              value={inputLoginFormRegister}
              onChange={handleChangeInputLogin}
            />
          </div>
          <div className="formRegister__label">
            <label htmlFor="inputEmail" className="">Email</label>
            <input
              className="formRegister__input"
              type="email"
              name="inputEmail"
              id="inputEmail"
              placeholder="Email"
              value={inputEmailFormRegister}
              onChange={handleChangeEmailLogin}
            />
          </div>
          <div className="formRegister__label">
            <label htmlFor="inputFirstPassword" className="">Password</label>
            <input
              className="formRegister__input"
              type="password"
              name="inputFirstPassword"
              id="inputFirstPassword"
              placeholder="Mot de passe"
              value={inputPasswordFormRegister}
              onChange={handleChangePasswordLogin}
            />
          </div>
          <div className="formRegister__label">
            <label htmlFor="inputSecondPassword" className="">Confirmer votre Password</label>
            <input
              className="formRegister__input"
              type="password"
              name="inputSecondPassword"
              id="inputSecondPassword"
              placeholder="Confirmer le mot de passe"
              value={inputConfirmPasswordFormRegister}
              onChange={handleChangeConfirmPasswordLogin}
            />
          </div>
          <div className="formRegister__button">
            <button className="formRegister__buttonInscription" type="submit">Inscription</button>
            <p>Déjà un compte ? <Link to="/login">Connectez-vous</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

FormRegister.propTypes = {

};

export default FormRegister;
