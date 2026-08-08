import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ProgramsPage from './ProgramsPage';
import GalleryPage from './GalleryPage';
import FloatingWhatsApp from './FloatingWhatsApp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <FloatingWhatsApp />
    </BrowserRouter>
  );
}

export default App;
