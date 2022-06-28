import './App.css';
import {useState} from 'react'



function App() {

  const [usernameReg, setUsernameReg] = useState('')
  const [emailReg, setEmailReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

  const [emailLogin, setEmailLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')

  return (
    <div className="App">
        <h1>Registration</h1>
        <input className='inp'
          type='text'
          placeholder='Username'
          onChange={(e) => {
            setUsernameReg(e.target.value)
          }}
        />
        <input className='inp'
          placeholder='Email'
          type='email' 
          onChange={(e) => {
            setEmailReg(e.target.value)
          }}
        />
        <input className='inp'
          placeholder='Password'
          type='password' 
          onChange={(e) => {
            setPasswordReg(e.target.value)
          }}
        />
        <div className='superButton'>
          <button className="glow-on-hover">Sign up</button>
        </div>
      
        <h1>Logging in</h1>
        <input className='inp'
          type='email'
          placeholder='Email'
          onChange={(e) => {
            setEmailLogin(e.target.value)
          }}
        />
        <input className='inp'
          placeholder='Password'
          type='password' 
          onChange={(e) => {
            setPasswordLogin(e.target.value)
          }}
        />
        <div className='superButton'>
          <button className="glow-on-hover">Sign in</button>
        </div>
    </div>
  );
}

export default App;
