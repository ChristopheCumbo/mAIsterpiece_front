import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './style.scss';
import { actionLoadPictureDatas } from '../../../actions/pictures';

function PictureReviews({ reviews }) {
  // console.log('Commentaires :', reviews);
  // console.log(reviews.length);
  return (
    <div className="zoomPicture__reviews">
      <h2>Commentaires</h2>
      {
        (reviews.length !== 0 && (reviews.length === 1 && reviews[0].review_content !== null))
        && reviews.map((review, indexMap) => (
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
