import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (!isHome) return; 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const NavItem = ({ to, label, isScrollLink = false }: { to: string, label: string, isScrollLink?: boolean }) => {
    if (isScrollLink && isHome) {
      return (
        <button onClick={() => scrollToSection(to)} className="hover:text-appYellow transition-colors text-left font-medium">
          {label}
        </button>
      );
    }
    const href = isScrollLink ? `/#${to}` : to;
    return (
      <Link to={href} className="hover:text-appYellow transition-colors font-medium" onClick={() => setIsOpen(false)}>
        {label}
      </Link>
    );
  };

  // Determine navbar background logic
  // On Home: Transparent at top, Colored when scrolled.
  // On Other Pages: Always Colored.
  // In Light Mode: BannerBlue (when colored).
  // In Dark Mode: Dark Slate (when colored).
  const isTransparent = isHome && !scrolled;
  const navClasses = isTransparent 
    ? 'bg-transparent py-6' 
    : 'bg-bannerBlue/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg py-3';

  // Text colors
  // If transparent on Home (which has dark hero): White.
  // If colored: White (since BannerBlue and Slate900 both need white text).
  const textClass = 'text-white';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navClasses} ${textClass}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className="flex items-center gap-3 group"
        >
          <div className="relative">
             <div className="text-3xl font-racing italic text-white tracking-tighter flex items-center group-hover:scale-105 transition-transform">
                <span className="text-5xl mr-1 text-appYellow">C</span>
                <span>B</span>
             </div>
          </div>
          <span className={`text-xl font-bold hidden md:block transition-opacity duration-300 ${isTransparent ? 'opacity-90' : 'opacity-100'}`}>
            Commentary Box
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <NavItem to="features" label="Features" isScrollLink />
          <NavItem to="pricing" label="Pro" isScrollLink />
          <Link to="/changelog" className="hover:text-appYellow transition-colors font-medium">Changelog</Link>
          
          <div className="h-6 w-px bg-white/20"></div>

          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} className="text-appYellow" /> : <Moon size={20} className="text-white" />}
          </button>

          <button className="bg-appYellow text-bannerBlue font-bold px-6 py-2 rounded-xl hover:bg-white hover:text-bannerBlue transition-all border border-transparent hover:border-appYellow shadow-lg transform hover:-translate-y-0.5">
            Download App
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} className="text-appYellow" /> : <Moon size={20} className="text-white" />}
          </button>
          
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bannerBlue dark:bg-slate-900 border-t border-white/10 p-6 flex flex-col gap-6 text-white shadow-2xl z-50">
          <NavItem to="features" label="Features" isScrollLink />
          <NavItem to="pricing" label="Pro" isScrollLink />
          <Link to="/changelog" onClick={() => setIsOpen(false)} className="hover:text-appYellow transition-colors">Changelog</Link>
          <div className="h-px bg-white/10 w-full my-2"></div>
          <Link to="/brand-guidelines" onClick={() => setIsOpen(false)} className="text-sm text-gray-300">Brand Guidelines</Link>
          <button className="bg-appYellow text-bannerBlue font-bold px-6 py-3 rounded-xl w-full">
            Download App
          </button>
        </div>
      )}
    </nav>
  );
};