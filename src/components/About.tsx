import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import profilePic from '../my_picture.jpg';
import "../styles.css";

const About : React.FC = () : React.ReactElement => {  

    return (
        <div id='about' className='component-container'>

            <h2>About me</h2>
                <div className='col-container'>

                    <div className='col-8'>
                        <p>Hi there! I'm Marjukka.
                            I'm a second-year information processing science student &#64; Xamk specialising in front end development. I love the creative and technical the process
                            of starting with an idea and making it come to life. Most of all I'm passionate about constantly challenging myself to learn more and improve
                            my skills in creating engaging digital experiences.
                        </p>
                        <p style={{marginBottom: '0.5em', marginTop: '1.5em'}}>Technologies I have studied / am currently studying ...</p>
                        <ul className='skills'>
                            <li className='skills'>
                                <p>TYPESCRIPT</p>
                            </li>
                            <li className='skills'>
                                <p>REACT.JS</p>
                            </li>
                            <li className='skills'>
                                <p>EXPRESS</p>
                            </li>
                            <li className='skills'>
                                <p>NODE.JS</p>
                            </li>
                            <li className='skills'>
                                <p>HTML</p>
                            </li>
                            <li className='skills'>
                                <p>CSS</p>
                            </li>
                            <li className='skills'>
                                <p>POSTGRESQL</p>
                            </li>
                            <li className='skills'>
                                <p>PYTHON</p>
                            </li>
                        </ul>
                        <p style={{marginTop: '0.5em'}}>
                        ...and I can't wait to learn more with every project. I'm most experienced with TS, React,
                        Node, HTML and CSS.
                        </p>
                    </div>

                    <div className='col-4'>
                        <div className='pic'>
                    <img
                        className='profile-pic'
                        src={profilePic}
                        alt="Marjukka"
                        />
                        </div>
                    </div>


            </div>
        </div>      
    );
  }
  
  export default About;