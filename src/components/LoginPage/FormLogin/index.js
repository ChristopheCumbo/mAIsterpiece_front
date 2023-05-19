// imports from react-redux and react-router-dom
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import des actions type
import { actionCheckLogin, actionUpdateEmailFormAuth, actionUpdatePasswordFormAuth } from '../../../actions/user';

// import PropTypes from 'prop-types';

import Logo from '../../../assets/proposition_logo.png';

import './style.scss';

function FormLogin() {
  const InputEmailFormAuth = useSelector((state) => state.user.inputEmailFormAuth);
  const inputPasswordFormAuth = useSelector((state) => state.user.inputPasswordFormAuth);

  const dispatch = useDispatch();

  // Handlers *************
  const handleChangeInputEmail = (event) => {
    dispatch(actionUpdateEmailFormAuth(event.target.value));
  };
  const handleChangePasswordLogin = (event) => {
    dispatch(actionUpdatePasswordFormAuth(event.target.value));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(actionCheckLogin());
  };

  return (
    <div className="formLogin">
      <div className="formLogin__logoAndTitle">
        <img className="formLogin__logoImg" src={Logo} alt=" logo" />
        <p>mAIsterpiece</p>
      </div>
      <p className="connexion">Connexion</p>
      <div>
        <form className="formLogin__input" onSubmit={handleSubmit}>
          <input
            className="formLogin__email"
            type="text"
            name="inputEmail"
            id="inputEmail"
            placeholder="Votre email de connexion"
            value={InputEmailFormAuth} // controle en lecture
            onChange={handleChangeInputEmail}
          />
          <input
            className="formLogin__password"
            type="password"
            name="inputPassword"
            id="inputPassword"
            placeholder="Mot de passe"
            value={inputPasswordFormAuth} // controle en lecture
            onChange={handleChangePasswordLogin}
          />
          <div className="formLogin__button">
            <button className="formLogin__connexion" type="submit">Connexion</button>

            <p>Pas encore de compte ? <Link to="/register">Inscrivez-vous</Link></p>
            {/*
            <button className="formLogin__inscription" type="button"><a href="/register">Inscription</a></button> */}
          </div>
        </form>
      </div>
    </div>
  );
}

FormLogin.propTypes = {

};

export default FormLogin;
