"use client"
import { LazyMotion } from "framer-motion";
import { Suspense, lazy, useEffect, useState } from "react";
import Intro from "./components/Intro";
import Navigation from "./components/Navigation";
import './styles/globals.css';
import "./styles/styles.css";

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const App : React.FC = () : React.ReactElement => {

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {

    const handleScroll = () => {

        const scrollPosition = window.scrollY;

        if (scrollPosition > 1000 && scrollPosition < 1400) {

            setActiveSection('about')
        }
        else if (scrollPosition > 2400 && scrollPosition < 2600) {

            setActiveSection('projects')
        }

        else if (scrollPosition > 3700 && scrollPosition < 4100) {

            setActiveSection('contact')
        }
        
        else {

            setActiveSection('')
        } 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {

      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const loadFeatures = () =>
  import("./features.js").then(res => res.default)

  return (
    <div className='app dark-bg'>
      <div className='circle-up-right'/>
      <div className='circle-bottom-left'/>
      <LazyMotion features={loadFeatures}>
        <Intro/>
        <Navigation activeSection={activeSection} />
          <Suspense fallback={<div></div>}>
            <About activeSection={activeSection} />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <Projects activeSection={activeSection}/>
          </Suspense>
          <Suspense fallback={<div></div>}>
            <Contact activeSection={activeSection}/>
          </Suspense>
        <Suspense fallback={<div></div>}>
          <Footer/>
        </Suspense>
        </LazyMotion>
    </div>
  );
}

export default App;
