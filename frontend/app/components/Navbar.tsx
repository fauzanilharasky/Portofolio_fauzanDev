'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/project' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar${isScrolled ? ' scrolled' : ''}`}>
      <div className="nav-container shell">
        <Link href="/" className="logo">Fauzan<span>.dev</span></Link>
        <button
          type="button"
          className={`hamburger${isMenuOpen ? ' active' : ''}`}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-links${isMenuOpen ? ' active' : ''}`}>
          {navItems.map(({ label, href }) => {
            const isActive = (label === 'Home' && pathname === '/') ||
              (label === 'About' && pathname.startsWith('/about')) ||
              (label === 'Projects' && pathname.startsWith('/project'));

            return (
              <Link
                href={href}
                key={label}
                className={isActive ? 'active' : undefined}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
