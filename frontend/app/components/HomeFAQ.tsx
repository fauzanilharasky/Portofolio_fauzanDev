'use client';

import { useState } from 'react';

const faqCategories = [
  {
    name: 'General',
    questions: [
      {
        question: 'Who are you?',
        answer: 'I am a Web & Mobile Developer specializing in building modern, responsive, and user-friendly web and mobile applications. I have experience working with frontend and backend technologies to develop functional digital solutions.',
      },
      {
        question: 'Where are you based?',
        answer: 'I am based in Batam, Indonesia, and can collaborate remotely with clients and teams in other locations.',
      },
      {
        question: 'Are you available for freelance work?',
        answer: 'Yes. Share a short description of your project and timeline through the contact link, and I will get back to you.',
      },
      {
        question: 'What services do you offer?',
        answer: 'I offer website development, frontend and backend development, API integration, database management, and website maintenance.',
      },
      {
        question: 'What technologies do you use?',
        answer: 'I work with JavaScript, TypeScript, React, Next.js, Nest.js, PHP, Flutter, PostgreSQL, and related development tools.',
      }
    ],
  },
  {
    name: 'Services',
    questions: [
      {
        question: 'Do you design mobile and web applications?',
        answer: 'Yes. I create responsive interfaces for websites and applications, with layouts that adapt to desktop, tablet, and mobile screens.',
      },
      {
        question: 'Can you build a complete website?',
        answer: 'Yes. I can handle the frontend, backend integrations, database structure, and deployment for a full web application.',
      },
      {
        question: 'Do you maintain existing websites?',
        answer: 'I can help with improvements, bug fixes, performance updates, and new features for existing projects.',
      },
      {
        question: 'Do you provide website maintenance and bug fixing?',
        answer: 'Yes. I can assist with ongoing maintenance, updates, and bug fixes to ensure your website remains functional and secure.',
      }
    ],
  },
  {
    name: 'Work Process',
    questions: [
      {
        question: 'Do you create wireframes and prototypes?',
        answer: 'Yes. I can map key screens and user flows before implementation so we can agree on the structure and experience early.',
      },
      {
        question: 'What does your project process look like?',
        answer: 'We start by understanding the goals, then plan the scope, design the experience, build and test it, and prepare it for launch.',
      },
      {
        question: 'How will I review progress?',
        answer: 'I share progress at agreed milestones and gather feedback before moving into the next stage.',
      },
    ],
  },
  {
    name: 'Tools & Technologies',
    questions: [
      {
        question: 'What technologies do you work with?',
        answer: 'My toolkit includes JavaScript, TypeScript, React, Next.js, Nest.js, PHP, Flutter, PostgreSQL, and related development tools.',
      },
      {
        question: 'Do you use any tools for UI/UX design?',
        answer: 'Yes. I use Figma for UI/UX design, wireframing, and prototyping to create user-friendly interfaces.',
      },
      {
        question: 'How do you manage code and collaborate with other developers?',
        answer: 'I use Git and GitHub for version control, source code management, and collaboration throughout the development process.',
      },
      {
        question: 'Do you have experience deploying websites?',
        answer: 'Yes. I have experience with website deployment and maintenance, and I continue to develop my skills in configuring hosting environments and publishing web applications.',
      }
    ],
  },
  {
    name: 'Skills & Expertise',
    questions: [
      {
        question: 'Do you work on both frontend and backend?',
        answer: 'Yes. I have experience building user interfaces as well as APIs, authentication, and database-backed features.',
      },
      {
        question: 'Do you also build mobile applications?',
        answer: 'Yes. I have developed cross-platform mobile applications with Flutter alongside web projects.',
      },
    ],
  },
];

export default function HomeFAQ() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(0);
  const selectedCategory = faqCategories[activeCategory];
  const categoryId = `faq-category-${activeCategory}`;

  return (
    <section className="home-faq" aria-labelledby="faq-title">
      <div className="home-faq-shell">
        <header className="home-faq-heading">
          <span className="home-faq-eyebrow"><span /> FAQs</span>
          <h2 id="faq-title">Questions? <span>Look here.</span></h2>
        </header>

        <div className="home-faq-layout">
          <aside className="home-faq-sidebar" aria-label="FAQ categories">
            <div className="home-faq-categories" role="tablist" aria-orientation="vertical">
              {faqCategories.map((category, index) => (
                <button
                  className={`home-faq-category${activeCategory === index ? ' is-active' : ''}`}
                  id={`faq-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === index}
                  aria-controls={categoryId}
                  key={category.name}
                  onClick={() => {
                    setActiveCategory(index);
                    setOpenQuestion(0);
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="home-faq-contact">
              <span className="home-faq-chat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.86L4 20l3.75-.95A8.5 8.5 0 1 0 12 3.5Z" /><circle cx="8.5" cy="12" r=".8" /><circle cx="12" cy="12" r=".8" /><circle cx="15.5" cy="12" r=".8" /></svg>
              </span>
              <h3>Still have questions?</h3>
              <p>Tell me what you&apos;re working on and I&apos;ll be happy to help.</p>
              <a href="mailto:fzn.ilhrsky@gmail.com">Contact Me</a>
            </div>
          </aside>

          <div className="home-faq-questions" id={categoryId} role="tabpanel" aria-labelledby={`faq-tab-${activeCategory}`}>
            {selectedCategory.questions.map((item, index) => {
              const isOpen = openQuestion === index;
              const answerId = `faq-answer-${activeCategory}-${index}`;

              return (
                <article className={`home-faq-item${isOpen ? ' is-open' : ''}`} key={item.question}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenQuestion(isOpen ? -1 : index)}
                    >
                      <span>{item.question}</span>
                      <span className="home-faq-toggle" aria-hidden="true">{isOpen ? '\u2212' : '+'}</span>
                    </button>
                  </h3>
                  {isOpen && <p className="home-faq-answer" id={answerId}>{item.answer}</p>}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}