import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram, Youtube, MessageCircle } from 'lucide-react';
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
      {/* Top Bar - Uses the brand-600 color to match the image's blue bar */}
      <div className="bg-brand-600 text-white py-2 px-4 hidden md:block border-b border-brand-700">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
          <div className="flex items-center space-x-6">
            <a href="mailto:info@mysealedhome.com" className="flex items-center hover:text-brand-100 transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              <span className="tracking-wide">info@mysealedhome.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-5">
            {socialLinks.map(({ Icon, href }, index) => (
              <a key={index} href={href} className="hover:text-brand-200 transition-colors opacity-90 hover:opacity-100">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 border-b border-gray-100 ${
          isScrolled ? 'bg-white/98 backdrop-blur-md shadow-lg py-2' : 'bg-white py-4 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex flex-col items-start group min-w-[200px]">
               <div className="border-[3px] border-black px-4 py-2 group-hover:border-brand-600 transition-colors">
                  <span className="text-2xl font-sans font-bold text-black tracking-widest uppercase group-hover:text-brand-600 transition-colors">SEALED HOME</span>
               </div>
               <div className="w-full text-center mt-1">
                 <span className="text-[10px] font-bold tracking-[0.4em] text-black uppercase relative top-[-2px]">Efficiency</span>
               </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center justify-between flex-1 ml-12">
              <nav className="flex space-x-8">
                {navLinks.slice(2).map((link) => ( // Showing only main pages
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    className={`text-sm font-semibold transition-colors hover:text-brand-600 ${
                      location.pathname === link.path ? 'text-brand-600' : 'text-gray-800'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-6 pl-8">
                 {/* Talk To An Expert Section - Matched to Image */}
                <div className="flex items-center gap-3">
                  <div className="text-brand-600">
                    <MessageCircle className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col leading-tight">
                     <span className="text-brand-600 font-bold text-sm">Talk To An Expert</span>
                     <a href="tel:435-429-0974" className="text-gray-900 font-medium text-sm hover:text-brand-600 transition-colors">435-429-0974</a>
                  </div>
                </div>

                <div className="w-px h-10 bg-gray-200 mx-2"></div>

                <Button variant="primary" onClick={() => window.location.hash = '/contact'} className="!px-6 !py-2.5 text-sm shadow-md shadow-brand-500/20">
                  Book Consult
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-700 hover:text-brand-600 p-2"
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
                className="text-xl font-medium text-gray-800 hover:text-brand-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
             <div className="pt-8 border-t border-gray-100 flex flex-col items-center space-y-4">
               <div className="flex flex-col items-center mb-4">
                 <span className="text-brand-600 font-bold mb-1">Talk To An Expert</span>
                 <a href="tel:435-429-0974" className="flex items-center text-gray-900 font-bold text-xl">
                   <Phone className="w-5 h-5 mr-2 text-brand-600" /> 435-429-0974
                 </a>
               </div>
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