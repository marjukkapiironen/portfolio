import { LazyMotion } from "framer-motion";
import { Suspense, lazy, useEffect, useState } from "react";
import Intro from "./components/Intro";
import Navigation from "./components/Navigation";
import "./styles.css";

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

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

  const loadFeatures = () =>
  import("./features.js").then(res => res.default)

  return (
    <div className={` app ${isDark ? 'dark' : ''}`} data-theme={`${isDark ? 'dark' : 'light'}`} >
      <div className={` background ${isDark ? 'dark' : ''}`} ></div>
      <div className='container'>
      <LazyMotion features={loadFeatures}>
        <Navigation
          isDark={isDark}
          setIsDark={setIsDark}
          />
        <Intro/>
        <div className='divider'>
          <Suspense fallback={<div></div>}>
            <About/>
          </Suspense>
          <Suspense fallback={<div></div>}>
            <Projects/>
          </Suspense>
          <Suspense fallback={<div></div>}>
            <Contact/>
          </Suspense>
        </div>
        <Suspense fallback={<div></div>}>
          <Footer/>
        </Suspense>
        </LazyMotion>
      </div>
    </div>
  );
}

export default App;