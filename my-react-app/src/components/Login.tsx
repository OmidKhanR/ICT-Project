
import { Link } from 'react-router-dom'
import "./home.css"
const Contact = () => {
  return (
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
      <div className='main'><h1>Now i am in Login</h1></div>
    
    </div>
  )
}

export default Contact

