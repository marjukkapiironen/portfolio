'use client'
import { LazyMotion, m } from 'framer-motion';
import Image from 'next/image';
import { IconType } from 'react-icons/';
import * as Icons from "react-icons/si";
import profile_picture from '../assets/prof-pic.jpg';
import { ABOUT_CONTENT } from '../content';

type IconNames = keyof typeof Icons;

const About : React.FC = () : React.ReactElement => {  

    const loadFeatures = () =>
    import("../features.js").then(res => res.default)

    return (
        <LazyMotion features={loadFeatures}>
        <div id='about' className='container-full-width-height'>
            <div className='container-max-1000-width'>
            <h1 className='section-heading'>{ABOUT_CONTENT.title}</h1>
                <div className='col-container about'>
                    <m.div
                        className='col-60'
                        initial={{y: 200, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{
                            y: { duration: 2.5, ease: 'easeOut' },
                            opacity: { duration: 0.5, ease: 'easeIn' },
                            }}
                            viewport={{ once : true }}
                        >
                        <m.p
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            transition={{duration: 1, ease: 'easeIn'}}
                            viewport={{ once : true }}
                            >
                            {ABOUT_CONTENT.bio[0]}
                            </m.p>
                        <m.p
                            style={{ marginBottom: '1em', marginTop: '1.5em' }}
                            initial={{opacity: 0, y: 100}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{
                                y: { duration: 2, ease: 'easeOut'},
                                opacity: { delay: 0.5, duration: 0.5, ease: 'easeIn'}
                            }}
                            viewport={{ once : true }}
                            >
                            {ABOUT_CONTENT.bio[1]}</m.p>
                        <m.ul
                            className='skills'
                            initial={{opacity: 0, y: 150}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{
                                y: { duration: 2.4, ease: 'easeOut'},
                                opacity: { delay: 1, duration: 0.5, ease: 'easeIn'}
                            }}
                            viewport={{ once : true }}
                            >
                            {ABOUT_CONTENT.technologies.map((technology, index) => {
                                const IconComponent = Icons[technology.icon as IconNames] as IconType;
                                return (
                                    <li
                                    key={index}
                                    className='skills'>
                                        {IconComponent && <IconComponent size={15} className='icon' />}
                                        <p className='uppercase-small white'>{technology.name}</p>
                                    </li>
                                );
                            })}
                        </m.ul>
                            <m.p
                                style={{ marginTop: '1em' }}
                                initial={{opacity: 0, y: 180}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{
                                    y: {duration: 2.8, ease: 'easeOut'},
                                    opacity: {delay: 1, duration: 0.5, ease: 'easeIn'}
                                }}
                                viewport={{ once : true }}
                                >
                                {ABOUT_CONTENT.bio[2]}
                                </m.p>
                    </m.div>
                    <div
                        className='col-40'
                        >
                        <div className='pic-container'>
                            <m.div
                                className='absolute-centered'
                                initial={{opacity: 1}}
                                animate={{opacity: 0}}
                                transition={{delay: 3.5, duration: 1}}
                                viewport={{once : true}}
                                >
                                <m.div
                                    className='circle'
                                    initial={{opacity: 0, scale: 0.05}}
                                    whileInView={{opacity: 1, scale: 2.5}}
                                    transition={{duration: 2, delay: 3, ease: 'easeOut'}}
                                    viewport={{once : true}}
                                    />
                            </m.div>  
                            <m.div
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                transition={{duration: 2, delay: 3}}
                                viewport={{once : true}}
                                >
                                <Image
                                    className='profile-pic'
                                    src={profile_picture}
                                    alt=""
                                    />
                             </m.div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        </LazyMotion>
    );
  }
  
  export default About;