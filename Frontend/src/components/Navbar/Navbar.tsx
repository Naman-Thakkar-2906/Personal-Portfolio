import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';



const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const ALL_SECTIONS = ['hero', ...NAV_ITEMS.map((item) => item.id)];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);

  // Hook into browser scroll coordinates to change the header backdrop 
  // and update the active menu items (Scroll Spy)
  useEffect(() => {
    const handleScroll = () => {
      // Toggle navbar border/fill when user scrolls down
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy mechanism: Determine which section is currently on screen
      const scrollPosition = window.scrollY + 120; // 120px offset for header height
      
      for (const id of ALL_SECTIONS) {
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
          const top = sectionElement.offsetTop;
          const height = sectionElement.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.nav} container`}>
        {/* Brand Logo */}
        <div className={styles.logo} onClick={() => handleLinkClick('hero')}>
          Naman<span>Thakkar</span>
        </div>

        {/* Desktop Links */}
        <nav className={styles.desktopMenu}>
          {NAV_ITEMS.map((item) => (
            <span
              key={item.id}
              className={`${styles.link} ${activeSection === item.id ? styles.activeLink : ''}`}
              onClick={() => handleLinkClick(item.id)}
            >
              {item.label}
            </span>
          ))}
        </nav>

        {/* Hamburger Mobile Toggle Button */}
        <button
          className={styles.menuBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Responsive Mobile Drawer Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {NAV_ITEMS.map((item) => (
                <span
                  key={item.id}
                  className={`${styles.mobileLink} ${
                    activeSection === item.id ? styles.mobileActiveLink : ''
                  }`}
                  onClick={() => handleLinkClick(item.id)}
                >
                  {item.label}
                </span>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
