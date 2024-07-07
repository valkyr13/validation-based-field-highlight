import React, { useState } from 'react';
import ValidationComponent from './ValidationComponent';

const Form = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(null);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log('starting validation')
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    console.log('handling change')
    setEmail(e.target.value);
    setIsValid(null); // Reset validation state on input change
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const isEmailValid = validateEmail(email);
      setIsValid(isEmailValid);
    }
  };

  return (
    <ValidationComponent 
      validate={() => isValid}
      errorMessage="Please enter a valid email"
      successMessage="Email is valid"
    >
      <input 
        type="email" 
        value={email} 
        onChange={handleEmailChange}
        onKeyDown={handleKeyDown}
        style={{width: '100%', padding: '4px'}}
        placeholder="Enter your email"
      />
    </ValidationComponent>
  );
};

export default Form;
