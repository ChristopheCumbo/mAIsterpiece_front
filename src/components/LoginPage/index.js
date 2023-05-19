import { Navigate } from 'react-router-dom';
// import PropTypes from 'prop-types';

// import des composants
// import AppFooter from '../AppFooter';
// import AppHeader from '../AppHeader';
import { useSelector } from 'react-redux';
import FormLogin from './FormLogin';

import './style.scss';

function LoginPage() {
  // check in the state if the user is logged
  const isLogged = useSelector((state) => state.user.logged);

  return (
    <>
      {
        isLogged && (
          <Navigate to="/" replace={true} />
        )
      }
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
