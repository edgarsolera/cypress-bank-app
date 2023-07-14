import { useState } from 'react';
import './Login.css'; // You can use the same css file if the styles are identical
import Logo from '../assets/Logo.svg'

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const userData = {
      email: email,
      password: password,
    };

    fetch('http://localhost:8080/api/v1/user/login', { // Change the endpoint to your authentication endpoint
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  return (
    <div className='main'>
      <div className='login'>
        <div className='title'>
          <img className='logo' src={Logo}/>
          <h3>Log in</h3>
        </div>
        <div className='loginform'>
          <form onSubmit={handleSubmit}>
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
            <button type="submit">LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
};
