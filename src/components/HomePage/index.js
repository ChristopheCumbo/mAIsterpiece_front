// import PropTypes from 'prop-types';

// components
import Gallery from '../Gallery';
import GalleryHeader from '../GalleryHeader';
import PictureOfTheWeek from '../PictureOfTheWeek';
// style
import './style.scss';

function HomePage() {
  return (
    <div className="homePage__container">
      <GalleryHeader />
      <PictureOfTheWeek />
      <Gallery />
    </div>
  );
}

// HomePage.propTypes = {

// };

export default HomePage;
