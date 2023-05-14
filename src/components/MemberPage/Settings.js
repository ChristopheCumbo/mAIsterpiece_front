import PropTypes from 'prop-types';

import './style.scss';

function Settings({ pseudo, email }) {
  return (
    <div className="memberPage__settings">
      <form className="memberPage__form">
        <div>
          <label htmlFor="memberPage__form--pseudo">Pseudo : </label>
          <input
            type="text"
            className="settings-input"
            name="memberPage__form--pseudo"
            value={pseudo}
          // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="memberPage__form--email">Email : </label>
          <input
            type="email"
            className="settings-input"
            name="memberPage__form--email"
            value={email}
          // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="memberPage__form--password1">Nouveau mot de passe : </label>
          <input
            type="password"
            className="settings-input"
            name="memberPage__form--password1"
            placeholder="Mot de passe"
          // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="memberPage__form--password2">Confimer le mot de passe : </label>
          <input
            type="password"
            className="settings-input"
            name="memberPage__form--password2"
            placeholder="Mot de passe"
          // onChange={handleChange}
          />
        </div>
        <button type="submit">Sauvegarder</button>
      </form>
    </div>
  );
}

Settings.propTypes = {
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Settings;
