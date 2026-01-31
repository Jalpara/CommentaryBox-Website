import React from 'react';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
             <div 
               className="flex items-center justify-center md:justify-start gap-2 mb-2 cursor-pointer group select-none"
               onClick={scrollToTop}
               role="button"
               aria-label="Scroll to top"
             >
               <span className="text-3xl font-racing italic text-white group-hover:text-appYellow transition-colors duration-300">CB</span>
               <span className="text-sm font-bold tracking-widest bg-bannerBlue px-2 py-0.5 rounded text-appYellow group-hover:bg-white group-hover:text-bannerBlue transition-all duration-300">APP</span>
             </div>
             <p className="text-gray-500 text-sm">© 2024 Commentary Box. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm font-medium">
            <Link to="/changelog" className="hover:text-appYellow transition-colors">Changelog</Link>
            <Link to="/brand-guidelines" className="hover:text-appYellow transition-colors">Brand Guidelines</Link>
            <Link to="/privacy" className="hover:text-appYellow transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-appYellow transition-colors">Terms of Service</Link>
          </div>
          
          <div className="flex gap-4 mt-6 md:mt-0">
             <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-bannerBlue hover:text-white text-gray-400 transition-all cursor-pointer">
               <Icons.Twitter size={20} />
             </div>
             <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 hover:text-white text-gray-400 transition-all cursor-pointer">
               <Icons.Instagram size={20} />
             </div>
             <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white text-gray-400 transition-all cursor-pointer">
               <Icons.Linkedin size={20} />
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};