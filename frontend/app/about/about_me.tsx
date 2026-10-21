import Footer from '../components/footer';
import Navbar from '../components/Navbar';


const technologies = [
	['JavaScript', 'javascript/F7DF1E'],
	['TypeScript', 'typescript/3178C6'],
	['React', 'react/61DAFB'],
	['Next.js', 'nextdotjs/FFFFFF'],
	['NestJS', 'nestjs/E0234E'],
	['Express', 'express/FFFFFF'],
    ['Angular', 'angular/DD0031'],
    ['PHP', 'php/777BB4'],
    ['Laravel', 'laravel/FF2D20'],
    ['Flutter', 'flutter/02569B'],
    ['Dart', 'dart/0175C2'],
	['Tailwind CSS', 'tailwindcss/06B6D4'],
	['Docker', 'docker/2496ED'],
	['Git', 'git/F05032'],
    ['GitHub', 'github/ffff'],
    ['MongoDB', 'mongodb/47A248'],
	['PostgreSQL', 'postgresql/4169E1'],
    ['MySQL', 'mysql/4479A1'],
    ['Firebase', 'firebase/FFCA28'],
    ['Google Cloud', 'googlecloud/4285F4'],
    ['Vercel', 'vercel/fffff'],
    ['Swagger', 'swagger/85EA2D'],
	['Figma', 'figma/F24E1E'],
];

const technologyRows = [technologies.slice(0, 12), technologies.slice(12)];

const certificates = [
	{ title: 'Startup Development', issuer: 'Kominfo Digital Startup 1000', year: null },
	{ title: 'Certificate of Competence', issuer: 'BNSP', year: '2022' },
	{ title: 'Fullstack Developer Associate', issuer: 'CertNexus', year: '2026' },
];

type ExperienceItem = {
	period: string;
	year: string;
	title: string;
	company: string;
	details: [string, string];
};

const experienceItems: ExperienceItem[] = [
	{
		period: 'Aug 2025 - Apr 2026',
		year: '2025',
		title: 'IT Developer',
		company: 'PT. SMOE INDONESIA ( Seatrium )',
		details: [
			'During my internship at PT SMOE Indonesia (Seatrium) from August 2025 to April 2026, I worked as an IT Developer / Full-Stack Developer, contributing to the development of a web-based information system for monitoring Mechanical Completion activities in construction projects. I was responsible for developing responsive user interfaces using Next.js, building backend services with NestJS, designing and managing PostgreSQL databases, and integrating REST APIs to support application functionality and data communication.',
            'I also implemented features for ITR data management, inspection assignments, document status monitoring, and transmittal management. In addition, I performed functional testing, debugging, and system improvements to ensure application reliability and meet operational requirements. Through this experience, I strengthened my technical skills in full-stack development, database management, API integration, and problem-solving while collaborating with supervisors and team members to deliver effective software solutions.'
		],
	},
	{
		period: 'Aug 2024 - Jun 2025',
		year: '2024',
		title: 'Web Application Developer',
		company: 'Base Incubator',
		details: [
			'During my time here, I was responsible for designing and developing an e-learning website for a corporate client specializing in online tutoring. I was involved in the entire development process—ranging from feature implementation and database management to API testing to ensure the system functioned smoothly. My development toolkit included javascript ,PHP, Laravel, MySQL, Tailwind CSS, Laragon, JWT, and Postman.',
			'Upon completing the internship, I was entrusted to continue the project on a freelance basis for six months. During this period, I focused on developing and refining website features until the projects completion. This experience enabled me to enhance my technical skills, gain insight into client needs, and cultivate the ability to execute projects in a structured and responsible manner.',
		],
	},
	{
		period: 'Jan 2021 - Apr 2022',
		year: '2021',
		title: 'Junior Coder Intern',
		company: 'PT. Inforsys Indonesia',
		details: [
			'During my four-month internship at PT. Inforsys Indonesia, a software development company, I gained my first professional experience in the programming field while pursuing my vocational high school education. Under the guidance of company mentors, I was responsible for updating and improving the appearance of the companys website to create a more organized, visually appealing, and user-friendly interface.',
			'Throughout this internship, I worked with HTML, CSS, JavaScript, AngularJS, and MySQL to support website development and database management. This experience strengthened my foundational programming skills, introduced me to professional software development practices, and motivated me to continue growing as a Web Developer.',
		],
	},
];

export default function AboutMePage() {
	return (
		<main className="about-page">
			<Navbar />
			<section className="about-intro section-padding" aria-labelledby="about-intro-title">
				<div className="about-intro-inner">
					<div className="about-intro-copy">
						<p className="about-intro-label">ABOUT ME</p>
						<h1 id="about-intro-title">Building useful things with <span>technology</span></h1>
						<p>
							I&apos;m Fauzan, a Full-Stack Developer with a passion for building modern, scalable, and user-focused web applications. With hands-on experience in frontend and backend development, I enjoy turning ideas and business requirements into reliable digital solutions.
                            My experience includes developing web applications, REST APIs, database systems, authentication, and responsive interfaces using technologies such as Next.js, NestJS, Laravel, PostgreSQL, and MySQL. I'm always eager to learn new technologies, solve complex problems, and create software that delivers real value.
						</p>
						<p>
							My experience spans web and mobile development, from shaping ideas and user interfaces to building APIs and delivering production-ready applications.
						</p>
					</div>
					<div className="about-intro-image">
						<img src="/assets/images/About_me.jpeg" alt="Fauzan Ilharasky" />
					</div>
				</div>
			</section>

            {/* skills */}
			<section className="skills section-padding about-skills">
				<div className="section-header shell about-skills-header">
					<h2>Skills &amp; <span className="highlight">Technologies</span></h2>
                    <strong>The skills, tools and technologies I work with:</strong>
				</div>
				<div className="about-tech-marquee" aria-label="Technology stack">				
					<ul className="about-tech-accessible-list">
						{technologies.map(([name]) => <li key={name}>{name}</li>)}
					</ul>
					<div className="about-tech-rows" aria-hidden="true">
						{technologyRows.map((row, rowIndex) => (
							<div className={`about-tech-row ${rowIndex === 0 ? 'moves-right' : 'moves-left'}`} key={rowIndex}>
								<div className="about-tech-track">
									{[0, 1, 2, 3].map((copy) => (
										<div className="about-tech-group" key={copy} aria-hidden={copy > 0}>
											{row.map(([name, icon]) => (
												<div className="about-tech-item" key={name}>
													<img className="about-tech-logo" src={`https://cdn.simpleicons.org/${icon}`} alt="" loading="lazy" />
													<span className="tech-name">{name}</span>
												</div>
											))}
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>


            {/* EXPERIENCE */}
			<section id="experience" className="experience section-padding about-experience">
				<div className="section-header shell about-experience-header">
					<h2>Work <span className='work'>Experience</span></h2>
                    <span>Where I've worked and what I did there.</span>
				</div>
				<div className="timeline shell about-timeline">
					{experienceItems.map(({ period, year, title, company, details }) => (
						<article className="timeline-item about-timeline-item" key={`${year}-${company}`}>
							<span className="about-timeline-year">{year}</span>
							<div className="timeline-dot" />
							<div className="timeline-content glass about-timeline-content">
								<span className="about-timeline-period">{period}</span>
								<h3>{company}</h3>
								<h4 className='dot'>{title}</h4>
								<ul>
									{details.map((detail) => <li key={detail}>{detail}</li>)}
								</ul>
							</div>
						</article>
					))}
				</div>
			</section>

			{/* EDUCATION */}
			<section id="education" className="education section-padding">
				<div className="section-header shell">
					<h2>My <span className="highlight">Education</span></h2>
					<span>My academic journey in software development.</span>
				</div>
				<div className="edu-grid shell">
					<div className="edu-card glass">
						<div className="edu-icon">
							<img src="/assets/images/polibatam.png" alt="Batam State Polytechnic logo" />
						</div>
						<span className="edu-date">Jun 2022 - Aug 2026</span>
						<h3>Batam State Polytechnic</h3>
						<h4>Studi Program : Informatics Engineering - Software Engineering Technology</h4>
						<p><strong>IPK / GPA :</strong> 3.80 / 4.00</p>
						<p>Achievements : Object Oriented Programming, AI, IOT, Web Development, Databases, and Software Testing.</p>
					</div>
					<div className="edu-card glass">
						<div className="edu-icon">
							<img src="/assets/images/smkn7.png" alt="SMKN 7 Batam logo" />
						</div>
						<span className="edu-date">May 2019 - Apr 2022</span>
						<h3>SMKN 7 Batam</h3>
						<h4>Studi Program : Software Engineer</h4>
						<p>Achievements : Programming, HTML, CSS, JavaScript, AngularJS, SQL, OOP, and PHP.</p>
					</div>
				</div>
			</section>

          {/* certificates */}
			<section className="certificate-section section-padding" aria-labelledby="certificate-title">
				<div className="section-header shell">
					<h2 id="certificate-title">Certificates &amp; <span className="highlight">Credentials</span></h2>
					<div className="underline" />
				</div>
				<div className="certificate-grid shell">
					{certificates.map((certificate) => (
						<article className="certificate-card glass" key={certificate.title}>
							<span className="certificate-mark" aria-hidden="true">
								<svg viewBox="0 0 24 24"><path d="M12 3 15 5l3.5.2.2 3.5 2 3-2 3-.2 3.5L15 18l-3 2-3-2-3.5-.2-.2-3.5-2-3 2-3 .2-3.5L9 5l3-2Z" /><path d="m9 12 2 2 4-4" /></svg>
							</span>
							<h3>{certificate.title}</h3>
							<p>{certificate.issuer}{certificate.year ? ` · ${certificate.year}` : ''}</p>
							<button className="btn btn-secondary certificate-review" type="button" disabled>
								Review Certificate
							</button>
						</article>
					))}
				</div>
			</section>
			<Footer />
		</main>
	);
}
