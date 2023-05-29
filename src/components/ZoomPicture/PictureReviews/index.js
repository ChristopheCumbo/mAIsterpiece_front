import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './style.scss';
import { actionLoadPictureDatas } from '../../../actions/pictures';

function PictureReviews({ reviews }) {
  return (
    <div className="zoomPicture__reviews">
      <h2>Commentaires</h2>
      {
        reviews.map((review, indexMap) => (
          <div className="zoomPicture__containerReviews" key={indexMap}>
            {/* <div className="zoomPicture__containerReviews" key={review.review_content}> */}
            <p className="zoomPicture__login">{review.reviewer_pseudo}</p>
            <p className="zoomPicture__textReviews">{review.review_content}</p>
          </div>
        ))
      }
    </div>
  );
}

PictureReviews.propTypes = {
  reviews: PropTypes.array,
};

PictureReviews.defaultProps = {
  reviews: [],
};

export default PictureReviews;
