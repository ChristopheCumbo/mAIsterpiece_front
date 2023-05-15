// import PropTypes from 'prop-types';

import { XCircle } from 'react-feather';
import './style.scss';
import { useNavigate } from 'react-router-dom';

function PreviousPage() {
  // Using useNavigate to return to the previous page when clicking on the cross
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="previousPage">
      <div onClick={goBack}>
        <XCircle className="zoomPicture__closePage" />
      </div>
    </div>
  );
}

PreviousPage.propTypes = {

};

export default PreviousPage;
