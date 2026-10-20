'use client';

import { useEffect } from 'react';

const revealTargets = [
  '.about > .shell',
  '.about-intro-inner',
  '.section-header',
  '.about-timeline-item',
  '.edu-card',
  '.projects-header-wrapper',
  '.project-card',
  '.services-label',
  '.services-title',
  '.service-card',
  '.process-kicker',
  '.process-title',
  '.process-step',
  '.home-faq-heading',
  '.home-faq-sidebar',
  '.home-faq-questions',
  '.all-projects-heading',
  '.footer-content',
].join(', ');

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealTargets),
    );

    if (!elements.length) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      document.documentElement.classList.add('has-scroll-reveal');
      return;
    }

    elements.forEach((element) => element.setAttribute('data-scroll-reveal', ''));

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      },
    );

    elements.forEach((element) => observer.observe(element));
    document.documentElement.classList.add('has-scroll-reveal');

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('has-scroll-reveal');
      elements.forEach((element) => {
        element.removeAttribute('data-scroll-reveal');
        element.classList.remove('is-visible');
      });
    };
  }, []);

  return null;
}
