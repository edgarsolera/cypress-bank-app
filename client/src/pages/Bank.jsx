import { useState } from 'react';
import './Bank.css';
import NavbarSide from '../components/NavbarSide';
import NavbarTop from '../components/NavbarTop';
import BankAccount from '../components/BankAccounts';


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
        <BankAccount/>
      </div>
    </div>
  );
};

export default Bank;