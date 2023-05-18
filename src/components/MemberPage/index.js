// import PropTypes from 'prop-types';

// imports from react, react-router-dom and react-redux
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
// Style
import './style.scss';
// Sub-components
import Carousel from './Carousel';
import ProfileEditable from './ProfileEditable';
import ProfileNonEditable from './ProfileNonEditable';
import Settings from './Settings';
import PreviousPage from '../PreviousPage';
import AddPicture from '../AddPicture';

function MemberPage() {
  // check in the state if the user is logged
  const isLogged = useSelector((state) => state.user.logged);
  // check connected user's id (blank if not)
  const userId = useSelector((state) => state.user.userId);
  // for the visibility of the AddPicture modal
  const [isAddPictureVisible, setIsAddPictureVisible] = useState(false);
  const showMenuAddPicture = () => {
    setIsAddPictureVisible(true);
  };
  // test only
  const pseudo = 'Martin Martin';
  const avatar = '';
  const bio = 'Le plus fort des créateurs ! Exercitationem unde officia porro veritatis dignissimos eum, id iste dicta fugit neque voluptatem pariatur architecto minus commodi est magni velit doloremque quos!';
  const email = 'aaa@gmail.com';
  // Retrieves the picture's id
  const { memberId } = useParams();
  return (
    <div className="memberPage__container">
      <PreviousPage />
      <div className="memberPage__header">
        {(isLogged && (userId === memberId))
          ? (
            <div className="memberPage__title">
              <h2>Mes Productions</h2>
              <button onClick={showMenuAddPicture} type="button" id="memberPage__buttonTitle">Ajouter une image</button>
              {isAddPictureVisible && <AddPicture setIsAddPictureVisible={setIsAddPictureVisible} className="alertModal" />}
            </div>
          )
          : (
            <div className="memberPage__title">
              <h2>Les productions de</h2>
              <h2><span className="memberPage__title--pseudo">{pseudo}</span></h2>
            </div>
          )}
      </div>


      <Carousel />

      {
        (isLogged && (userId === memberId))
          ? <ProfileEditable pseudo={pseudo} avatar={avatar} bio={bio} />
          : <ProfileNonEditable pseudo={pseudo} avatar={avatar} bio={bio} />
      }

      {
        (isLogged && (userId === memberId))
        && <Settings pseudo={pseudo} email={email} />
      }

    </div>
  );
}

// MemberPage.propTypes = {

// };

export default MemberPage;
