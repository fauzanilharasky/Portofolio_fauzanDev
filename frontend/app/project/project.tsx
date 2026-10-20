import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { portfolioProjects } from './projects';

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <section className="projects all-projects-page" aria-labelledby="all-projects-title">
        <div className="all-projects-shell">
          <header className="all-projects-heading">
            <p className="all-projects-eyebrow">SELECTED WORKS</p>
            <h1 id="all-projects-title">All Projects</h1>
            <p className="all-projects-intro">
              A curated collection of my best projects, combining strategy,
              stunning aesthetics, and flawless execution.
            </p>
          </header>

          <div className="projects-grid all-projects-grid">
            {portfolioProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className={`project-img${project.coverImage ? '' : ' project-img-placeholder'}`}>
                  {project.coverImage ? (
                    <img src={project.coverImage} alt={project.title} />
                  ) : (
                    <span>{project.previewLabel}</span>
                  )}
                </div>
                <div className="project-content">
                  <div className="project-tags">
                    <span className="tag-yellow">{project.category}</span>
                    <span className="tag-yellow">{project.role}</span>
                  </div>
                  <div className="project-title-row">
                    <h2>{project.title}</h2>
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
                  <Link href="/#contact" className="project-link-btn">
                    Discuss Project
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}