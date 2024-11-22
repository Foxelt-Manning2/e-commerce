import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useProducts } from './ProductContext'

function Login () {
  const { setUser, personalInfo, login} = useProducts()
  const [username, SetUsername] = useState('')
  const [password, SetPassword] = useState('')
  const ErrorRef = useRef('')
  const navigate = useNavigate()

  function authenticate () {
    return ValidateInput()
  }

  function ValidateInput () {
    var passed
    if (username < 1 || password < 1) {
      alert('Please Enter both password and username')
      passed = 'no'
    } else {
      const matchingAccount = personalInfo.find(
        account =>
          account.username === username && account.password === password
      )
      if (matchingAccount) {
        passed = 'yes'
        setUser(matchingAccount);
        login(matchingAccount);
      } else {
        ErrorRef.current.innerHTML = 'Wrong Username Or Password'
        passed = 'no'
      }
    }
    return passed
  }

  function handleSubmitBtn () {
    ErrorRef.current.innerHTML = ''
    const passed = authenticate()
    if (passed === 'yes') {
      navigate('/')
    } else if (passed === 'no') {
      SetPassword('')
      SetUsername('')
    }
  }

  return (
    <>
      <h1>Login</h1>
      <div className=' login '>
        <p className='text-red-600 font-extrabold' ref={ErrorRef}></p>
        <br />
        <p className='font-extrabold'>Username:</p>
        <input
          placeholder='Enter Your User'
          className='bg-white'
          value={username}
          onChange={e => SetUsername(e.target.value)}
        ></input>

        <p className='font-extrabold'>Password:</p>
        <input
          type='password'
          placeholder='Enter Your Password'
          className='bg-white'
          value={password}
          onChange={e => SetPassword(e.target.value)}
        ></input>
        <button className='button' onClick={() => handleSubmitBtn()}>
          Submit
        </button>
        <p>
          Do not have an account then{' '}
          <Link to={'/signup'} className='no-underline'>
            {' '}
            Sign Up
          </Link>
        </p>
      </div>
    </>
  )
}

export default Login
