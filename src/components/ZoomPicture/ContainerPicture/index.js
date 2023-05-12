import PropTypes from 'prop-types';

import './style.scss';

function ContainerPicture({ imgSrc, imgPrompt }) {
  return (
    <div className="zoomPicture__containerPicture">
      <img className="zoomPicture__Picture" src={imgSrc} alt={imgPrompt} />
      {/* <img className="zoomPicture__Picture" src="https://www.zupimages.net/up/23/18/nwm7.jpg" alt="" /> */}

      <p className="zoomPicture__prompt">Prompt : {imgPrompt}</p>
    </div>
  );
}

ContainerPicture.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgPrompt: PropTypes.string,
};

ContainerPicture.defaultProps = {
  imgPrompt: 'non communiqué',
};

export default ContainerPicture;
