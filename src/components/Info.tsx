import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import profilePic from '../my_picture.jpg';
import "../styles.css";

const Info : React.FC = () : React.ReactElement => {  

    return (
        <div id='about' className='component-container'>

            <h2>About me</h2>
        
            <div className='section-container'>
                <div className='col-container'>

                    <div className='col-8'>
                        <p>Hi there! I'm Marjukka.
                            I'm a second-year information processing science student &#64; Xamk.
                            In my other life, I'm also a translator. You could say I'm a natural language nerd by day
                            and a programming language nerd by night. :D Front-end and UI/UX design is my jam, but I'm also
                            interested in learning more back-end. I looove creating things and making them come to life and that's what's
                            always pushing me to learn more and to stay up all night tweaking pixels and colors.
                        </p>
                        <p style={{marginBottom: '0.5em', marginTop: '1.5em'}}>I have studied / am currently studying...</p>
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
                                <p>PYTHON</p>
                            </li>
                        </ul>
                        <p style={{marginTop: '0.5em'}}>
                        ...and I can't wait to learn more with every project. I'm most experienced with TS, React,
                        Node, HTML and CSS. Next, I'm looking forward to learning Vue?????
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
        </div>      
    );
  }
  
  export default Info;