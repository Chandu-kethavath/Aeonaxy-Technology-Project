import {useState} from 'react'
import './index.css'
import { Link } from 'react-router-dom'

import Validation from './Validation'

function LoginPage() {
  const [values, setValues] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  })

  const [errors, setError] = useState({})

  function handleChange(e) {
    setValues({...values, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError(Validation(values))
    
  }

return (
    <div className="l-login-container">
      <div className="l-background-image">
      <h1 className="l-bg-heading">
          Discover the worlds top <br /> designer & Creatives
        </h1>
      </div>
      <form className=" l-container-form" onSubmit={handleSubmit}>
        <h1 className='l-heading'>Sign up to Dribbble</h1>
        <div className=" l-name-and-username-container">
          <div className=" l-name">
            <label htmlFor="l-name">Name</label>
            <input
              value={values.name}
              className="l-text-1"
              placeholder="Enter your name"
              id="name"
              type="text"
              onChange={handleChange}
              name="name"
            />
            {errors.name && (
              <p style={{color: 'red', fontSize: '13px'}}>{errors.name}</p>
            )}
          </div>
          <div className="l-username">
            <label htmlFor="username">Username</label>
            <input
              value={values.username}
              className="l-text-1"
              placeholder="Enter your Username"
              id="username"
              type="text"
              onChange={handleChange}
              name="username"
            />
            {errors.username && (
              <p style={{color: 'red', fontSize: '13px'}}>{errors.username}</p>
            )}
          </div>
        </div>
        <div className="l-email">
          <label htmlFor="email">Email</label>
          <input
            className="l-text"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            id="email"
            name="email"
          />
          {errors.email && (
            <p style={{color: 'red', fontSize: '13px'}}>{errors.email}</p>
          )}
        </div>
        <div className="l-password">
          <label htmlFor="password">Password</label>
          <input
            checked="checked"
            className="l-text"
            value={values.password}
            placeholder="6+ Characters"
            id="password"
            type="password"
            onChange={handleChange}
            name="password"
          />
          {errors.password && (
            <p style={{color: 'red', fontSize: '13px'}}>{errors.password}</p>
          )}
        </div>
        <div className="l-checkout">
          <input className='l-input' type="checkbox" />
          <p className="l-checkbox">
            Creating an account means your okay with our
            <span>
              Terms of <br />
              Service Privacy policy,
            </span>
            and our default
            <span>
              Notification
              <br /> Settings.
            </span>
          </p>
        </div>
        <button className='l-button' type="submit">Create Account</button>
        <div>
          <p>
            This site is protected byreCAPTCHA and the Google
            <span>
              <br /> Privacy Policy
            </span>
            and <span> Terms of Service </span> apply.
          </p>
          <div className='l-link'> <Link to="/avatar" className='click'>Click Here</Link></div>
         
        </div>
      </form>
     
    </div>
  )
}
export default LoginPage
