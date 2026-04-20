import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Splash from './components/Splash';
import ScrollProgress from './components/ScrollProgress';
import Toast from './components/Toast';
import ClickRipple from './components/ClickRipple';

import Home from './pages/Home';
import WhyTallow from './pages/WhyTallow';
import Products from './pages/Products';
import Mission from './pages/Mission';
import Contact from './pages/Contact';

import useToast from './hooks/useToast';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { message, visible, showToast } = useToast();

  return (
    <>
      <Splash />
      <ScrollProgress />
      <ClickRipple />
      <Toast message={message} visible={visible} />
      <Navbar />
      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-tallow" element={<WhyTallow />} />
          <Route path="/products" element={<Products showToast={showToast} />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/contact" element={<Contact showToast={showToast} />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
