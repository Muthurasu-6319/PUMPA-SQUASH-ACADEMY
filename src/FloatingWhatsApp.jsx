import React from 'react';
import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/601111989375"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp (+60 11-1198 9375)"
    >
      <MessageCircle size={28} className="wa-icon" />
      <span className="wa-tooltip">Chat with us (+60 11-1198 9375)</span>
    </a>
  );
};

export default FloatingWhatsApp;
