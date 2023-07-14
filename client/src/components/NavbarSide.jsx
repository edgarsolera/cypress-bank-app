import './NavbarSide.css'
import { Link } from 'react-router-dom'
import { Home, User, Bank, Notifications, Logout, Picture } from '../config/assets-config'
import { useContext } from 'react'
import { LoginContext } from '../context/login-context'

const NavbarSide = () => {
  const { userData } = useContext(LoginContext);
  
  return (
    <nav className="navbar">
      <div className="user-profile">
        <img src={Picture} alt="User Profile" className="user-profile-image" />
        <div className="user-details">
          <p className="user-name">{`${userData.name} ${userData.surname}`}</p>
          <p className="user-username">{`@${userData.username}`}</p>
        </div>
      </div>
      <ul className="nav-links">
      <Link to={'/home'}> <li className="nav-link">
          <img src={Home} alt="Home" className="nav-icon" />
          <span>Home</span>
        </li></Link>
        <Link to={'/account'}> <li className="nav-link">
          <img src={User} alt="My Account" className="nav-icon" />
          <span>My Account</span>
        </li></Link>
        <Link to={'/bank_account'}><li className="nav-link">
          <img src={Bank} alt="Bank" className="nav-icon" />
          <span>Bank Account</span>
        </li></Link> 
        <li className="nav-link">
          <img src={Notifications} alt="Notifications" className="nav-icon" />
          <span>Notifications</span>
        </li>
        <li className="nav-link-button">
          <img src={Logout} alt="Logout" className="nav-icon" />
          <span>Logout</span>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarSide;
