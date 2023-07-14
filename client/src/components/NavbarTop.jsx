
import { Link } from 'react-router-dom';
import './NavbarTop.css';
import Bell from '../assets/Bell.svg'
import Menu from '../assets/Menu.svg'
import WhiteLogo from '../assets/WhiteLogo.svg'

// eslint-disable-next-line react/prop-types
const NavbarTop = ({ isMenuOpen, setIsMenuOpen }) => {

   const handleMenuToggle = () => {
              setIsMenuOpen(prevState => !prevState)
   }

  return (
    <nav className={isMenuOpen ? "navbar-top" : "navbar-top-long"}>
      <Link onClick={handleMenuToggle} className="navbar-top-logo"><img src={Menu}/></Link>
      <Link to="/login" className="navbar-top-menu"><img src={WhiteLogo}/></Link>
      <Link to="/" className="navbar-top-notifications"><img src={Bell}/></Link>
    </nav>
  );
}

export default NavbarTop;
