import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';
import { Heart, MessageSquare, Trash2 } from 'react-feather';

function SliderFooter(picture) {
  // console.log('FOOTER = ');
  // console.log('picture dans SliderFooter : ', picture);
  return (
    <div className="memberPage__sliderFooter">
      <Link to={picture.ia_link} className="memberPage__sliderFooter--ia">{picture.ia_name}</Link>
      {/* <Link to={''} className="zoomPicture__zoomContentAside">IA</Link> */}
      {/* {photographer}  <a href="#">MidJourney</a> */}
      <div className="memberPage__sliderFooter--likes">
        {picture.likesCount} &nbsp; <Heart />
      </div>
      <div className="memberPage__sliderFooter--comments">
        {picture.reviewsCount} &nbsp; <MessageSquare />
      </div>
      <div className="memberPage__sliderFooter--delete">
        <Trash2 />
      </div>
    </div>

  );
}

SliderFooter.propTypes = {
};

SliderFooter.defaultProps = {

};

export default SliderFooter;
