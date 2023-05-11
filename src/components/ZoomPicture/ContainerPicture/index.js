// import PropTypes from 'prop-types';

import './style.scss';

function ContainerPicture() {
  return (
    <div className="zoomPicture__containerPicture">
      <img className="zoomPicture__Picture" src="https://www.zupimages.net/up/23/18/nwm7.jpg" alt="" />
      <p className="zoomPicture__ai">A.I: BlueWillow</p>
      <p className="zoomPicture__prompt">Prompt: Frog, Hat, Eyes, Red</p>
    </div>
  );
}

ContainerPicture.propTypes = {

};

export default ContainerPicture;
