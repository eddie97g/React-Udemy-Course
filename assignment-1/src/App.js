import React, { useState } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput';

function App() {

  const [outputState, setOutputState] = useState({
    username: 'eddiegonzalezjr'
  })

  const usernameHandler = (event) => {
    setOutputState({
      username: event.target.value
    })
  }
  return (
    <div className="App">
      <UserInput username={outputState.username} usernameHandler={usernameHandler} />
      <UserOutput username={outputState.username} />
      <UserOutput username={outputState.username} />
      <UserOutput username={outputState.username} />
    </div>
  );
}

export default App;
