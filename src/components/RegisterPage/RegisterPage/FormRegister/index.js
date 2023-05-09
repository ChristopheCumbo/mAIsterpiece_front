import { useSelector, useDispatch } from 'react-redux';

import {
  actionUpdateLoginFormRegister,
  actionUpdateEmailFormRegister,
  actionUpdatePasswordFormRegister,
  actionUpdateConfirmPasswordFormRegister,
} from '../../../../actions/user';

// import PropTypes from 'prop-types';

import Logo from '../../../../assets/proposition_logo.png';

import './style.scss';

function FormRegister() {
  const inputLoginFormRegister = useSelector((state) => state.user.inputLoginFormRegister);
  const inputEmailFormRegister = useSelector((state) => state.user.inputEmailFormRegister);
  const inputPasswordFormRegister = useSelector((state) => state.user.inputPasswordFormRegister);
  const inputConfirmPasswordFormRegister = useSelector((state) => state.user.inputConfirmPasswordFormRegister);

  const dispatch = useDispatch();

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

  return (
    <div className="formRegister">
      <div className="formRegister__logoAndTitle">
        <img className="formRegister__logoImg" src={Logo} alt=" logo" />
        <p>mAIsterpiece</p>
      </div>
      <p className="inscription">Inscription</p>
      <div>
        <form className="formRegister__input">
          <input
            className="formRegister__login"
            type="text"
            name="inputLogin"
            id="inputLogin"
            placeholder="Login"
            value={inputLoginFormRegister}
            onChange={handleChangeInputLogin}
          />
          <input
            className="formRegister__password"
            type="email"
            name="inputPassword"
            id="inputPassword"
            placeholder="Email"
            value={inputEmailFormRegister}
            onChange={handleChangeEmailLogin}
          />
          <input
            className="formRegister__login"
            type="password"
            name="inputLogin"
            id="inputLogin"
            placeholder="Mot de passe"
            value={inputPasswordFormRegister}
            onChange={handleChangePasswordLogin}
          />
          <input
            className="formRegister__password"
            type="password"
            name="inputPassword"
            id="inputPassword"
            placeholder="Confirmer le mot de passe"
            value={inputConfirmPasswordFormRegister}
            onChange={handleChangeConfirmPasswordLogin}
          />
          <div className="formRegister__button">
            <button className="formRegister__buttonInscription" type="submit">Inscription</button>
            <p>Déja un compte ? <a href="/login">Connecter-vous</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

FormRegister.propTypes = {

};

export default FormRegister;
