// import { Navigate, useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';

// import des composants
// import AppFooter from '../AppFooter';
// import AppHeader from '../AppHeader';
// import { useSelector } from 'react-redux';
import FormLogin from './FormLogin';

import './style.scss';

function LoginPage() {
  // check in the state if the user is logged
  // const isLogged = useSelector((state) => state.user.logged);
  // Using useNavigate to return to the previous page if logged
  // const navigate = useNavigate();
  // const goBack = () => {
  //   console.log('goback');
  //   navigate(-1);
  // };

  return (
    <>
      {/* {
        isLogged && goBack
      } */}
      <div className="loginPage">
        {/* <AppHeader /> */}
        <FormLogin />
        {/* <AppFooter /> */}
      </div>
    </>
  );
}

LoginPage.propTypes = {

};

export default LoginPage;
