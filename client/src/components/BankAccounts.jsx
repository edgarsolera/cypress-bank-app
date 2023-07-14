import { useState } from 'react';
import './BankAccounts.css'; 

const BankAccount = () => {
    
   const [newBankName, setNewBankName] = useState('')
   const [bankAccounts, setBankAccounts] = useState([ 
    { id: 1, name: 'Bank of America' },
    { id: 2, name: 'Chase' },
    { id: 3, name: 'Wells Fargo' },
  ]);
   
const handleCreateAccount = () => {
   
    if (newBankName.trim() !== '') {
      const bankId = Math.floor(Math.random() * 1000000);
      const newAccount = {id: bankId, name: newBankName}
      
      
      setBankAccounts([...bankAccounts, newAccount]);
      setNewBankName('')
    }
  }

const handleDeleteAccount = (id) => {

  const newBankAccounts = bankAccounts.filter(item => item.id !== id)
  setBankAccounts(newBankAccounts)

}

  return (
    <div className="container">
      <div className="header">
        <h2>Bank Accounts</h2>
      </div>
      
      <ul className="account-list">
      <div className='account-creation'>
           <input
             onChange={e => setNewBankName(e.target.value)}
           />
           <button className="create-button" onClick={handleCreateAccount}>
             CREATE NEW BANK ACCOUNT
           </button>
        </div>
        {bankAccounts.map(account => (
          <li key={account.id} className="account-item">
            <span>{account.name}</span>
            <button className="delete-button" onClick={() => handleDeleteAccount(account.id)}>
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BankAccount;
