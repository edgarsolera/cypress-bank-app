import './MyAccount.css';
import Account from '../assets/Account.jpg';
import { useContext } from 'react';
import { LoginContext } from '../context/login-context';

const MyAccount = () => {

  const { userData, setUserData } = useContext(LoginContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get('name');
    const surname = formData.get('surname');
    const email = formData.get('email');
    const telephone = formData.get('telephone');

    const newUserData = {
      ...userData,
      name: name || userData.name,
      surname: surname || userData.surname,
      email: email || userData.email,
      telephone: telephone || userData.telephone
    }
    console.log(formData);
    setUserData(newUserData)
  }

  return (
    <div className="my-account-main">
      <div className="my-account-container">
      <div className="my-account-header">
        <h2>User Settings</h2>
      </div>
      <div className="my-account-content">
        <div className="my-account-image">
          <img src={Account} alt="User Profile" />
        </div>
        <form onSubmit={handleSubmit} className="my-account-form">
          <input type="text" name="name" placeholder={userData.name} />
          <input type="text" name="surname" placeholder={userData.surname} />
          <input type="email" name="email" placeholder={userData.email} />
          <input type="tel" name="telephone" placeholder={userData.phone} />
          <button className="my-account-save-button">SAVE</button>
        </form>
      </div>
     </div>
    </div>
  );
};

export default MyAccount;
