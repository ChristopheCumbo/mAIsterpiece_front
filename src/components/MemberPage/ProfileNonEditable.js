import PropTypes from 'prop-types';
// style and icons
import './style.scss';
import { User } from 'react-feather';

function ProfileNonEditable({ pseudo, avatar, bio }) {
  return (
    <div className="memberPage__profilNonEditable">
      <div className="memberPage__avatar">
        <User />
      </div>
      {/* <div className="memberPage__pseudo">
        {pseudo}
      </div> */}
      <div className="memberPage__bio">
        {bio}
      </div>
    </div>
  );
}

ProfileNonEditable.propTypes = {
  pseudo: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default ProfileNonEditable;
