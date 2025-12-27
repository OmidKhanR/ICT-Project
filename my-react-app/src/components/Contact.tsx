
import { Link } from 'react-router-dom'
import "./Contact"
const Contact = () => {
  return (
   <div className='large'>
      <div className='small'>
        <img src="ka.jpeg" alt="" className='ka' />
      <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/About">About</Link></li>
       <li><Link to="/Contact">Contact</Link></li>
       <li><Link to="/Login"></Link>Login</li>
        
      </ul>
   
      </div>
      <div className='main'> <h1>Contact Us</h1></div>
      
    </div>
  )
}

export default Contact
