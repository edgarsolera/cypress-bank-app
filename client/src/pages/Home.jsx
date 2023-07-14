import { useState } from "react";
import { NavbarSide, NavbarTop, Welcome } from "../config/components-config";


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
        <Welcome />
      </div>
    </div>
  );
  
}

export default Home