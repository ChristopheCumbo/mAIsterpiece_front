import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import {
  actionSubmitUpdatedSettings,
  actionUpdateConfirmPasswordSettings,
  actionUpdateEmailSettings,
  actionUpdatePasswordSettings,
  actionUpdatePseudoSettings
} from '../../actions/user';

function Settings() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Retrieves the member's id
  const { memberId } = useParams();
  // Controlled fields
  const pseudo = useSelector((state) => state.user.inputPseudoFormSettings);
  const email = useSelector((state) => state.user.inputEmailFormSettings);
  const password1 = useSelector((state) => state.user.inputPasswordFormSettings);
  const password2 = useSelector((state) => state.user.inputConfirmPasswordFormSettings);

  // HANDLERS
  const handleUpdatePseudo = (event) => {
    dispatch(actionUpdatePseudoSettings(event.target.value));
  };
  const handleUpdateEmail = (event) => {
    dispatch(actionUpdateEmailSettings(event.target.value));
  };
  const handleUpdatePassword = (event) => {
    dispatch(actionUpdatePasswordSettings(event.target.value));
  };
  const handleUpdateConfirmPassword = (event) => {
    dispatch(actionUpdateConfirmPasswordSettings(event.target.value));
  };

  const handleSubmitSettings = (event) => {
    event.preventDefault();
    if (password1 === password2) {
      dispatch(actionSubmitUpdatedSettings());
      console.log('Changement de profil => submit');
      navigate(`/membre/${memberId}`);
    }
    else {
      // TODO introduire un sytème de messages pour indiquer les situations en erreur
      console.log('Passwords différents');
    }
  };

  return (
    <div className="memberPage__settings">
      <form className="memberPage__form" onSubmit={handleSubmitSettings}>
        <div>
          <label htmlFor="memberPage__form--pseudo">Pseudo : </label>
          <input
            type="text"
            className="settings-input"
            name="memberPage__form--pseudo"
            value={pseudo}
            onChange={handleUpdatePseudo}
          />
        </div>
        <div>
          <label htmlFor="memberPage__form--email">Email : </label>
          <input
            type="email"
            className="settings-input"
            name="memberPage__form--email"
            value={email}
            onChange={handleUpdateEmail}
          />
        </div>
        <div>
          <label htmlFor="memberPage__form--password1">Nouveau mot de passe : </label>
          <input
            type="password"
            className="settings-input"
            name="memberPage__form--password1"
            placeholder="Mot de passe"
            value={password1}
            onChange={handleUpdatePassword}
          />
        </div>
        <div>
          <label htmlFor="memberPage__form--password2">Confimer le mot de passe : </label>
          <input
            type="password"
            className="settings-input"
            name="memberPage__form--password2"
            placeholder="Mot de passe"
            value={password2}
            onChange={handleUpdateConfirmPassword}
          />
        </div>
        <button type="submit">Sauvegarder</button>
      </form>
    </div>
  );
}

export default Settings;
