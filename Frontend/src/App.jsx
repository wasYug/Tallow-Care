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
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';

import useToast from './hooks/useToast';

export default function App() {
  const { message, visible, showToast } = useToast();

  return (
    <>
      <Splash />
      <ScrollProgress />
      <ClickRipple />
      <Toast message={message} visible={visible} />
      <Navbar />

      <main>
        <Home />
        <WhyTallow />
        <Products showToast={showToast} />
        <Mission />
        <Sustainability />
        <Contact showToast={showToast} />
      </main>

      <Footer />
    </>
  );
}
