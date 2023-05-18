// imports from react and react-redux
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import from react-dropzone
import { useDropzone } from 'react-dropzone';
// import action creators
import { actionSubmitNewPicture, actionUpdateInputAddPrompt, actionUpdateInputAddTags } from '../../actions/pictures';
// proptypes
import PropTypes from 'prop-types';
// style and icon
import './style.scss';
import { XCircle } from 'react-feather';

function AddPicture({ setIsAddPictureVisible }) {
  const dispatch = useDispatch();

  // controlled fields
  const inputTags = useSelector((state) => state.pictures.inputTags);
  const inputPrompt = useSelector((state) => state.pictures.inputPrompt);

  const handleChangeInputTags = (event) => {
    dispatch(actionUpdateInputAddTags(event.target.value));
  };

  const handleChangeInputPrompt = (event) => {
    dispatch(actionUpdateInputAddPrompt(event.target.value));
  };

  // when clicking on the X, close the menu
  const hideMenu = () => {
    setIsAddPictureVisible(false);
  };

  // temporarily memorizes the uploaded picture
  // ! One of the key rules of Redux is that non-serializable values should not go into the store. Because of that, file objects should not be kept in the Redux store if at all possible.
  const [uploadedPicture, setUploadedPicture] = useState();
  // console.log(uploadedPicture);

  // Handler for submitting the form
  const handleSubmitNewPicture = (event) => {
    event.preventDefault();
    dispatch(actionSubmitNewPicture(uploadedPicture));
  };

  // DropZone controller
  const onDrop = useCallback(acceptedFiles => {
    setUploadedPicture(acceptedFiles[0]);
    // console.log('onDrop');
    console.log(acceptedFiles[0]);
  }, []);
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    maxFiles: 1,
    accept: {
      'image/*': ['.png', '.gif', '.jpeg', '.jpg'],
    },
    maxSize: 1024000,
    onDrop,
    // onDrop: (acceptedFiles) => { console.log(acceptedFiles[0].name); },
  });

  return (
    <div className="addPicture__container">
      <div className="addPicture__previousPage">
        <button className="addPicture__closeButton" type="button" onClick={hideMenu}>
          <XCircle className="zoomPicture__closePage" />
        </button>
      </div>
      <form className="addPicture__formContainer" onSubmit={handleSubmitNewPicture}>
        <div className="addPicture__dropzone">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Glissez-déposez une image d'avatar ici, ou cliquez pour sélectionner un fichier sur votre appareil</p>
            <p>{(uploadedPicture !== undefined) && `Vous avez sélectionné : ${uploadedPicture.name}` }</p>
          </div>
          {/* <h4>{(uploadedPicture !== []) ? uploadedPicture.name : 'Pas de fichier'}</h4> */}
        </div>
        <input
          className=""
          type="text"
          name="inputPrompt"
          id="inputPrompt"
          placeholder="Le prompt qui vous a permis de générer l'image"
          value={inputPrompt}
          onChange={handleChangeInputPrompt}
        />
        <input
          className=""
          type="text"
          name="inputTags"
          id="inputTags"
          placeholder="Mots clés séparés par une virgule"
          value={inputTags}
          onChange={handleChangeInputTags}
        />
        <div className="">
          <button className="addPicture__submit" type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  );
}

AddPicture.propTypes = {
  setIsAddPictureVisible: PropTypes.func.isRequired,
};

export default AddPicture;
