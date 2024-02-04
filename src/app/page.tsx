import dynamic from 'next/dynamic';
import Image from "next/image";
import circle_bottom_left from './assets/circle-bottom-left.jpeg';
import circle_up_right from './assets/circle-up-right.jpeg';
import Intro from "./components/Intro";
import Navigation from "./components/Navigation";
import './styles/globals.css';
import "./styles/styles.css";

const About = dynamic(() => import('./components/About'), {
    loading: () => <div></div>,
  })

const Projects = dynamic(() => import('./components/Projects'), {
    loading: () => <div></div>,
})

const Contact = dynamic(() => import('./components/Contact'), {
    loading: () => <div></div>,
})

const Footer = dynamic(() => import('./components/Footer'), {
    loading: () => <div></div>,
})

const App : React.FC = () : React.ReactElement => {

  return (
    <div className='app dark-bg'>
        <Image
            className='circle-up-right'
            src={circle_up_right}
            alt=""
            />
        <Image
            className='circle-bottom-left'
            src={circle_bottom_left}
            alt=""
            />
            <Intro/>
            <Navigation />
            <About />
            <Projects/>
            <Contact/>
            <Footer/>
    </div>
  );
}

export default App;
