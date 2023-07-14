import PropTypes from 'prop-types';
import { createContext } from "react";
import { useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [userData, setUserData] = useState({
       name: 'Gumersildo',
       surname: 'Fernandez',
       username: "gufer98",
       email: 'gumerfer@gmail.com',
       phone: '666 123 321'
    })

  return (
    <div>
        <LoginContext.Provider value={{ setUserData, userData }}>
            {children}
        </LoginContext.Provider>
    </div>
  )
}

LoginProvider.propTypes = {
    children: PropTypes.node.isRequired
}
