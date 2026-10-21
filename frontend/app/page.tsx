import Link from 'next/link';
import Navbar from './components/Navbar';
import HomeFAQ from './components/HomeFAQ';
import Footer from './components/footer';
import { portfolioProjects } from './project/projects';

export default function HomePage() {

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero border-bottom-orange">
        <div className="hero-orbits" aria-hidden="true">
          <span className="hero-orbit-ring hero-orbit-ring-outer" />
          <span className="hero-orbit-ring hero-orbit-ring-middle" />
          <span className="hero-orbit-ring hero-orbit-ring-inner" />
          <span className="hero-orbit-ring hero-orbit-ring-dashed" />
        </div>
        <div className="hero-content shell">
          <div className="hero-text">
            <p className="greeting"><span className="line" /> Hello, i&apos;m</p>
            <h1 className="highlight-orange">
              Fauzan Ilharasky
              <span className="verified-badge" role="img" aria-label="Verified">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 1.5 14.2 3l2.7-.2 1.2 2.4 2.5 1.1-.2 2.7L22 11.2l-1.2 2.4.2 2.7-2.5 1.1-1.2 2.4-2.7-.2L12 21.5l-2.2-1.9-2.7.2-1.2-2.4-2.5-1.1.2-2.7L2 11.2l1.2-2.4L3 6.1l2.5-1.1 1.2-2.4 2.7.2L12 1.5Z" />
                  <path className="verified-badge-check" d="m8.2 11.9 2.4 2.4 5.3-5.4" />
                </svg>
              </span>
            </h1>
            <h2><span className="hero-title-gradient">Full-Stack Developer</span> <span className="highlight-orange">|</span></h2>
            <p className="summary">
              I build exceptional digital experiences with modern technologies. Passionate about clean code, scalable solutions, and turning ideas into reality.
            </p>
            <div className="hero-actions">
              <a href="/about" className="btn btn-primary-orange">
                HIRE ME
                <svg viewBox="0 0 24 24" aria-hidden="true" className="btn-icon-arrow">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="/project" className="btn btn-outline">VIEW MY WORK <span className="icon-blue">+</span></a>
            </div>
            <div className="availability"><span className="dot" /> AVAILABLE FOR FREELANCE</div>
            <div className="working-availability"><span className="dot" /> AVAILABLE FOR WORKING</div>
            <div className="social-links" aria-label="Social media links">
              <a href="https://github.com/fauzanilhrasky" target="_blank" rel="noreferrer" aria-label="Visit my GitHub profile" title="GitHub">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.2-3.37-1.2-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1.01.08 1.54 1.07 1.54 1.07.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 7.13c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.81-4.58 5.07.36.32.68.95.68 1.92v2.84c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" /></svg>
              </a>
              <a href="https://linkedin.com/in/fauzan-ilharasky-3209902a2" target="_blank" rel="noreferrer" aria-label="Visit my LinkedIn profile" title="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.02 3.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5ZM3 9h4v12H3V9Zm6.5 0h3.83v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.96V21h-4V9Z" /></svg>
              </a>
            </div>
          </div>
          <div className="hero-image"><div className="glowing-circle"><img src="/assets/images/hero_profil.png" alt="Fauzan Ilharasky" className="profile-img" /></div>
            <div className="floating-tech tech-react"><img src="https://cdn.simpleicons.org/react/61DAFB" alt="" aria-hidden="true" />React.js</div>
            <div className="floating-tech tech-node"><img src="https://cdn.simpleicons.org/nodedotjs/83CD29" alt="" aria-hidden="true" />Node.js</div>
            <div className="floating-tech tech-ts"><img src="https://cdn.simpleicons.org/typescript/3178C6" alt="" aria-hidden="true" />TypeScript</div>
            <div className="floating-tech tech-mongo"><img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="" aria-hidden="true" />PostgreSQL</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about section-padding">
        <div className="about-container shell">
          <div className="about-copy">
            <h3 className="about-eyebrow"> ABOUT ME</h3>
            <h2 className="about-headline">
              Building Solutions That <span>Make an Impact</span>
            </h2>
            <p className="about-desc">
              I&apos;m a passionate Full Stack Developer based in Batam, Indonesia.
              I specialize in building scalable web applications using modern technologies.
              With a strong eye for design and a love for clean code, I help businesses bring their ideas to life.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>3+ Years of Experience</span>
              </div>

              <div className="highlight-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
                <span>Available for Freelance</span>
              </div>

              <div className="highlight-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14">
                  </path><polyline points="22 4 12 14.01 9 11.01">
                  </polyline>
                </svg>
                <span>5+ Projects Completed</span>
              </div>

              <div className="highlight-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                <span>Clients Worldwide</span>
              </div>
            </div>
            <a href="/assets/resume/CV Lamaran Kerja_Fauzan Ilharasky.pdf" className="about-download" download>
              Download CV
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </a>
          </div>

          {/* Contact and Profile Details */}
          <aside className="about-details" aria-label="Contact and profile details">
            <div className="about-detail">
              <span className="about-detail-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
              <p><span>Location :</span><strong>Batam, Indonesia</strong></p>
            </div>
            <div className="about-detail">
              <span className="about-detail-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span>
              <p><span>Email :</span><a href="mailto:fzn.ilhrsky@gmail.com">fzn.ilhrsky@gmail.com</a></p>
            </div>
            <div className="about-detail">
              <span className="about-detail-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span>
              <p><span>Phone :</span><strong>+62 852-6442-4281</strong></p>
            </div>
            <div className="about-detail">
              <span className="about-detail-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></span>
              <p><span>Languages :</span><strong>Indonesian, English</strong></p>
            </div>
          </aside>
        </div>
      </section>

      {/* Metrics Section */ }
      <section className="about-metrics" aria-label="Portfolio statistics">
        <div className="shell about-metrics-inner">
          <div className="metric-item">
            <strong>5+</strong>
            <span>Happy Clients</span>
          </div>
          <div className="metric-item">
            <strong>5+</strong>
            <span>Projects Completed</span>
          </div>
          <div className="metric-item">
            <strong>3+</strong>
            <span>Years Experience</span>
          </div>
          <div className="metric-item">
            <strong>98%</strong>
            <span>Client Satisfaction</span>
          </div>
          <div className="metric-item">
            <strong>24/7</strong>
            <span>Support Available</span>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="projects" className="projects section-padding">
        <div className="projects-header-wrapper shell">
          <div><span className="sub-title">
            <span className="dash" /> MY PORTFOLIO</span>
            <h2 className='highlight-white'>My Latest <span className="highlight-yellow">Projects</span></h2>
          </div>
        </div>
        <div className="projects-grid shell">
          {portfolioProjects.slice(0, 3).map((project) => <article className="project-card" key={project.title}>
            <div className={`project-img${project.coverImage ? '' : ' project-img-placeholder'}`}>
              {project.coverImage ?
                <img src={project.coverImage} alt={project.title} /> :
                <span>Dashboard Preview</span>}
            </div>
            <div className="project-content">
              <div className="project-tags">
                <span className="tag-yellow">{project.category}</span>
                <span className="tag-yellow">{project.role}</span>
              </div>
              <div className="project-title-row">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <ul className="project-tech-list" aria-label={`Technologies used for ${project.title}`}>
                {project.technologies.map((technology) => (
                  <li key={technology.name} title={technology.name}>
                    <img
                      src={`https://cdn.simpleicons.org/${technology.icon}`}
                      alt={technology.name}
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
              <Link href="#contact" className="project-link-btn">
                Explore Project
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>)}
        </div>
        <div className="projects-cta shell">
          <Link href="/project" className="projects-cta-button">
            Explore 6+ Projects
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
      

      {/* Services */}
      <section className="services-section">
        <div className="shell">
          <div className="services-label">WHAT I DO</div>
          <h2 className="services-title"><span>Services</span> I Offer</h2>

          <div className="services-grid">
            <article className="service-card">
              <div className="service-heading">
                <div className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M4 17.5V6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5Z" /><path d="M8 10.5h8M8 14h5.5" /><path d="m15 4 5 5" /><path d="M14 8.5h5.5V4" /></svg>
                </div>
                <div>
                  <h3>Custom Web Design</h3>
                  <p>A distinctive design shaped according to your wishes.</p>
                </div>
              </div>
              <ul className="service-list">
                <li>Brand-focused layouts</li>
                <li>Portfolio and company sites</li>
                <li>Landing page design</li>
                <li>Wireframes and prototypes</li>
              </ul>
            </article>

            <article className="service-card">
              <div className="service-heading">
                <div className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M9 18l-6-6 6-6" /><path d="M15 6l6 6-6 6" /><path d="M13 5l-2 14" /></svg>
                </div>
                <div>
                  <h3>Web Development</h3>
                  <p>A modern website designed for real-world use.</p>
                </div>
              </div>
              <ul className="service-list">
                <li>Business websites</li>
                <li>E-commerce stores</li>
                <li>Landing pages</li>
                <li>Custom websites</li>
                <li>Website maintenance</li>
              </ul>
            </article>

            <article className="service-card">
              <div className="service-heading">
                <div className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8" /><path d="M12 16v4" /></svg>
                </div>
                <div>
                  <h3>Responsive Design</h3>
                  <p>A consistent experience on every screen size.</p>
                </div>
              </div>
              <ul className="service-list">
                <li>Mobile-first layouts</li>
                <li>Tablet and desktop adaptation</li>
                <li>Cross-browser compatibility</li>
                <li>Accessible components</li>
              </ul>
            </article>

            <article className="service-card">
              <div className="service-heading">
                <div className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 8h10M7 12h10M7 16h5" /></svg>
                </div>
                <div>
                  <h3>UI/UX Design</h3>
                  <p>Clear interfaces designed around user needs.</p>
                </div>
              </div>
              <ul className="service-list">
                <li>User flows and wireframes</li>
                <li>Interface design</li>
                <li>Interactive prototypes</li>
                <li>Usability improvements</li>
              </ul>
            </article>

            <article className="service-card">
              <div className="service-heading">
                <div className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M12 3l7 4v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V7l7-4Z" /><path d="M9 12l2 2 4-4" /></svg>
                </div>
                <div>
                  <h3>Website Maintenance</h3>
                  <p>Reliable ongoing care to keep your site healthy.</p>
                </div>
              </div>
              <ul className="service-list">
                <li>Bug fixes and updates</li>
                <li>Performance monitoring</li>
                <li>Security and backups</li>
                <li>Content updates</li>
              </ul>
            </article>
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="process-section" aria-labelledby="process-title">
        <div className="process-inner">
          <p className="process-kicker">MY PROCESS</p>
          <h2 className="process-title" id="process-title">A Simple, Proven Process</h2>
          <ol className="process-steps">
            <li className="process-step">
              <span className="process-number">01.</span>
              <h3>Discover</h3>
              <p>Learn about your business, goals, and target audience.</p>
            </li>
            <li className="process-step">
              <span className="process-number">02.</span>
              <h3>Plan</h3>
              <p>Create a strategy and wireframes to map out the project.</p>
            </li>
            <li className="process-step">
              <span className="process-number">03.</span>
              <h3>Design</h3>
              <p>Design a polished experience that fits your brand and users.</p>
            </li>
            <li className="process-step">
              <span className="process-number">04.</span>
              <h3>Develop</h3>
              <p>Bring the design to life with clean, efficient code.</p>
            </li>
            <li className="process-step">
              <span className="process-number">05.</span>
              <h3>Launch</h3>
              <p>Test thoroughly, then launch your website for the world.</p>
            </li>
          </ol>
        </div>
      </section>

      <HomeFAQ />

      <Footer />
    </main>
  );
}
