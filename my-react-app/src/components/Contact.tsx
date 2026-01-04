import { FaMapMarkerAlt,FaPhone,FaEnvelope} from 'react-icons/fa'
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
       <li><Link to="/Login">Login</Link></li>
        
      </ul>
   
      </div>
      <div className='main'> <h1>Contact Us</h1></div>

      <div className="Cont1"> <FaMapMarkerAlt className='Icon'/> 
      <h2>PD 12</h2>
      <h3>Kabul,Afghanistan</h3>
      
      </div>
      <div className="Cont2"><FaPhone className='Icon2'/>
      <h2>0784800190</h2>
     
      </div>
      <div className="Cont3"><FaEnvelope className='Icon3' /> 
       <h3>omidkhanrl@gmail.com</h3>
      </div>
      
    </div>
  )
}

export default Contact
