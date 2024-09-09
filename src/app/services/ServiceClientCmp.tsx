'use client';
import React, { useEffect, useState } from 'react';
interface ServiceClientComponentProps {
  BigScreenService: React.ReactNode;
  SmallScreenService: React.ReactNode;
}
const ServiceClientComponent: React.FC<ServiceClientComponentProps> = ({
  BigScreenService,
  SmallScreenService,
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
    return SmallScreenService;
  }
  return BigScreenService;
};
export default ServiceClientComponent;
