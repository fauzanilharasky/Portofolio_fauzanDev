import Link from 'next/link';
import { getProjects, Project } from '@/lib/api';

export const dynamic = 'force-dynamic';

const skills = [
  ['Programming', 'HTML, CSS, JavaScript, PHP', 'Next.js, Nest.js, Flutter, Tailwind'],
  ['Toolset', 'Firebase, Google Cloud, Google Colab', 'Android Studio, Figma, Git & GitHub'],
  ['Skillset', 'Critical Thinking', 'Problem Solving', 'Project Management'],
  ['IT Skills', 'Front-End & Back-End', 'Fullstack Web Developer', 'Android Developer'],
];

const experience = [
  ['Aug 2025 - Apr 2026', 'IT Developer', 'PT SMOE Indonesia (Seatrium)', 'Developed a full-stack web application from concept to deployment', 'Designed RESTful APIs and managed PostgreSQL data structures'],
  ['Aug 2024 - Jun 2025', 'Web Developer', 'Base Incubator', 'Built responsive online learning interfaces with Laravel, PHP, CSS, and JavaScript', 'Integrated course data, materials, videos, and learning progress through REST APIs'],
  ['Jun 2023 - Dec 2023', 'Flutter Developer', 'Batam State Polytechnic - Onicars', 'Developed cross-platform mobile applications with responsive interfaces', 'Maintained features, fixed bugs, and improved the user experience'],
  ['Jan 2021 - Apr 2022', 'Web Developer', 'PT. Inforsys Indonesia', 'Developed responsive front-end websites with HTML, CSS, and JavaScript', 'Collaborated with designers and back-end developers'],
];

export default async function HomePage() {
  let projects: Project[] = [];
  let loadError = false;
  try {
    projects = await getProjects();
  } catch {
    loadError = true;
  }

  return (
    <main>
      <nav className="navbar">
        <div className="nav-container shell">
          <Link href="#home" className="logo">Fauzan<span>.dev</span></Link>
          <div className="nav-links">
            {['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map((item) => (
              <a href={`#${item}`} key={item}>{item}</a>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="hero border-bottom-orange">
        <div className="hero-content shell">
          <div className="hero-text">
            <p className="greeting"><span className="line" /> HELLO, I&apos;M</p>
            <h1 className="highlight-orange">Fauzan Ilharasky</h1>
            <h2>Full-Stack Developer <span className="highlight-orange">|</span></h2>
            <p className="summary">I build exceptional digital experiences with modern technologies. Passionate about clean code, scalable solutions, and turning ideas into reality.</p>
            <div className="hero-actions"><a href="#contact" className="btn btn-primary-orange">HIRE ME <span>-&gt;</span></a><a href="#projects" className="btn btn-outline">VIEW MY WORK <span className="icon-blue">+</span></a></div>
            <div className="availability"><span className="dot" /> AVAILABLE FOR FREELANCE</div>
            <div className="working-availability"><span className="dot" /> AVAILABLE FOR WORKING</div>
            <div className="social-links"><a href="https://github.com/fauzanilhrasky" target="_blank" rel="noreferrer">GitHub</a><a href="https://linkedin.com/in/fauzan-ilharasky-3209902a2" target="_blank" rel="noreferrer">LinkedIn</a></div>
          </div>
          <div className="hero-image"><div className="glowing-circle"><img src="/assets/images/hero_profil.png" alt="Fauzan Ilharasky" className="profile-img" /></div><div className="floating-tech tech-react">React.js</div><div className="floating-tech tech-node">Node.js</div><div className="floating-tech tech-ts">TypeScript</div><div className="floating-tech tech-mongo">PostgreSQL</div></div>
        </div>
      </section>

      <section id="about" className="about section-padding"><div className="about-container shell"><div className="about-image-column"><div className="about-image-wrapper"><img src="/assets/images/About_me.jpeg" alt="Fauzan Ilharasky" /></div></div><div className="about-text-column"><div className="about-badge">ABOUT ME</div><h2 className="about-headline">I AM AVAILABLE FOR <span className="highlight">FULL-STACK WEB</span> PROJECTS</h2><p className="about-desc">I am a graduate of <strong>Batam State Polytechnic</strong> with a strong interest in software engineering technology. I possess skills in full-stack development and user interface design, alongside a strong drive to continuously learn, grow, and contribute to the IT industry.</p><div className="about-stats"><div className="stat-box glass"><h3>3.80</h3><p>GPA Score</p></div><div className="stat-box glass"><h3>4+</h3><p>Years Exp</p></div><div className="stat-box glass"><h3>5+</h3><p>Projects</p></div></div><a href="#contact" className="btn btn-primary">GET IN TOUCH -&gt;</a></div></div></section>

      <section id="skills" className="skills section-padding"><div className="section-header shell"><h2>Expertise &amp; <span className="highlight">Competence</span></h2><div className="underline" /></div><div className="tech-carousel"><div className="tech-track">{['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Next.js', 'Nest.js', 'Laravel', 'Flutter', 'HTML5', 'CSS3', 'JavaScript', 'PHP', 'Next.js', 'Nest.js', 'Laravel', 'Flutter'].map((item, index) => <span className="tech-item" key={`${item}-${index}`}>{item}</span>)}</div></div><div className="skills-grid shell">{skills.map((skill) => <div className="skill-card glass" key={skill[0]}><div className="card-icon">&lt;/&gt;</div><h3>{skill[0]}</h3>{skill.slice(1).map((line) => <p key={line}>{line}</p>)}</div>)}</div></section>

      <section id="projects" className="projects section-padding bg-grey"><div className="projects-header-wrapper shell"><div><span className="sub-title"><span className="dash" /> MY PORTFOLIO</span><h2>My Latest <span className="highlight-yellow">Projects</span></h2></div><Link href="/admin" className="btn-view-all">Add Project <span className="icon-circle">-&gt;</span></Link></div><div className="projects-grid shell">{loadError ? <p className="project-notice">API unavailable. Check NEXT_PUBLIC_API_URL.</p> : projects.length ? projects.map((project) => <article className="project-card" key={project.id}><div className="project-img">{project.cover_image ? <img src={project.cover_image} alt={project.title || project.slug} /> : <span>NO IMAGE</span>}</div><div className="project-content"><div className="project-tags"><span className="tag-yellow">{project.category || 'Web development'}</span>{project.role && <span className="tag-yellow">{project.role}</span>}</div><div className="project-title-row"><h3>{project.title || project.slug}</h3><Link href={`/projects/${project.id}`} className="project-link-btn">-&gt;</Link></div></div></article>) : <p className="project-notice">No projects found in database.</p>}</div></section>

      <section id="experience" className="experience section-padding"><div className="section-header shell"><h2>Professional <span className="highlight">Experience</span></h2><div className="underline" /></div><div className="timeline shell">{experience.map(([date, title, company, first, second]) => <div className="timeline-item" key={`${date}-${company}`}><div className="timeline-dot" /><div className="timeline-content glass"><span className="timeline-date">{date}</span><h3>{title}</h3><h4>{company}</h4><ul><li>{first}</li><li>{second}</li></ul></div></div>)}</div></section>

      <section id="education" className="education section-padding bg-grey"><div className="section-header shell"><h2>Education &amp; <span className="highlight">Certifications</span></h2><div className="underline" /></div><div className="edu-grid shell"><div className="edu-card glass"><div className="edu-icon">+</div><span className="edu-date">Jun 2022 - Now</span><h3>Batam State Polytechnic</h3><h4>Informatics Engineering - Software Engineering Technology</h4><p><strong>IPK:</strong> 3.80 / 4.00</p><p>Object Oriented Programming, AI, IOT, Web Development, Databases, and Software Testing.</p></div><div className="edu-card glass"><div className="edu-icon">+</div><span className="edu-date">May 2019 - Apr 2022</span><h3>SMKN 7 Batam</h3><h4>Software Engineer</h4><p>Programming, HTML, CSS, JavaScript, AngularJS, SQL, OOP, and PHP.</p></div><div className="edu-card glass"><div className="edu-icon">*</div><h3>Certifications &amp; Additional Info</h3><ul><li>Startup development by Kominfo Digital Startup 1000</li><li>Certificate of Competence - BNSP 2022</li><li>Fullstack Developer Associate - CertNexus 2026</li><li>Languages: Indonesian &amp; English</li></ul></div></div></section>

      <footer id="contact" className="footer"><div className="footer-content shell"><h2>Ready to build something amazing?</h2><p>Let&apos;s connect and discuss your next project.</p><a href="mailto:fzn.ilhrsky@gmail.com" className="btn btn-primary">Say Hello -&gt;</a><div className="footer-social"><a href="https://linkedin.com/in/fauzan-ilharasky" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/fauzanilhrasky" target="_blank" rel="noreferrer">GitHub</a></div></div><div className="footer-bottom">© 2026 Fauzan Ilharasky. All rights reserved.</div></footer>
    </main>
  );
}
