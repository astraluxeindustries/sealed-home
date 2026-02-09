import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram, Youtube, MessageSquare } from 'lucide-react';
import Button from '../UI/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Sealed Home Efficiency', path: '/' }, // Mapped to Home based on images
    { label: 'Residential Services', path: '/services' },
    { label: 'What To Expect', path: '/expect' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const socialLinks = [
    { Icon: Facebook, href: '#' },
    { Icon: Twitter, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Youtube, href: '#' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-700 text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
          <div className="flex items-center space-x-6">
            <a href="mailto:info@mysealedhome.com" className="flex items-center hover:text-brand-100 transition-colors">
              <Mail className="w-3.5 h-3.5 mr-2" />
              info@mysealedhome.com
            </a>
            <span className="flex items-center">
              <Phone className="w-3.5 h-3.5 mr-2" />
              435-429-0974
            </span>
          </div>
          <div className="flex items-center space-x-4">
            {socialLinks.map(({ Icon, href }, index) => (
              <a key={index} href={href} className="hover:text-brand-100 transition-colors">
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white py-5 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex flex-col items-center group">
               <div className="border-2 border-brand-900 px-3 py-1 group-hover:border-brand-600 transition-colors">
                  <span className="text-2xl font-sans font-bold text-brand-900 tracking-widest uppercase group-hover:text-brand-600 transition-colors">SEALED HOME</span>
               </div>
               <span className="text-xs font-semibold tracking-[0.4em] text-brand-900 mt-1 uppercase">Efficiency</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.slice(2).map((link) => ( // Showing only main pages
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                    location.pathname === link.path ? 'text-brand-500' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-200">
                <div className="flex flex-col items-end">
                   <span className="text-xs text-gray-500 font-medium">Talk To An Expert</span>
                   <a href="tel:435-429-0974" className="text-brand-700 font-bold text-sm">435-429-0974</a>
                </div>
                <Button variant="primary" onClick={() => window.location.hash = '/contact'} className="!px-5 !py-2 text-xs">
                  Book Consult
                </Button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-700 hover:text-brand-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden pt-24 px-6 animate-fade-in">
          <div className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="text-xl font-medium text-gray-800 hover:text-brand-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
             <div className="pt-8 border-t border-gray-100 flex flex-col items-center space-y-4">
               <a href="tel:435-429-0974" className="flex items-center text-brand-700 font-bold text-lg">
                 <Phone className="w-5 h-5 mr-2" /> 435-429-0974
               </a>
               <Button className="w-full" onClick={() => { setIsMobileMenuOpen(false); window.location.hash = '/contact'; }}>
                 Get A Quote
               </Button>
             </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;