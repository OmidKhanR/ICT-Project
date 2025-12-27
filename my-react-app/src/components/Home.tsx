
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
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
      <div className="main">
        <h1 style={{}}>ICT</h1>
      <h2>Information Communication Technolgy</h2>
      </div>
      <img src="3p.jpg" alt='' className='Pic3' />
      <img src="2p.jpg" alt=""  className='Pic2'/>
      <img src="1p.jpg" alt=""  className='Pic1'/>

      <div className="body">
        <h1>Latest News</h1>
        <div className="News1"><img src="N1.jpg" alt="" /><h2>AI Tools Added to Classrooms</h2><p>Many schools are starting to use AI-powered tools to help students learn faster. These tools can explain topics, check homework, and give personalized practice.</p></div>
        <div className="News2"><img src="N2.jpg" alt="" /><h2>Faster Internet with 5G Expansion</h2><p>Telecom companies are expanding 5G networks to more cities. This helps users enjoy faster downloads, smoother video calls, and better online gaming.</p></div>
        <div className="News3"><img src="N3.jpg" alt="" /><h2>Cybersecurity Awareness Increases</h2><p>More organizations are teaching people how to stay safe online. Simple steps like strong passwords and two-factor authentication are being promoted to reduce cyber threats.</p></div>
      </div>

      <div className="Footer"><p>@Copy Right ICT</p></div>
    </div>
  
  )
}

export default Home

