// import PropTypes from 'prop-types';

// imports from react, react-router-dom and react-redux
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// action creators
import { actionLoadMemberPictures } from '../../actions/user';
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
  const dispatch = useDispatch();
  // Retrieves the member's id
  const { memberId } = useParams();
  // console.log('memberId = ', memberId);
  // check in the state if the user is logged
  const isLogged = useSelector((state) => state.user.logged);
  // check connected user's id (blank if not)
  const userId = useSelector((state) => state.user.userId);
  // upload pictures from the state (brought by useState)
  const pictures = useSelector((state) => state.user.memberListOfPictures);
  // console.log('Member Page : pictures = ', pictures);
  // for the visibility of the AddPicture modal
  const [isAddPictureVisible, setIsAddPictureVisible] = useState(false);
  const showMenuAddPicture = () => {
    setIsAddPictureVisible(true);
  };

  useEffect(
    () => {
      // Update of the picture of the week
      dispatch(actionLoadMemberPictures(memberId));
    },
    [], // first render
  );

  // test only
  // const pseudo = 'Martin Martin';
  // const avatar = '';
  // const bio = 'Le plus fort des créateurs ! Exercitationem unde officia porro veritatis dignissimos eum, id iste dicta fugit neque voluptatem pariatur architecto minus commodi est magni velit doloremque quos!';
  // const email = 'aaa@gmail.com';
  return (
    <div className="memberPage__container">
      <PreviousPage />
      {(pictures.length !== 0)
        && (
          <>
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
                    <h2><span className="memberPage__title--pseudo">{pictures.pseudo}</span></h2>
                  </div>
                )}
            </div>

            <Carousel />

            {
              (isLogged && (userId === memberId))
                ? <ProfileEditable pseudo={pictures.pseudo} avatar={pictures.avatar} bio={pictures.bio} />
                : <ProfileNonEditable pseudo={pictures.pseudo} avatar={pictures.avatar} bio={pictures.bio} />
            }

            {
              (isLogged && (userId === memberId))
              && <Settings pseudo={pictures.pseudo} email={pictures.email} />
            }
          </>
        )}
    </div>
  );
}

// MemberPage.propTypes = {

// };

export default MemberPage;
