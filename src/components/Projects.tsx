import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { content } from '../content';
import '../styles.css';

const Projects : React.FC = () : React.ReactElement => {



    return (
        <div id='projects' className='component-container'>

        <h2 className='section-heading'>{content.projects.title}</h2>
            <motion.div
                style={{ paddingTop: "2em"}}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                                ease: 'easeIn',
                                opacity: { duration: 2 },
                                y: { duration: 0.9 },
                            }}
                viewport={{ once : true }}
                >
                    <p className='col-100'>{content.projects.description}</p>
                    <div className='col-container'>
                        <div className='col-50 card'>
                            <p>Testi</p>
                            <p>Testiä testiä</p>
                        </div>
                        <div className='col-50 card'>
                            <p>Testi</p>
                            <p>Testiä testiä</p>
                        </div>
                    </div>
               
               
        </motion.div>
    </div>      

    );
  }
  
  export default Projects;