import "./home.css";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      {/* Header Section - separate from main content */}
      <div className='large'>
        <div className='small'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Login">Login</Link></li>
          </ul>
        </div>
      </div>

      {/* About page content */}
      <div className="about-container">
        <main className="about-content">
          <section className="about-hero">
            <h1>About Our ICT Project</h1>
            <p>Transforming ideas into digital solutions through innovative technology</p>
          </section>

          <section className="about-details">
            <div className="about-card">
              <h2>Our Mission</h2>
              <p>To develop cutting-edge ICT solutions that address real-world challenges and enhance user experiences through innovative technology and efficient design.</p>
            </div>

            <div className="about-card">
              <h2>Our Vision</h2>
              <p>To become a leading digital solution provider that bridges the gap between technology and practical application in everyday life.</p>
            </div>

            <div className="about-card">
              <h2>Project Objectives</h2>
              <ul className="objectives-list">
                <li>Create user-friendly digital interfaces</li>
                <li>Implement scalable and efficient solutions</li>
                <li>Ensure cross-platform compatibility</li>
                <li>Provide secure and reliable services</li>
                <li>Promote digital literacy and accessibility</li>
              </ul>
            </div>

            <div className="about-card">
              <h2>Technologies Used</h2>
              <div className="tech-stack">
                <span className="tech-item">React</span>
                <span className="tech-item">CSS3</span>
                <span className="tech-item">JavaScript</span>
                <span className="tech-item">HTML5</span>
                <span className="tech-item">Node.js</span>
                <span className="tech-item">Git</span>
              </div>
            </div>

            <div className="about-card">
              <h2>Development Team</h2>
              <p>Our team consists of passionate developers, designers, and ICT specialists dedicated to creating exceptional digital experiences. We believe in collaborative development and continuous learning.</p>
            </div>

            <div className="about-card">
              <h2>Contact Information</h2>
              <p>For more information about our ICT project, please visit our <Link to="/contact">Contact Page</Link> or reach out to us directly.</p>
            </div>
          </section>
        </main>

        <footer className="about-footer">
          <p>&copy; {new Date().getFullYear()} ICT Project. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default About;