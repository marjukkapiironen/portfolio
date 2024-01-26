import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../styles.css';

const Intro : React.FC = () : React.ReactElement => {

    const [text, setText] = useState('learning');

    const changeText = () : any => {

        if(text==='learning'){
            return 'creating'
        }
        if(text==='creating'){
            return 'designing'
        }
        if(text==='designing'){
            return 'learning'
        }
      };

    //Changing text animation
    const variants: Variants = {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 10 },
      };

      useEffect(() => {
        const intervalId = setInterval(() => {
          setText(changeText());
        }, 1900);
    
        return () => clearInterval(intervalId);
      });

    return (
        <div className='intro-container'>         

            <motion.div
                initial={{opacity: 0, y: -30}}
                animate={{opacity: 1, y: 0}}
                transition={{ease: 'easeIn', duration: 0.7}}
                >
                <h2>Passion for</h2>

                    <h2>programming and</h2>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            variants={variants}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            key={text}
                            style={{ zIndex: -5}}
                            >
                            <h2 className='animated'>{text}</h2>
                        </motion.div>
                    </AnimatePresence>
       
            </motion.div>

            <motion.div
                className='button-container'
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{ease: 'easeIn', duration: 0.7}}
                >
                <a href='#about'>
                    <button className='intro-button'>
                        <p className='bold'>Read more</p>
                    </button>
                </a>
                <a href='#info'>
                    <button className='intro-button'>
                        <p className='bold'>Say hello</p>
                    </button>
                </a>
            </motion.div>

        </div>

    );
  }
  
  export default Intro;