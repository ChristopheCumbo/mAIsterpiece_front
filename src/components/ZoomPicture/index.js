// import PropTypes from 'prop-types';

// Import components
import AddReviews from './AddReviews';
import ContainerPicture from './ContainerPicture';
import MoreReviewsButton from './MoreReviewsButton';
import PictureReviews from './PictureReviews';
import './style.scss';

function ZoomPicture() {
  return (
    <div className="zoomPicture">
      <h1 className="zoomPicture__title">Zoom sur votre image</h1>
      <ContainerPicture />
      <PictureReviews />
      <MoreReviewsButton />
      <AddReviews />
    </div>
  );
}

ZoomPicture.propTypes = {

};

export default ZoomPicture;
