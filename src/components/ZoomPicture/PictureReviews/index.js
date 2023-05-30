import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
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
        (reviews.length !== 0)
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

/* (reviews.length !== 0 && (reviews.length === 1 && reviews.review_content !== null)) */
PictureReviews.propTypes = {
  reviews: PropTypes.array,
};

PictureReviews.defaultProps = {
  reviews: [],
};

export default PictureReviews;
