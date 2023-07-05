import './NavbarSide.css'
import Home from '../assets/Home.svg'
import User from '../assets/User.svg'
import Bank from '../assets/Bank.svg'
import Notifications from '../assets/Notifications.svg'
import Logout from '../assets/Logout.svg'
import Picture from '../assets/Picture.jpg'

const Navbar = () => {
  return (
    <nav className={"navbar"}>
      <div className="user-profile">
        <img src={Picture} alt="User Profile" className="user-profile-image" />
        <div className="user-details">
          <p className="user-name">Gumersildo Fernandez</p>
          <p className="user-username">@gufer98</p>
        </div>
      </div>
      <ul className="nav-links">
        <li className="nav-link">
          <img src={Home} alt="Home" className="nav-icon" />
          <span>Home</span>
        </li>
        <li className="nav-link">
          <img src={User} alt="My Account" className="nav-icon" />
          <span>My Account</span>
        </li>
        <li className="nav-link">
          <img src={Bank} alt="Bank" className="nav-icon" />
          <span>Bank</span>
        </li>
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

export default Navbar;
