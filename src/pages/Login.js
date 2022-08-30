import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    const { id, value } = e.target
    setLogin(() => { return { ...login, [id]: value } })
  }

  const HandleClick = async () => {
    const userList = await axios.get('http://localhost:3000/users')

    let User = userList.data.find(({ email, password }) => email === login.email && password === login.password)
    // console.log(User);
    if (User !== undefined) {
      navigate('/products')
    } else {
      alert('please verify your email and password')
    }
  }



  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>

          <div className="form-group mt-3">
            <label>Email address</label>
            <input onChange={handleChange} id='email' type="email" className="form-control mt-1" placeholder="Enter email" />
          </div>

          <div className="form-group mt-3">
            <label>Password</label>
            <input onChange={handleChange} id='password' type="password" className="form-control mt-1" placeholder="Enter password" />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button onClick={HandleClick} type="button" className="btn btn-primary">Submit</button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default Login;
