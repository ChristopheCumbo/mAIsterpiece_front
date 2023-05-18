import PropTypes from 'prop-types';
import React from 'react';
import { useDropzone } from 'react-dropzone';

import './style.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropZoneAvatar from '../DropZoneAvatar';
import { actionSendProfile, actionUpdateTextAreaBio } from '../../actions/user';

function ProfileEditable({ pseudo, avatar, bio }) {
  const dispatch = useDispatch();
  const bioInput = useSelector((state) => state.user.inputTextareaBio);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  const handleChangeBio = (event) => {
    // console.log('bio : ', event.target.value);
    dispatch(actionUpdateTextAreaBio(event.target.value));
  };

  const handleSubmitProfile = (evt) => {
    evt.preventDefault();
    dispatch(actionSendProfile(uploadedFiles));
  };


  return (
    <div className="memberPage__profil">
      Vous pouvez modifier ici vos données, {pseudo}

      <form className="memberPage__formProfile" onSubmit={handleSubmitProfile}>
        <div>
          <label htmlFor="memberPage__formProfile--avatar">Avatar : </label>
          <button onClick={toggleMenu} type="button">Changer d'avatar</button>
          {isVisible && <DropZoneAvatar
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            className="memberPage__modal"
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
          />}
          {/* <input
            type="text"
            className="settings-input"
            name="memberPage__form--avatar"
            id="memberPage__form--avatar"
            value="http://avatar.com/1345"
          // onChange={handleChange}
          /> */}

        </div>
        <div>
          <label htmlFor="memberPage__formProfile--bio">Bio : </label>
          <textarea
            // rows="7"
            // cols="75"
            className="settings-input"
            name="memberPage__form--bio"
            id="memberPage__form--bio"
            value={bioInput}
            onChange={handleChangeBio}
          />
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
