// import PropTypes from 'prop-types';

// components
import Gallery from '../Gallery';
import PictureOfTheWeek from '../PictureOfTheWeek';
// style
import './style.scss';

function HomePage() {
  return (
    <div className="homePage__container">
      <PictureOfTheWeek />
      <Gallery />
    </div>
  );
}

// HomePage.propTypes = {

// };

export default HomePage;
