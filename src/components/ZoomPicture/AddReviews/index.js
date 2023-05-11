// import PropTypes from 'prop-types';

import './style.scss';

function AddReviews() {
  return (
    <div>
      <div className="zoomPicture__addComment">
        <p className="zoomPicture__formTitle">Ajouter un commentaire</p>
        <form>
          <input
            className="zoomPicture__inputReviews"
            type="text"
            name="inputReviews"
            id="inputReviews"
            placeholder="Ajouter votre commentaire"
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
