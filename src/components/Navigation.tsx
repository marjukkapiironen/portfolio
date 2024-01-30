import { m } from 'framer-motion';
import { useEffect, useState, useTransition } from 'react';
import { HiMoon, HiSun } from "react-icons/hi2";
import { NAVIGATION_CONTENT } from '../content';

interface Props {
    isDark : boolean
    setIsDark : (arg0 : boolean) => void
}

const Navigation : React.FC<Props> = ({ isDark, setIsDark }) : React.ReactElement => {

    const [isPending, startTransition] = useTransition();

    const handleThemeChange = () => {

        startTransition(() => {
            isDark ? setIsDark(false) : setIsDark(true);

        });
      };

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
            transition={{ease: 'easeIn', duration: 1.2, delay: 1}}
            >
            <nav className={`top-navbar ${isVisible ? 'visible' : 'hidden'}`}>
                {NAVIGATION_CONTENT.map((item : string, index : number) => 
                    <a
                        key={index}
                        href={`#${item}`}
                        >
                        <p className='bold'>{item}</p>
                    </a>
                )}
                <button
                    className='mode-toggle'
                    onClick={() => handleThemeChange()}
                    >
                    <div
                        className={`mode-toggle-button ${isDark ? '' : 'opaque'}`}
                        
                        >
                        <HiMoon
                            size={18}
                            style={{ fill: `${isDark ? '#333366' : '#efcdc3'}` }}
                            />
                        {Boolean(isDark === true) &&
                            <m.div className="indicator" layoutId="indicator" />
                        }
                    </div>
                    <div
                        className={`mode-toggle-button ${isDark ? 'opaque' : ''}`}
                        >
                        <HiSun
                            size={18}
                            style={{ fill: `${isDark ? '#db7657' : '#1b507e'}` }}
                            />
                        {Boolean(isDark === false) &&
                            <m.div className="indicator" layoutId="indicator" />
                        }
                    </div>
                </button>
            </nav>
        </m.div>
    );
  }
  
  export default Navigation;