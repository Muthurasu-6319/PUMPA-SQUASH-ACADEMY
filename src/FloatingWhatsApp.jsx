import React from 'react';
import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/60123178564"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp (+60 12-317 8564)"
    >
      <MessageCircle size={28} className="wa-icon" />
      <span className="wa-tooltip">Chat with us (+60 12-317 8564)</span>
    </a>
  );
};

export default FloatingWhatsApp;
