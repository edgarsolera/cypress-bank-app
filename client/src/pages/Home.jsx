import { useState } from 'react';
import './Home.css';
import NavbarSide from '../components/NavbarSide';
import NavbarTop from '../components/NavbarTop';
import MyAccount from './MyAccount';

const Home = () => {
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

export default Home;
