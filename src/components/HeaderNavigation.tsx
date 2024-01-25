import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SegmentIcon from '@mui/icons-material/Segment';
import { motion } from 'framer-motion';
import logo from '../logo.png';
import "../styles.css";

interface Props {
    isDark : boolean
    setIsDark : (arg0 : boolean) => void
    menuOpen : boolean
    setMenuOpen : (arg0 : boolean) => void
}

const HeaderNavigation : React.FC<Props> = ({ isDark, setIsDark, menuOpen, setMenuOpen}) : React.ReactElement => {


    return (
        <>
            <img
                className='logo-pic'
                src={logo}
                alt="logo"
                />

            <div className='mode-icons-container'>
                <button
                    className='mode-toggle-button'
                    onClick={() => setIsDark(true)}
                    >
                    <DarkModeIcon
                        className={`${isDark ? '' : 'opaque'}`}
                        fontSize='large'
                        style={{ fill: `${isDark ? '#b8e3b5' : '#7e5bf1'}` }}
                        />
                    {Boolean(isDark === true) &&
                        <motion.div className="indicator dark" layoutId="indicator" />
                    }
                </button>
                <button
                    className='mode-toggle-button'
                    onClick={() => setIsDark(false)}
                    >
                    <LightModeOutlinedIcon
                        className={`${isDark ? 'opaque' : ''}`}
                        fontSize='large'
                        style={{ fill: `${isDark ? '#b8e3b5' : '#7e5bf1'}` }}
                        />
                    {Boolean(isDark === false) &&
                        <motion.div className="indicator light" layoutId="indicator" />
                    }
                </button>
            </div>



            <button 
                className={`nav-button open-button ${menuOpen ? 'menu-open' : 'menu-closed'}`}
                onClick={() => setMenuOpen(true)}
                >
                <SegmentIcon
                    fontSize='large'
                    className='nav-icon'
                    style={{ fill: `${isDark ? '#b8e3b5' : '#7e5bf1'}` }}
                    />
            </button>

            <button
                className={`nav-button close-button ${menuOpen ? 'menu-open' : 'menu-closed'}`}
                onClick={() => setMenuOpen(false)}
                >
                <CloseIcon
                    fontSize='large'
                    className='icon-light nav-icon'
                    style={{ fill: "#ebe6ff"}}
                    />
            </button>

            <div className={`menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><h2 className='menu-open'>About</h2></li>
                    <li><h2 className='menu-open'>Projects</h2></li>
                    <li><h2 className='menu-open'>Contact</h2></li>
                </ul>
            </div>
     

        </>
    );
  }
  
  export default HeaderNavigation;