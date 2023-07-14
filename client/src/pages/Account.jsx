import { useState } from 'react';
import './Account.css';
import { NavbarSide, NavbarTop, MyAccount } from '../config/components-config';


const Account = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(true);
  return (
    <div className="home-container">
      <div className="navbar-container">
        {isMenuOpen && <NavbarSide/>}
      </div>
      <div className="content-container">
       { <NavbarTop isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>}
        
      </div>
      <div className="content-container">
        <MyAccount/>
      </div>
    </div>
  );
};

export default Account;
