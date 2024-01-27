import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SiGithub, SiPolymerproject } from "react-icons/si";
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
                        
                            {content.projects.items.map((project, index) =>
                            <div className='col-50 card'>
                                <div className='card-content'>
                                    <div
                                        key={index}
                                        className='show-text'>
                                        <div>
                                            <h3 style={{ marginBottom: "1em"}}>{project.name}</h3>
                                            <p>{project.description}</p>
                                        </div>
                                    </div>
                                    {Boolean(project.picture) &&
                                        <div className='show-picture'>
                                            <img
                                                className=''
                                                src={process.env.PUBLIC_URL + `${project.picture}`}
                                                alt=""
                                                />

                                        </div>
                                    }
                                </div>
                                
                                <div className='github-link'>
                                    <SiGithub size={25} className='icon'/>
                                    <a href={project.link}><p className='bold'>GitHub</p></a>
                                </div>
                        
                            </div>
                            )}

                        </div>  
               
               
        </motion.div>
    </div>      

    );
  }
  
  export default Projects;