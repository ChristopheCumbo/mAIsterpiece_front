// import PropTypes from 'prop-types';

import Logo from '../../../assets/proposition_logo.png';

import './style.scss';

function FormLogin() {
  return (
    <div className="formLogin">
      <div className="formLogin__logoAndTitle">
        <img className="formLogin__logoImg" src={Logo} alt=" logo" />
        <p>mAIsterpiece</p>
      </div>
      <p className="connexion">Connexion</p>
      <div>
        <form className="formLogin__input">
          <input
            className="formLogin__login"
            type="text"
            name="inputLogin"
            id="inputLogin"
            placeholder="Login"
          />
          <input
            className="formLogin__password"
            type="password"
            name="inputPassword"
            id="inputPassword"
            placeholder="Mot de passe"
          />
          <div className="formLogin__button">
            <button className="formLogin__connexion" type="submit">Connexion</button>
            <p>Pas encore de compte ?</p>
            <button className="formLogin__inscription" type="button"><a href="/register">Inscription</a></button>
          </div>
        </form>
      </div>
    </div>
  );
}

FormLogin.propTypes = {

};

export default FormLogin;
