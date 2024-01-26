import { motion } from 'framer-motion';
import { content } from '../content';
import "../styles.css";

const About : React.FC = () : React.ReactElement => {  

    return (
        <div id='about' className='component-container'>

            <h2>{content.about.title}</h2>
                <motion.div
                    className='col-container'
                    initial={{opacity: 0, y: 70}}
                    animate={{opacity: 1, y: 0}}
                    transition={{ease: 'easeIn', opacity: {duration: 2}, y: {duration: 0.7}}}
                    >
                    <div className='col-8'>
                        <p>{content.about.bio[0]}</p>
                        <p style={{marginBottom: '0.5em', marginTop: '1.5em'}}>{content.about.bio[1]}</p>
                        {content.about.technologies.map((item : string, index : number) =>
                            <ul className='skills'>
                                <li
                                    key={index}
                                    className='skills'>
                                        <p className='bold'>{item}</p>
                                </li>
                            </ul>
                        )}
                        <p style={{marginTop: '0.5em'}}>{content.about.bio[2]}</p>
                    </div>

                    <div className='col-4'>
                        <div className='pic'>
                    <img
                        className='profile-pic'
                        src={process.env.PUBLIC_URL + '/assets/picture.png'}
                        alt="Marjukka"
                        />
                        </div>
                    </div>
            </motion.div>
        </div>      
    );
  }
  
  export default About;