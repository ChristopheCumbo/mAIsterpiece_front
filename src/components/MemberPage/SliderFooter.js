import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { actionDeletePicture } from '../../actions/pictures';

import './style.scss';
import { Heart, MessageSquare, Trash2 } from 'react-feather';

function SliderFooter(picture) {
  const dispatch = useDispatch();
  // Retrieves the member's id
  const { memberId } = useParams();
  // console.log('FOOTER = ');
  // console.log('picture dans SliderFooter : ', picture);

  const handleDeleteCurrentPicture = () => {
    dispatch(actionDeletePicture(picture.picture_id, memberId));
  };

  return (
    <div className="memberPage__sliderFooter">
      <Link to={picture.ia_link} className="memberPage__sliderFooter--ia">{picture.ia_name}</Link>
      {/* <Link to={iaLink} className="memberPage__sliderFooter--ia">{iaName}</Link> */}
      {/* <Link to={''} className="zoomPicture__zoomContentAside">IA</Link> */}
      <div className="memberPage__sliderFooter--likes">
        {picture.likesCount} &nbsp; <Heart />
        {/* {likesCount} &nbsp; <Heart /> */}
      </div>
      <div className="memberPage__sliderFooter--comments">
        {picture.reviewsCount} &nbsp; <MessageSquare />
        {/* {reviewsCount} &nbsp; <MessageSquare /> */}
      </div>
      <div className="memberPage__sliderFooter--delete">
        <button type="button" onClick={handleDeleteCurrentPicture}><Trash2 /></button>
      </div>
    </div>

  );
}

SliderFooter.propTypes = {
};

SliderFooter.defaultProps = {

};

export default SliderFooter;
