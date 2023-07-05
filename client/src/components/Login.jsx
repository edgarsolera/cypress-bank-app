import { useState } from 'react';
import './Login.css';
import Logo from '../assets/Logo.svg'


export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const userData = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      name: name,
      surname: surname
    };
    
    console.log('User Data:', userData);
  };

  return (
    <div className='main'>
      <div className='login'>
        <div className='title'>
          <img className='logo' src={Logo}/>
          <h3>Sign up</h3>
        </div>
        <div className='loginform'>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="surname">Last Name</label>
              <input
                type="text"
                id="surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">SIGN UP</button>
          </form>
        </div>
      </div>
    </div>
  );
};


