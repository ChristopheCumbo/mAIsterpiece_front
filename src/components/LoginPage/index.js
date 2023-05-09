// import PropTypes from 'prop-types';

// import des composants
// import AppFooter from '../AppFooter';
// import AppHeader from '../AppHeader';
import FormLogin from './FormLogin';

import './style.scss';

function LoginPage() {
  return (
    <div className="loginPage">
      {/* <AppHeader /> */}
      <FormLogin />
      {/* <AppFooter /> */}
    </div>
  );
}

LoginPage.propTypes = {

};

export default LoginPage;
