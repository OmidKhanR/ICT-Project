
import { Link } from 'react-router-dom'
import './home.css'
const Signup = () => {
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
    <div className="Signup-Login">

    <div className="Signup-action">
     <h2>Create</h2>
      <label className='Signup-Fullname'>Full name</label>
     <input type="text"  className='text1'/>
     <label className='Signup-Username'>Username</label>
     <input type="text"  className='text2'/>
     <label className='Signup-Password'>Password</label>
     <input type="Password"/>
     <label className='Signup-ConfirmePassword'>Confrime Password</label>
     <input type="Password" className='Password1' />
     <button>Create</button>
    <Link to="/Login" className='Link'>Login</Link>
    </div>
    </div>

    </div>
  )
}

export default Signup
