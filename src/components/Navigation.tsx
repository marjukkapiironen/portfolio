import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HiMoon, HiSun } from "react-icons/hi2";
import { content } from '../content';
import "../styles.css";

interface Props {
    isDark : boolean
    setIsDark : (arg0 : boolean) => void
}

const Navigation : React.FC<Props> = ({ isDark, setIsDark }) : React.ReactElement => {

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
        <motion.div
            className='top-navbar-container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ease: 'easeIn', duration: 1.2, delay: 1}}
            >
            <nav className={`top-navbar ${isVisible ? 'visible' : 'hidden'}`}>
                {content.navigation.map((item : string, index : number) => 
                    <a
                        key={index}
                        href={`#${item}`}
                        >
                        <p className='bold'>{item}</p>
                    </a>
                )}
                <div className='mode-toggle'>
                    <button
                        className={`mode-toggle-button ${isDark ? '' : 'opaque'}`}
                        onClick={() => setIsDark(false)}
                        >
                        <HiMoon
                            size={18}
                            style={{ fill: `${isDark ? '#333366' : '#efcdc3'}` }}
                            />
                        {Boolean(isDark === true) &&
                            <motion.div className="indicator" layoutId="indicator" />
                        }
                    </button>
                    <button
                        className={`mode-toggle-button ${isDark ? 'opaque' : ''}`}
                        onClick={() => setIsDark(true)}
                        >
                        <HiSun
                            size={18}
                            style={{ fill: `${isDark ? '#db7657' : '#1b507e'}` }}
                            />
                        {Boolean(isDark === false) &&
                            <motion.div className="indicator" layoutId="indicator" />
                        }
                    </button>
                </div>
            </nav>
        </motion.div>
    );
  }
  
  export default Navigation;