import React, { useState } from "react";
import "./portfolio.css";

const FirButton = () => (
  <button className="fir-button">GET IN TOUCH</button>
);

const Portfole = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark-bg" : "light-bg"}>
      <header className="portfolio-header">
        <h1 className="portfolio-title">Portfolio</h1>
        <div className="portfolio-nav-container">
          <nav className="portfolio-nav">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </nav>
          <button className="toggle-btn" onClick={() => setDark((d) => !d)}>
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      <main className="portfolio-main">
        <h1 className="hero-title">Hi, I&apos;m Beka</h1>
        <div className="button-wrapper">
          <button className="spiderverse-button">
            VIEW MY WORK
            <div className="glitch-layers">
              <div className="glitch-layer layer-1">VIEW MY WORK</div>
              <div className="glitch-layer layer-2">VIEW MY WORK</div>
            </div>
            <div className="noise"></div>
            <div className="glitch-slice"></div>
          </button>
        </div>
        <h2 className="sec-title">About Me</h2>

        <div className="about-section-row">
          <div className="portfolio-about">
            <h2 className="about-title">Passionate Web Developer & Tech Creator</h2>
            <p className="about-text">
              With over 5 years of experience in web development, I specialize in creating responsive, accessible, and performant web applications using modern technologies.
            </p>
            <p className="about-text">
              I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.
            </p>

            <FirButton />
            <button className="sec-button">DOWNLOAD CV</button>

          </div>
          <div className="portfolio-image-container">
            <div className="first-card">
              <img className="icons" src="https://www.svgrepo.com/show/520527/arrows-h.svg" alt="" />
              <h2>Web Development</h2>
              <p>Creating responsive websites and web applications with modern frameworks.</p>
            </div>
            <div className="second-card">
              <img className="icons" src="https://www.svgrepo.com/show/500470/avatar.svg" alt="" />
              <h2>UI/UX Design</h2>
              <p>Designing intuitive user interfaces and seamless user experiences.</p>
            </div>
            <div className="third-card">
              <img className="icons" src="https://www.svgrepo.com/show/500480/briefcase.svg" alt="" />
              <h2>Project Management</h2>
              <p>Leading projects from conception to completion with agile methodologies.</p>
              </div>
          </div>
        </div>
      </main>

<section className="portfolio-skills">
  <div className="skills-container">
    <h1>My <span>Skills</span> </h1>
    <div className="skills-list">
      <button className="skills-button">All</button>
      <button className="skills-button">FrontEnd</button>
      <button className="skills-button">BackEnd</button>
      <button className="skills-button">Tools</button>
    </div>
  </div>

  <div className="skills-grid">
    <div className="skill-card">
      <h1>HTML/CSS</h1>
      <div className="line"></div>
      <p>95%</p>
    </div>

    <div className="skill-card">
      <h1>JavaScript</h1>
      <div className="line"></div>
      <p>90%</p>
    </div>

    <div className="skill-card">
      <h1>React</h1>
      <div className="line"></div>
      <p>85%</p>
    </div>

    <div className="skill-card">
      <h1>TypeScript</h1>
      <div className="line"></div>
      <p>80%</p>
    </div>

    <div className="skill-card">
      <h1>Tailwind CSS</h1>
      <div className="line"></div>
      <p>80%</p>
    </div>

    <div className="skill-card">
      <h1>Next.js</h1>
      <div className="line"></div>
      <p>75%</p>
    </div>

    <div className="skill-card">
      <h1>Node.js</h1>
      <div className="line"></div>
      <p>75%</p>
    </div>

    <div className="skill-card">
      <h1>Express</h1>
      <div className="line"></div>
      <p>70%</p>
    </div>

    <div className="skill-card">
      <h1>MongoDB</h1>
      <div className="line"></div>
      <p>70%</p>
    </div>

    <div className="skill-card">
      <h1>PostgreSQL</h1>
      <div className="line"></div>
      <p>65%</p>
    </div>

    <div className="skill-card">
      <h1>GraphQL</h1>
      <div className="line"></div>
      <p>65%</p>
    </div>

    <div className="skill-card">
      <h1>Git/GitHub</h1>
      <div className="line"></div>
      <p>70%</p>
    </div>

    <div className="skill-card">
      <h1>Docker</h1>
      <div className="line"></div>
      <p>55%</p>
    </div>

    <div className="skill-card">
      <h1>Figma</h1>
      <div className="line"></div>
      <p>70%</p>
    </div>

    <div className="skill-card">
      <h1>VS Code</h1>
      <div className="line"></div>
      <p>80%</p>
    </div>
  </div>
</section>

<div className="featured-projects-section">
  <h1>Featured <span>Projects</span></h1>
  <p>Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.</p>
  <div className="projects-row">
    <div className="project-card">
      <img src="" alt="" />
      <div className="project-card-techs">
        <span>React</span>
        <span>TailwindCSS</span>
        <span>Supabase</span>
      </div>

      <h2>SaaS Landing Page</h2>
      <p>A beautiful landing page app using React and Tailwind.</p>
    </div>
    <div className="project-card">
      <img src="" alt="" />
      <div className="project-card-techs">
        <span>TypeScript</span>
        <span>D3.js</span>
        <span>Next.js</span>
      </div>
      
      <h2>Orbit Analytics Dashboard</h2>
      <p>Interactive analytics dashboard with data visualization and filtering capabilities.</p>
    </div>
    <div className="project-card">
      <img src="" alt="" />
      <div className="project-card-techs">
        <span>React</span>
        <span>Node.js</span>
        <span>Stripe</span>
      </div>

      <h2>E-commerce Platform</h2>
      <p>Full-featured e-commerce platform with user authentication and payment processing.</p>
    </div>
  </div>
</div>

<div className="github-btn-wrapper">
  <button className="fir-button">Check my GitHub</button>
</div>


<div className="contact-section">
  <h1>Get In Touch</h1>
  <p>
    Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
  </p>
  <div className="contact-content">
    <div className="contact-info">
      <h3>Contact Information</h3>
      <div className="contact-item">
        <img src="https://www.svgrepo.com/show/511297/spiral-30.svg" alt="" />
        <div>
          <a href="mailto:Bek@gmail.com">Email</a>
          <span>Bek@gmail.com</span>
        </div>
      </div>
      <div className="contact-item">
        <img src="https://www.svgrepo.com/show/503000/call.svg" alt="" />
        <div>
          <a href="tel:+123456789">Phone</a>
          <span>+123456789</span>
        </div>
      </div>
      <div className="contact-item">
        <img src="https://www.svgrepo.com/show/503028/geolocation.svg" alt="" />
        <div>
          <a href="#">Location</a>
          <span>Kazakhstan, Almaty</span>
        </div>
      </div>
    </div>
    <form className="contact-form">
      <h3>Send a Message</h3>
      <label>
        Your Name
        <input type="text" placeholder="Your Name" />
      </label>
      <label>
        Your Email
        <input type="email" placeholder="Your Email" />
      </label>
      <label>
        Your Message
        <textarea placeholder="Your Message"></textarea>
      </label>
      <button className="fir-button" type="submit">Send Message</button>
    </form>
  </div>
</div>


<footer className="portfolio-footer">
  <div className="footer-content">
    <div className="footer-left">
      <h2>Follow Me</h2>
      <div className="social-icons">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://www.svgrepo.com/show/511297/spiral-30.svg" alt="GitHub" />
        </a>
        <a href="tel:+123456789">
          <img src="https://www.svgrepo.com/show/503000/call.svg" alt="Phone" />
        </a>
        <a href="https://maps.google.com/?q=Kazakhstan,Almaty" target="_blank" rel="noopener noreferrer">
          <img src="https://www.svgrepo.com/show/503028/geolocation.svg" alt="Location" />
        </a>
      </div>
    </div>
    <div className="footer-right">
      <p>&copy; 2025 Beka. All rights reserved.</p>
    </div>
  </div>
</footer>
</div>
  );
};

export default Portfole;