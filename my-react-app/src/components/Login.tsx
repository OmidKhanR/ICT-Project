
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div>
        <div className='large'>
      <div className='small'>
        <img src="ka.jpeg" alt="" className='ka' />
        
      <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/About">About</Link></li>
       <li><Link to="/Contact">Contact</Link></li>
       <li><Link to="/Login">Login</Link></li>
        
      </ul>
   
      </div>

    </div>
    <div className="Login">

    <div className="action">
     <h2>Login Page</h2>
     <label className='User'>Username</label>
     <input type="text"  className='tt'/>
     <label className='Pass'>Password</label>
     <input type="Password" />
     <button>Login</button>
    <p>Dont have account</p><Link to="/" className='Link'>Sign Up</Link>
    </div>
    </div>

    </div>
  )
}

export default Login
