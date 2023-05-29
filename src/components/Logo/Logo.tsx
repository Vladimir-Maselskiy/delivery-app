'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { StyledLogoText } from './Logo.styled';

export const Logo = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  const imageWidth = windowWidth > 750 ? 334 : 60;
  const imagePath = windowWidth > 750 ? '/logo.png' : '/logo-phone.png';

  useEffect(() => {
    const newWidth = window.innerWidth;
    setWindowWidth(newWidth);
    const updateWindowDimensions = () => {
      const resizeWidth = window.innerWidth;
      setWindowWidth(resizeWidth);
    };
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  return (
    <Link href="/">
      <Image
        src={imagePath}
        alt="logo"
        width={imageWidth}
        height={74}
        style={{ transform: 'translateY(3px)' }}
      />
    </Link>
  );
};
export const LogoText = () => {
  return (
    <StyledLogoText>
      Найкращий вибір. <span>Електричний проточний водонагрівач.</span>
    </StyledLogoText>
  );
};
