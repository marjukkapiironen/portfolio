import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import HeaderNavigation from "./components/HeaderNavigation";
import About from "./components/Info";
import Intro from "./components/Intro";
import Projects from "./components/Projects";

const App : React.FC = () : React.ReactElement => {

  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    document.body.style.overflowX = "hidden";

    if(menuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "scroll"
    };
}, [menuOpen]);


  return (
    <div className={` app ${isDark ? 'dark' : ''} ${menuOpen ? 'menu-open' : ''}`} data-theme={`${isDark ? 'dark' : 'light'}`} >
      <div className={` background ${isDark ? 'dark' : ''} ${menuOpen ? 'menu-open' : ''}`} ></div>
      <div className='container'>
        <HeaderNavigation
          isDark={isDark}
          setIsDark={setIsDark}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          />
        <Intro/>
        <About/>
        <Projects/>
        <Contact/>
      d</div>
    </div>
  );
}

export default App;