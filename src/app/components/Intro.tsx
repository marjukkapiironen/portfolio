'use client'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Intro : React.FC = () : React.ReactElement => {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, 2200);
    
        return () => clearTimeout(timeoutId);
    }, []);

    const firstAnimationVariants = {
        initial: { opacity: 0, scale: 0.05 },
        animate: { opacity: 1, scale: 2.2, transition: { duration: 1.4, ease: 'easeOut' } },
    };

    const secondAnimationVariants = {
        initial: { opacity: 0, scale: 0.05 },
        animate: { opacity: 1, scale: 1.9, transition: { delay: 0.2, duration: 1.5, ease: 'easeOut' } },
    };

    const thirdAnimationVariants = {
        initial: { opacity: 0, scale: 0.05 },
        animate: { opacity: 1, scale: 2.4, transition: { delay: 0.6, duration: 1.6, ease: 'easeOut' } },
        exit: { opacity: 0 },
    };


    return (
        <div className='container-full-width-height light-bg'>
            {Boolean(isVisible) &&
                <div className='container-max-700-width absolute-centered'>
                    <div className='left-align mb-90'>
                        <motion.div
                            initial={{opacity: 1}}
                            animate={{opacity: 0}}
                            transition={{delay: 0.7, duration: 0.6}}
                            >
                            <motion.div
                                className='circle'
                                variants={firstAnimationVariants}
                                initial="initial"
                                animate='animate'
                                />
                        </motion.div>  
                    </div>
                    <div className='right-align mb-90'>
                        <motion.div
                            initial={{opacity: 1}}
                            animate={{opacity: 0}}
                            transition={{delay: 0.9, duration: 0.6 }}
                            >
                            <motion.div
                            className='circle'
                            variants={secondAnimationVariants}
                            initial="initial"
                            animate='animate'
                            />
                        </motion.div>
                    </div>
                    <div className='center-align mb-90'>
                        <motion.div
                                initial={{opacity: 1}}
                                animate={{opacity: 0}}
                                transition={{delay: 1.2, duration: 0.9 }}
                                >
                            <motion.div
                                className='circle'
                                variants={thirdAnimationVariants}
                                initial="initial"
                                animate='animate'
                                />
                        </motion.div>
                    </div>
                    </div>
                }
                <motion.div
                    className='container-max-300-width'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.3, duration: 2.4, ease: 'easeIn'}}
                    >
                    <h1 style={{writingMode: 'vertical-rl'}}>
                        ハローワールド
                    </h1>
                    <p className='dark' >
                    &#65371; hello world by marjukka &#65373;
                    </p>
                </motion.div>            
        </div>
    );
  }
  
  export default Intro;