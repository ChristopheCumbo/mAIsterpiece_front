// import PropTypes from 'prop-types';

// import des composants
import AppFooter from '../../AppFooter';
import AppHeader from '../../AppHeader';
import FormRegister from './FormRegister';

import './style.scss';

function RegisterPage() {
  return (
    <div className="loginPage">
      <AppHeader />
      <FormRegister />
      <AppFooter />
    </div>
  );
}

RegisterPage.propTypes = {

};

export default RegisterPage;
