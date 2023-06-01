import React from 'react';
import { Link } from 'react-router-dom';
// import { DEFAULT_PATHS } from 'config.js';
import Lawyerlogo from '../../assets/images/Lawyerlogo.png';

const NavLogo = () => {
  return (
    <div className="logo position-relative">
      <Link to="">
        {/*
          Logo can be added directly
          <img src="/img/logo/logo-white.svg" alt="logo" />
          Or added via css to provide different ones for different color themes
         */}
 <img src={Lawyerlogo} alt="logo" style={{width:"175px"}} />
        {/* <div className="img" /> */}
      </Link>
    </div>
  );
};
export default React.memo(NavLogo);
