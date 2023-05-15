import PropTypes from 'prop-types';

import './style.scss';

function ZoomAside({ author, ia }) {
  return (
    <div className="zoomPicture__zoomAside">
      <div className="zoomPicture__zoomAuthor">
        <p className="zoomPicture__zoomTitleAside">Auteur</p>
        <p className="zoomPicture__zoomContentAside">{author}</p>
      </div>
      <div className="zoomPicture__zoomIA">
        <p className="zoomPicture__zoomTitleAside">IA</p>
        <p className="zoomPicture__zoomContentAside">{ia}</p>
      </div>
      <div className="zoomPicture__zoomTags">
        <p className="zoomPicture__zoomTitleAside">Tags</p>
        <p className="zoomPicture__zoomContentAside">"Beau, coloré, carré"</p>
      </div>
    </div>
  );
}

ZoomAside.propTypes = {
  author: PropTypes.string,
  ia: PropTypes.string,
};

ZoomAside.defaultProps = {
  author: 'non communiqué',
  ia: 'non communiquée',
};

export default ZoomAside;
