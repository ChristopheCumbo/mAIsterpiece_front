// imports from react-redux and react-router-dom
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

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
    dispatch(actionRegister());
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
          <input
            className="formRegister__input"
            type="text"
            name="inputLogin"
            id="inputLogin"
            placeholder="Login"
            value={inputLoginFormRegister}
            onChange={handleChangeInputLogin}
          />
          <input
            className="formRegister__input"
            type="email"
            name="inputEmail"
            id="inputEmail"
            placeholder="Email"
            value={inputEmailFormRegister}
            onChange={handleChangeEmailLogin}
          />
          <input
            className="formRegister__input"
            type="password"
            name="inputFirstPassword"
            id="inputFirstPassword"
            placeholder="Mot de passe"
            value={inputPasswordFormRegister}
            onChange={handleChangePasswordLogin}
          />
          <input
            className="formRegister__input"
            type="password"
            name="inputSecondPassword"
            id="inputSecondPassword"
            placeholder="Confirmer le mot de passe"
            value={inputConfirmPasswordFormRegister}
            onChange={handleChangeConfirmPasswordLogin}
          />
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
