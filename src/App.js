import React, {useState} from 'react';
// import './App.css';
import RegistrationForm from './components/RegistrationForm.js';
import Login from './components/Login';

function App() {

  const [currentForm, setForm] = useState('login');

  const toggleForm = (formName) => {
    setForm(formName);
  };

  return (
    <div className="App">
      {currentForm === 'login' ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <RegistrationForm onFormSwitch={toggleForm} />
      )}
      
    </div>
  );
}

export default App;
