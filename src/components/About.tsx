import { motion } from 'framer-motion';
import { IconType } from 'react-icons/';
import * as Icons from "react-icons/si";
import { content } from '../content';
import "../styles.css";

type IconNames = keyof typeof Icons;

const About : React.FC = () : React.ReactElement => {  

    return (
        <div id='about' className='component-container'>

            <h2 className='section-heading'>{content.about.title}</h2>
                <motion.div
                    className='col-container'
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                                    ease: 'easeIn',
                                    opacity: { duration: 2 },
                                    y: { duration: 0.9 },
                                }}
                    viewport={{ once : true }}
                    >
                    <div className='col-60'>
                        <p>{content.about.bio[0]}</p>
                        <p style={{ marginBottom: '0.5em', marginTop: '1.5em' }}>{content.about.bio[1]}</p>
                        <ul className='skills'>
                            {content.about.technologies.map((technology, index) => {
                                const IconComponent = Icons[technology.icon as IconNames] as IconType;
                                return (
                                    <li
                                    key={index}
                                    className='skills'>
                                        {IconComponent && <IconComponent size={15} className='icon' />}
                                        <p className='bold'>{technology.name}</p>
                                    </li>
                                );
                            })}
                        </ul>
                        <p style={{ marginTop: '0.5em' }}>{content.about.bio[2]}</p>
                    </div>

                    <div className='col-40'>
                        <div className='pic'>
                    <img
                        className='profile-pic'
                        src={process.env.PUBLIC_URL + '/assets/picture.png'}
                        alt=""
                        />
                        </div>
                    </div>
            </motion.div>
        </div>      
    );
  }
  
  export default About;