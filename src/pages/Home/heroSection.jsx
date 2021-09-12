import React, { useState, useEffect } from 'react';
import desktopImage from '../../assets/hero.png'
import mobileImage from '../../assets/hero1.png'


export const HeroSection = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);
    return (
        <div className="hero-section" >
            <img src={imageUrl} alt="" />
        </div>
    )
}