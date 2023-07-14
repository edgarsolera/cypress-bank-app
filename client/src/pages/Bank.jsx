import { useState } from 'react';
import './Bank.css';
import { NavbarSide, NavbarTop, BankAccounts } from '../config/components-config';

const Bank = () => {
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
        <BankAccounts/>
      </div>
    </div>
  );
};

export default Bank;