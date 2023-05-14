// import PropTypes from 'prop-types';

// import react-redux
import { useDispatch, useSelector } from 'react-redux';
// import action type
import { actionSendReviews, actionUpdateFormAddReviews } from '../../../actions/pictures';
import './style.scss';

function AddReviews() {
  const inputFormReviews = useSelector((state) => state.pictures.inputFormReviews);

  const dispatch = useDispatch();

  // Handlers *************
  const handleChangeInputAddReviews = (event) => {
    dispatch(actionUpdateFormAddReviews(event.target.value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(actionSendReviews());
  };

  return (
    <div>
      <div className="zoomPicture__addComment">
        <p className="zoomPicture__formTitle">Ajouter un commentaire</p>
        <form onSubmit={handleSubmit}>
          <input
            className="zoomPicture__inputReviews"
            type="text"
            name="inputReviews"
            id="inputReviews"
            placeholder="Ajouter votre commentaire"
            value={inputFormReviews}
            onChange={handleChangeInputAddReviews}
          />
          <div className="formLogin__button">
            <button className="zoomPicture__sendReviews" type="submit">Envoyer</button>
          </div>
        </form>
      </div>
    </div>
  );
}

AddReviews.propTypes = {

};

export default AddReviews;
