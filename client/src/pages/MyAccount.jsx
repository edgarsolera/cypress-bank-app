
import './MyAccount.css';
import Account from '../assets/Account.jpg';

const MyAccount = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get('name');
    const surname = formData.get('surname');
    const email = formData.get('email');
    const telephone = formData.get('telephone');

    const newUserData = {
      name: name,
      surname: surname,
      email: email,
      telephone: telephone
    }
    console.log(formData);
    console.log(newUserData);
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
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="surname" placeholder="Surname" />
          <input type="email" name="email" placeholder="Email" />
          <input type="tel" name="telephone" placeholder="Telephone Number" />
          <button className="my-account-save-button">SAVE</button>
        </form>
      </div>
     </div>
    </div>
  );
};

export default MyAccount;
