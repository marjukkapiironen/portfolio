import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SegmentIcon from '@mui/icons-material/Segment';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import logo from '../logo.png';
import "../styles.css";

interface Props {
    isDark : boolean
    setIsDark : (arg0 : boolean) => void
    menuOpen : boolean
    setMenuOpen : (arg0 : boolean) => void
}

const HeaderNavigation : React.FC<Props> = ({ isDark, setIsDark, menuOpen, setMenuOpen}) : React.ReactElement => {

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
        <>
            <img
                className='logo-pic'
                src={logo}
                alt="logo"
                />

            <div className='top-navbar-container'>

            <nav className={`top-navbar ${isVisible ? 'visible' : 'hidden'}`}>

                    <a href='#about'><p>ABOUT</p></a>
                    <a href='#about'><p>PROJECTS</p></a>
                    <a href='#about'><p>CONTACT</p></a>

                    <div className='mode-toggle'>
                        <button
                            className={`mode-toggle-button ${isDark ? '' : 'opaque'}`}
                            onClick={() => setIsDark(false)}
                            >
                            <DarkModeIcon
                                fontSize='medium'
                                style={{ fill: `${isDark ? '#6e79dd' : '#efcdc3'}` }}
                                />
                            {Boolean(isDark === true) &&
                                <motion.div transition={{ delay: 0.2 }} className="indicator" layoutId="indicator" />
                            }
                        </button>
                        <button
                            className={`mode-toggle-button ${isDark ? 'opaque' : ''}`}
                            onClick={() => setIsDark(true)}
                            >
                            <LightModeOutlinedIcon
                                fontSize='medium'
                                style={{ fill: `${isDark ? '#efcdc3' : '#1b507e'}` }}
                                />
                            {Boolean(isDark === false) &&
                                <motion.div className="indicator" layoutId="indicator" />
                            }
                        </button>

                </div>
            </nav>

            </div>
     

        </>
    );
  }
  
  export default HeaderNavigation;