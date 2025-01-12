import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [balance, setBalance] = useState(0);

  const fetchBalance = async () => {
    try {
      const response = await axios.get('/api/wallet/balance', {
        params: { userId: 'user123' },
      });
      setBalance(response.data.balance);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>UPI to Bitcoin Wallet</h1>
      <button onClick={fetchBalance}>Check Balance</button>
      <p>Wallet Balance: ${balance}</p>
    </div>
  );
}

export default App;