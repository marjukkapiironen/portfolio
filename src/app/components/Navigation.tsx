'use client'
import { m } from 'framer-motion';
import { useEffect, useState } from 'react';
import { NAVIGATION_CONTENT } from '../content';

const Navigation : React.FC = () : React.ReactElement => { 

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      let prevScrollPos = window.scrollY;
  
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const isScrollingUp = currentScrollPos < prevScrollPos;
  
        setIsVisible(isScrollingUp || currentScrollPos === 0);
        prevScrollPos = currentScrollPos;
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
      

    return (
        <m.div
            className='top-navbar-container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ease: 'easeIn', duration: 1.2, delay: 2}}
            >
            <nav className={`top-navbar ${isVisible ? 'visible' : 'hidden'}`}>
                {NAVIGATION_CONTENT.map((item : string, index : number) => 
                    <a
                        key={index}
                        href={`#${item}`}
                        >
                        <p className='uppercase-small'>{item}</p>
                    </a>
                )}
            </nav>
        </m.div>
    );
  }
  
  export default Navigation;