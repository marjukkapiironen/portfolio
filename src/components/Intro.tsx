import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { content } from '../content';
import '../styles.css';

const Intro : React.FC = () : React.ReactElement => {

    const [text, setText] = useState('learning');

    //Changing text animation
    const variants: Variants = {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 10 },
      };

      useEffect(() => {
        let count = 1;
    
        const intervalId = setInterval(() => {
          const { currentItem, addedCount } = changeText(count);
          setText(currentItem);
          count = addedCount;
        }, 1900);
    
        return () => clearInterval(intervalId);
      }, []);
    
      const changeText = (count: number): { currentItem: string; addedCount: number } => {
        let items: string[] = content.intro.changing_text;
    
        const currentItem = items[count];
        const addedCount = (count + 1) % items.length;
        return { currentItem, addedCount };
      };

    return (
        <div className='intro-container'>         

            <motion.div
                initial={{opacity: 0, y: -70}}
                animate={{opacity: 1, y: 0}}
                transition={{ease: 'easeIn', opacity: {duration: 2}, y: {duration: 0.7}}}
                >
                <h2>{content.intro.main_text}</h2>
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
                initial={{opacity: 0, y: 70}}
                animate={{opacity: 1, y: 0}}
                transition={{ease: 'easeIn', opacity: {duration: 2}, y: {duration: 0.7}}}
                >
                <a href='#about'>
                    <button className='intro-button bold'>
                        {content.intro.buttons.about}
                    </button>
                </a>
                <a href='#info'>
                    <button className='intro-button bold'>
                        {content.intro.buttons.contact}
                    </button>
                </a>
            </motion.div>

        </div>

    );
  }
  
  export default Intro;