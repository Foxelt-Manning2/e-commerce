/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useProducts } from './ProductContext'
import { useNavigate } from 'react-router-dom'

function SignUp () {
  const navigate =useNavigate();
  const { setPersonalInfo} = useProducts()
  const [m, setM] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirm: '',
    error: '',
    country: '',
    address: '',
    number: '',
    isChecked: false,
    isDisabled: false
  })

  const confirmPassword = confirm => {
    let passed
    if (
      !m.username ||
      !m.email ||
      !m.name ||
      !m.password ||
      !m.confirm ||
      !m.isChecked ||
      !m.address ||
      !m.country ||
      !m.number
    ) {
      passed = 'failed'
    } else if (confirm !== m.password) {
      passed = 'failed'
      setM(m => ({ ...m, error: 'Passwords do not match', isDisabled: true }))
    } else if (m.password.length < 8) {
      passed = 'failed'
      setM(m => ({
        ...m,
        error: 'Password length must be at least 8 and must contain letters,numbers and symbols',
        isDisabled: true
      }))}
      else if (passed === 'failed') {
        setM(m => ({
          ...m,
          error: 'Please fill all fields including the checkbox'
        }))
    } else {
      passed = 'won'
      setM(m => ({ ...m, error: '', isDisabled: false }))
    }
    console.log(m)
    return passed
  }

  useEffect(() => {
    if (m.confirm) {
      confirmPassword(m.confirm)
    }
    if (
      m.username ||
      m.email ||
      m.name ||
      m.password ||
      m.confirm ||
      m.isChecked ||
      m.address ||
      m.country ||
      m.number
    ) {
      confirmPassword(m.confirm)
    }
    confirmPassword(m.confirm)
  }, [
    m.confirm,
    m.email,
    m.isChecked,
    m.name,
    m.password,
    m.username,
    m.address,
    m.country,
    m.number
  ])

  function handleSubmit () {
    const passed = confirmPassword(m.confirm)
    if (passed === 'won') {
      setPersonalInfo(c=>[
          ...c,{
          name: m.name,
          email: m.email,
          number: m.number,
          country: m.country,
          address: m.address,
          username : m.username,
          password :m.password,
        }
      ])
      setM({
        name: '',
        email: '',
        username: '',
        password: '',
        confirm: '',
        error: '',
        country: '',
        address: '',
        number: '',
        isChecked: false,
        isDisabled: false
      })
    navigate('/login')
      
    } else if (passed === 'failed') {
      setM(m => ({
        ...m,
        error: 'Please fill all fields including the checkbox'
      }))
      setM(m => ({ ...m, IsDisabled: true }))
    }
  }

  return (
    <>
      <h1>Signup</h1>
      <div className='login'>
        <div className='align-middle place-self-center '>
          <p className='font-extrabold my-7'>Personal Information</p>
          <p>Full name:</p>
          <input
            type='text'
            placeholder='Enter your fullname'
            value={m.name}
            onChange={e => {
              setM(m => ({ ...m, name: e.target.value }))
            }}
          />
          <p>Email Address:</p>
          <input
            type='email'
            placeholder='Enter email address'
            value={m.email}
            onChange={e => {
              setM(m => ({ ...m, email: e.target.value }))
            }}
          />
          <p>Phone number</p>
          <input
            type='text'
            placeholder='Enter your Phone Number'
            value={m.number}
            onChange={e => {
              setM(m => ({ ...m, number: e.target.value }))
            }}
          />
          <p>Country</p>
          <input
            type='text'
            placeholder='Enter Country'
            value={m.country}
            onChange={e => {
              setM(m => ({ ...m, country: e.target.value }))
            }}
          />
          <p>Address</p>
          <textarea
            type='text'
            placeholder='Enter Your Address'
            value={m.address}
            onChange={e => {
              setM(m => ({ ...m, address: e.target.value }))
            }}
          />
        </div>

        <div className='align-middle place-self-center'>
          <p className='text-center font-extrabold my-7'>Account Details</p>
          <p>Username:</p>
          <input
            type='text'
            placeholder='Enter Username'
            value={m.username}
            onChange={e => {
              setM(m => ({ ...m, username: e.target.value }))
            }}
          />
          <p>Password:</p>
          <input
            type='password'
            placeholder='password must include both numbers and letters'
            value={m.password}
            onChange={e => {
              setM(m => ({ ...m, password: e.target.value }))
            }}
            pattern="[a-zA-Z0-9!@#$%^&*?><':|+_)-=~`,.]{8,}"
          />
          <p className='text-red-700 font-extrabold -mx-2'>{m.error}</p>
          <p>Confirm Password:</p>
          <input
            type='password'
            placeholder='Re-enter password'
            value={m.confirm}
            onChange={e => {
              setM(m => ({ ...m, confirm: e.target.value }))
              confirmPassword(e.target.value)
            }}
          />
        </div>

        <br />
        <label className=' text-blue-700'>
          <button
            className='red'
            disabled={m.isDisabled}
            onClick={() => {
              handleSubmit()
            }}
          >
            Submit
          </button>
          <br />
          <input
            type='checkbox'
            className='m-8 text-left text-pretty'
            onChange={() => {
              setM(m => ({ ...m, isChecked: !m.isChecked }))
            }}
          />
          Please agree to sign up to this dummy app
        </label>
      </div>
    </>
  )
}

export default SignUp
