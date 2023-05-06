// import PropTypes from 'prop-types';

import AppFooter from '../AppFooter';
import AppHeader from '../AppHeader';
import Home from '../Home';
import PictureOfTheWeek from '../PictureOfTheWeek';
import './style.scss';

function HomePage() {
  return (
    <div>
      <AppHeader />
      <PictureOfTheWeek />
      <Home />
      <AppFooter />
    </div>
  );
}

HomePage.propTypes = {

};

export default HomePage;
