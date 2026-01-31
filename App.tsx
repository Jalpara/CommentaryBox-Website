import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { BrandGuidelines } from './components/BrandGuidelines';
import { Terms } from './components/Terms';
import { Privacy } from './components/Privacy';
import { Changelog } from './components/Changelog';
import { ScrollToTop } from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';

// Separate component to handle the routes and animation presence
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/brand-guidelines" element={<BrandGuidelines />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/changelog" element={<Changelog />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="font-sans text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-darkBg selection:bg-appYellow selection:text-bannerBlue min-h-screen flex flex-col transition-colors duration-300">
          <Navbar />
          
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>

          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;