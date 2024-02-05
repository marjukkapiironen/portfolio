import Image from "next/image";
import circle_bottom_left from './assets/circle-bottom-left.jpeg';
import circle_up_right from './assets/circle-up-right.jpeg';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from "./components/Intro";
import Navigation from "./components/Navigation";
import Projects from './components/Projects';
import './styles/globals.css';
import "./styles/styles.css";

const App : React.FC = () : React.ReactElement => {

  return (
    <div className='app dark-bg'>
        <Image
            className='circle-up-right'
            src={circle_up_right}
            alt=""
            loading="eager"
            />
        <Image
            className='circle-bottom-left'
            src={circle_bottom_left}
            alt=""
            loading="eager"
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
