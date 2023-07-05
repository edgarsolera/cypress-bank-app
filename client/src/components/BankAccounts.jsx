
import './BankAccounts.css'; 

const BankAccount = () => {
  const bankAccounts = [
    { id: 1, name: 'Bank of America' },
    { id: 2, name: 'Chase' },
    { id: 3, name: 'Wells Fargo' },
  ];

  return (
    <div className="container">
      <div className="header">
        <h2>Bank Accounts</h2>
        <button className="create-button">CREATE</button>
      </div>
      <ul className="account-list">
        {bankAccounts.map(account => (
          <li key={account.id} className="account-item">
            <span>{account.name}</span>
            <button className="delete-button">DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BankAccount;
