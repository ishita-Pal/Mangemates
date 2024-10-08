// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import './login.css';
// import axios from 'axios';
// import {useNavigate} from 'react-router-dom';

// const Login = () => {
//     //!To control data updation and editing in UI which is done by React

//     const [values, setValues] = useState({   //? This hook is responsible to change the state. This change is propogated in UI(DOM) 
//         email: '',
//         password: ''

//         //basically jaha jaha i have values variable then it will change 
//     })
//     const navigat=useNavigate();
//     const handleSubmit=(event)=>{
//       event.preventDefault();   //!Before submitting check validation
//       axios.post('http://localhost:3000/auth/adminlogin',values) // we are passing our object values
//       .then(result =>{
// navigat('/dashboard')
//       })
//       .catch(err =>console.log(err))   //?executed if there is an error during the POST request.

//     }

//   return (
//     <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
//       <div className='p-3 rounded w-25 border loginForm'>
//         <h2>Login Page</h2>
//         <form onSubmit={handleSubmit}>
//           <div className='mb=3'>
//             <label htmlFor='email'><strong>Email:</strong></label>
//             <input type='email' name='email' autoComplete='off' placeholder='Enter Email' onChange={(e) =>setValues({...values,email:e.target.value})} className='form-control rounded-0' />
//           </div>

//           <div className='mb-3'>
//             <label htmlFor='password'><strong>Password</strong></label>
//             <input type='password' name='password' autoComplete='off' placeholder='Enter Password' onChange={(e) =>setValues({...values,password:e.target.value})}className='form-control rounded-0' />
//           </div>

//           <button className='btn btn-success w-100 rounded-0'>Log in</button>
//           <div className='mb-1'>
//             <input type='checkbox' name='tick' />
//             <label htmlFor='tick'>You agree with terms & conditions</label>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from 'react'
import './login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
   
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/auth/adminlogin', values)
        .then(result => {
            if(result.data.loginStatus) {
                localStorage.setItem("valid", true)
                navigate('/dashboard/home')
            } else {
                setError(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-3 rounded w-25 border loginForm'>
            <div className='text-warning'> {/* if we want red then text-danger class of bootstrap must be used*/}
                {error && error}
            </div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email:</strong></label>
                    <input type="email" name='email' autoComplete='off' placeholder='Enter Email'
                     onChange={(e) => setValues({...values, email : e.target.value})} className='form-control rounded-0'/>
                </div>
                <div className='mb-3'> 
                    <label htmlFor="password"><strong>Password:</strong></label>
                    <input type="password" name='password' placeholder='Enter Password'
                     onChange={(e) => setValues({...values, password : e.target.value})} className='form-control rounded-0'/>
                </div>
                <button className='btn btn-success w-100 rounded-0 mb-2'>Log in</button>
                <div className='mb-1'> 
                    <input type="checkbox" name="tick" id="tick" className='me-2'/>
                    <label htmlFor="password">You are Agree with terms & conditions</label>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
