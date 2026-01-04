import { Link } from 'react-router-dom';
import './home.css'

const AboutPage = () => {
  (() => {

    // Animate counters on scroll
    
    
    
   {
      const updateCount = () => {
        
    
        
      };
      
      updateCount();
    };
  });


  


  const timelineData = [
    { year: 'Week 1', title: 'Project Planning', desc: 'Research and initial design concepts' },
    { year: 'Week 2', title: 'Homepage Development', desc: 'Built responsive homepage with modern UI' },
    { year: 'Week 3', title: 'About Page Creation', desc: 'Designed and implemented this About page' },
    { year: 'Week 4', title: 'Features Integration', desc: 'Added interactive elements and animations' },
  ];

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
    </div>



  return (

    
    
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-about">
        <div className="hero-content">
          <h1 className="hero-title">About Our ICT Project</h1>
          <p className="hero-subtitle">Transforming Homes with Smart Technology Solutions</p>
          <p className="hero-description">
            This project showcases innovative ICT solutions for modern smart homes, 
            demonstrating cutting-edge web technologies and user-centered design principles.
          </p>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="counter" data-target="500">0</span>
            <p>Lines of Code</p>
          </div>
          <div className="stat-item">
            <span className="counter" data-target="4">0</span>
            <p>Weeks Development</p>
          </div>
          <div className="stat-item">
            <span className="counter" data-target="7">0</span>
            <p>Technologies Used</p>
          </div>
        </div>
      </section>

    

      {/* Timeline */}
      <section className="timeline-section">
        <h2 className="section-title">Project Timeline</h2>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    


      {/* Future Plans */}
      <section className="future-section">
        <h2 className="section-title">Future Enhancements</h2>
        <div className="roadmap">
          <div className="roadmap-item completed">
            <div className="roadmap-status">✓</div>
            <div className="roadmap-content">
              <h4>Phase 1: Basic Structure</h4>
              <p>Homepage and navigation implementation</p>
            </div>
          </div>
          <div className="roadmap-item completed">
            <div className="roadmap-status">✓</div>
            <div className="roadmap-content">
              <h4>Phase 2: About Page</h4>
              <p>Design and implement detailed About page</p>
            </div>
          </div>
          <div className="roadmap-item current">
            <div className="roadmap-status">●</div>
            <div className="roadmap-content">
              <h4>Phase 3: Contact Form</h4>
              <p>Interactive contact form with validation</p>
            </div>
          </div>
          <div className="roadmap-item pending">
            <div className="roadmap-status">○</div>
            <div className="roadmap-content">
              <h4>Phase 4: Dashboard</h4>
              <p>User dashboard with analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="cta-section">
        <h2>Ready to Explore More?</h2>
        <p>Check out our smart home solutions and innovative features.</p>
        <div className="cta-buttons">
          <button className="btn-primary">View Homepage</button>
          <button className="btn-secondary">Contact Us</button>
        </div>
      </section>
    </div>
  );
}

export default AboutPage