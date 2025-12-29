
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div>
      
       <div className='large'>
      <div className='small'>
        <img src="ka.jpeg" alt="" className='ka' />
        
      <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/About">About</Link></li>
       <li><Link to="/Contact">Contact</Link></li>
       <li><Link to="/Login">Login </Link></li>
        
      </ul>
   
      </div>

    </div>
    </div>
  )
}

export default About
