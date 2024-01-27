import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";

const App : React.FC = () : React.ReactElement => {

  //Save theme preference to local storage
  const [isDark, setIsDark] = useState(() => {

    const savedTheme = localStorage.getItem("theme");

    return Boolean(savedTheme)
      ? JSON.parse(String(savedTheme))
      : true
  });

  useEffect(() => {

    Boolean(isDark)
    ? localStorage.setItem("theme", JSON.stringify(true))
    : localStorage.setItem("theme", JSON.stringify(false))

  }, [isDark]);

  return (
    <div className={` app ${isDark ? 'dark' : ''}`} data-theme={`${isDark ? 'dark' : 'light'}`} >
      <div className={` background ${isDark ? 'dark' : ''}`} ></div>
      <div className='container'>
        <Navigation
          isDark={isDark}
          setIsDark={setIsDark}
          />
        <Intro/>
        <div className='divider'>
          <About/>
          <Projects/>
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default App;