// imports from react, react-redux
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// prop-types
import PropTypes from 'prop-types';
// style
import './style.scss';
import { actionClearOneMessage } from '../../actions/messages';

function SingleMessage({ messageId, messageType, messageContent }) {
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log('Début setTimeout message n°', messageId);
    const timer = setTimeout(() => {
      // console.log('disparition message n°', messageId);
      dispatch(actionClearOneMessage(messageId));
    }, 5000);

    return () => clearTimeout(timer);
  });

  return (
    <div className={`singleMessage__container singleMessage__${messageType}`}>
      {messageContent}
    </div>
  );
}

SingleMessage.propTypes = {
  messageId: PropTypes.number.isRequired,
  messageType: PropTypes.string.isRequired,
  messageContent: PropTypes.string.isRequired,
};

export default SingleMessage;
