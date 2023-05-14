import PropTypes from 'prop-types';

import './style.scss';

function ProfileEditable({ pseudo, avatar, bio }) {
  return (
    <div className="memberPage__profil">
      Vous pouvez modifier ici vos données, {pseudo}

      <form className="memberPage__formProfile">
        <div>
          <label htmlFor="memberPage__formProfile--avatar">Avatar : </label>
          <input
            type="text"
            className="settings-input"
            name="memberPage__form--avatar"
            id="memberPage__form--avatar"
            value="http://avatar.com/1345"
          // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="memberPage__formProfile--bio">Bio : </label>
          <textarea
            // rows="7"
            // cols="75"
            className="settings-input"
            name="memberPage__form--bio"
            id="memberPage__form--bio"
          // onChange={handleChange}
          >
            {bio}
          </textarea>
        </div>
        <button type="submit">Sauvegarder</button>
      </form>
    </div>
  );
}

ProfileEditable.propTypes = {
  pseudo: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default ProfileEditable;
