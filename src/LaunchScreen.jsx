import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './LaunchScreen.css';

const logo = "https://pumpa-4fcm.onrender.com/assets/mylogos-BV6WDaXh.png";

const LaunchScreen = ({ targetDate, children }) => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [isLaunched, setIsLaunched] = useState(false);
  const [hasFiredConfetti, setHasFiredConfetti] = useState(false);

  useEffect(() => {
    const targetTime = new Date(targetDate).getTime();
    
    // Check initially
    const now = new Date().getTime();
    if (now >= targetTime) {
      setIsLaunched(true);
    }

    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const difference = targetTime - currentTime;

      if (difference <= 0) {
        clearInterval(intervalId);
        setIsLaunched(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  useEffect(() => {
    if (isLaunched && !hasFiredConfetti) {
      const duration = 5000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#8cc63f', '#ffffff', '#0d131f']
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#8cc63f', '#ffffff', '#0d131f']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      
      frame();
      setHasFiredConfetti(true);
    }
  }, [isLaunched, hasFiredConfetti]);

  if (isLaunched) {
    return <>{children}</>;
  }

  if (!timeLeft) {
    return null; // Initial render before calculating time
  }

  return (
    <div className="launch-screen">
      <img src={logo} alt="Pumpa Squash Academy Logo" className="launch-logo" />
      <h1 className="launch-title">
        SOMETHING <span className="highlight-green">BIG</span> IS COMING
      </h1>
      <p className="launch-subtitle">Get ready to experience the Pumpa difference.</p>
      
      <div className="countdown-container">
        <div className="countdown-box">
          <div className="countdown-value">{timeLeft.days}</div>
          <div className="countdown-label">Days</div>
        </div>
        <div className="countdown-box">
          <div className="countdown-value">{timeLeft.hours}</div>
          <div className="countdown-label">Hours</div>
        </div>
        <div className="countdown-box">
          <div className="countdown-value">{timeLeft.minutes}</div>
          <div className="countdown-label">Mins</div>
        </div>
        <div className="countdown-box">
          <div className="countdown-value">{timeLeft.seconds}</div>
          <div className="countdown-label">Secs</div>
        </div>
      </div>
    </div>
  );
};

export default LaunchScreen;
