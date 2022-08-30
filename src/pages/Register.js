import React, { useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setUser(() => {
      return { ...user, [id]: value }
    })
  }
  const handleSubmit = () => {
    axios.post('http://localhost:3000/users', user)
      .then(response => {
        // console.log(response);
        navigate('/login')
      }).catch(error => {
        console.log(error)
      });
    // console.log(users.data)
  }

  // const handleSubmit = async () => {
  //   const users = await axios.get('http://localhost:3000/users',user)
  //   console.log(users.data)
  // }


  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">

          <h3 className="Auth-form-title">  Registration</h3>

          <div className="form-group mt-3">
            <label className="form__label" >First Name </label>
            <input onChange={handleChange} className="form__input" type="text" id="firstName" placeholder="First Name" />
          </div>

          <div className="form-group mt-3">
            <label className="form__label" >Last Name </label>
            <input onChange={handleChange} type="text" name="" id="lastName" className="form__input" placeholder="LastName" />
          </div>

          <div className="form-group mt-3">
            <label className="form__label" >Email </label>
            <input onChange={handleChange} type="email" id="email" className="form__input" placeholder="Email" />
          </div>

          <div className="form-group mt-3">
            <label className="form__label" >Password </label>
            <input onChange={handleChange} className="form__input" type="password" id="password" placeholder="Password" />
          </div>



          <div className="d-grid gap-2 mt-3">
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Register</button>
          </div>

          <Link to="/login" className='btn btn-link'>Go to login page </Link>


        </div>
      </form>
    </div>
  )
}

export default Register
