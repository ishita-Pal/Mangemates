
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2
import './Password.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Password1 = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setPassword(e.target.value);
  }

  const handleValidation = (e) => {
    e.preventDefault();
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (password === '') {
      setMessage('Please enter a password');
    } else if (password === 'iji') {
      setMessage('Valid');
      setIsValidPassword(true);
      navigate('/employee-form');
    } else if (regExp.test(password)) {
      setMessage('Password is valid');
    } else {
      setMessage('Password is not valid');
      // Display a SweetAlert2 error popup
      Swal.fire({
        icon: 'error',
        title: 'Incorrect Password',
        text: 'Please enter a valid password.',
        footer: '<a href="">Why do I have this issue?</a>'
      });
    }
  };

  return (
    <div className='wrapper d-flex justify-content-center align-items-center w-100' style={{ backdropFilter: 'blur(100)' }}>
      <div className='card p-5 w-50'>
        <form onSubmit={handleValidation}>
          <label htmlFor='password' className='form-control-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            onChange={handleChange}
            value={password}
          />
          <p>{message}</p>
          <button type='submit' className='btn btn-success'>
            Check
          </button>
        </form>
      </div>
    </div>
  );
};

export default Password1;
