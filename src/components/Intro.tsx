import { AnimatePresence, Variants, m } from 'framer-motion';
import { useEffect, useState } from 'react';
import { INTRO_CONTENT } from '../content';

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
        let items: string[] = INTRO_CONTENT.changing_text;
    
        const currentItem = items[count];
        const addedCount = (count + 1) % items.length;
        return { currentItem, addedCount };
      };

    return (
        <div className='intro-container'>         

            <m.div
                initial={{ opacity: 0, y: -70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                                ease: 'easeIn',
                                opacity: { duration: 2 },
                                y: { duration: 0.8 }
                            }}
                >
                <h2>{INTRO_CONTENT.main_text}</h2>
                    <AnimatePresence mode='wait'>
                        <m.div
                            variants={variants}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            key={text}
                            style={{ zIndex: -5}}
                            >
                            <h2 className='animated'>{text}</h2>
                        </m.div>
                    </AnimatePresence>
       
            </m.div>
            <m.div
                className='button-container'
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                                ease: 'easeIn',
                                opacity: { duration: 2 },
                                y: {duration: 0.8}
                            }}
                >
                <a href='#about'>
                    <button className='content-button bold'>
                        {INTRO_CONTENT.buttons.about}
                    </button>
                </a>
                <a href='#contact'>
                    <button className='content-button bold'>
                        {INTRO_CONTENT.buttons.contact}
                    </button>
                </a>
            </m.div>

        </div>

    );
  }
  
  export default Intro;