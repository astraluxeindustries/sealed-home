import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="inline-block">
               <div className="border border-white/30 px-3 py-1 mb-1">
                  <span className="text-xl font-sans font-bold tracking-widest uppercase">SEALED HOME</span>
               </div>
               <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-gray-400 block text-center">Efficiency</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We are committed to improving lives by delivering comfort, healthy air, and substantial energy savings through industry-leading Aeroseal technology.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="bg-brand-800 p-2 rounded-full hover:bg-brand-600 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Residential Services', path: '/services' },
                { label: 'What To Expect', path: '/expect' },
                { label: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-500 shrink-0" />
                <span>Serving Your Local Area<br/>and Surrounding Communities</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand-500 shrink-0" />
                <a href="tel:435-429-0974" className="hover:text-white">435-429-0974</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand-500 shrink-0" />
                <a href="mailto:info@mysealedhome.com" className="hover:text-white">info@mysealedhome.com</a>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Promise</h3>
             <div className="bg-brand-800 p-6 rounded-lg border border-brand-700">
               <div className="flex items-center mb-3">
                 <ShieldCheck className="w-8 h-8 text-brand-500 mr-3" />
                 <span className="font-bold">Certified Aeroseal</span>
               </div>
               <p className="text-xs text-gray-400">
                 We provide a certificate of completion showing before and after system leakage measurements. 10-year warranty included.
               </p>
             </div>
          </div>
        </div>

        <div className="border-t border-brand-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sealed Home Efficiency. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;