'use client';
import React, { useEffect, useState } from 'react';
interface AboutClientComponentProps {
  Big: React.ReactNode;
  Small: React.ReactNode;
}

const AboutClientComponent: React.FC<AboutClientComponentProps> = ({
  Big,
  Small,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  if (isSmallScreen) {
    return Small;
  }
  return Big;
};

export default AboutClientComponent;
