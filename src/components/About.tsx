import { m } from 'framer-motion';
import { IconType } from 'react-icons/';
import * as Icons from "react-icons/si";
import { ABOUT_CONTENT } from '../content';

type IconNames = keyof typeof Icons;

const About : React.FC = () : React.ReactElement => {  

    return (
        <>
        <div id='about' className='component-container'>

            <h2 className='section-heading'>{ABOUT_CONTENT.title}</h2>
                <div className='col-container about'>
                    <m.div
                        className='col-60'
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                                        ease: 'easeIn',
                                        opacity: { duration: 2 },
                                        y: { duration: 0.9 },
                                    }}
                        viewport={{ once : true }}
                        >
                        <p>{ABOUT_CONTENT.bio[0]}</p>
                        <p style={{ marginBottom: '0.5em', marginTop: '1.5em' }}>{ABOUT_CONTENT.bio[1]}</p>
                        <ul className='skills'>
                            {ABOUT_CONTENT.technologies.map((technology, index) => {
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
                            <p style={{ marginTop: '0.5em' }}>{ABOUT_CONTENT.bio[2]}</p>
                    </m.div>
                    <m.div
                        className='col-40'
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                                        opacity: { duration: 2, delay: 0.8 },
                                        y: { duration: 0.9, delay: 0.8 },
                                    }}
                        viewport={{ once : true }}
                        >
                        <div className='pic'>
                            <img
                                className='profile-pic'
                                src={process.env.PUBLIC_URL + '/assets/profile-pic.png'}
                                alt=""
                                />
                        </div>
                    </m.div>
                </div>
        </div>
        <div className='component-gap'></div>
        </>  
    );
  }
  
  export default About;