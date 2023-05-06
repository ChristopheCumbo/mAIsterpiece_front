// import PropTypes from 'prop-types';

import Logo from '../../../../assets/proposition_logo.png';

import './style.scss';

function FormRegister() {
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
          />
          <input
            className="formRegister__password"
            type="email"
            name="inputPassword"
            id="inputPassword"
            placeholder="Email"
          />
          <input
            className="formRegister__login"
            type="password"
            name="inputLogin"
            id="inputLogin"
            placeholder="Mot de passe"
          />
          <input
            className="formRegister__password"
            type="password"
            name="inputPassword"
            id="inputPassword"
            placeholder="Confirmer le mot de passe"
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
