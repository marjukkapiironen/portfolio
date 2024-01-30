import { motion } from 'framer-motion';
import { SiGithub } from "react-icons/si";
import { PROJECTS_CONTENT } from '../content';

const Projects : React.FC = () : React.ReactElement => {

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5,
            delay: 0.8,
            when: "beforeChildren"
          }
        }
      }
      
      const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
      }

    return (
        <>
            <div id='projects' className='component-container'>
                <h2 className='section-heading'>{PROJECTS_CONTENT.title}</h2>
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
                        <p className='col-100'>{PROJECTS_CONTENT.description}</p>
                        <motion.div
                            className='col-container projects'
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            >           
                            {PROJECTS_CONTENT.items.map((project, index) =>
                            <motion.div
                                key={index}
                                className='col-50 card'
                                variants={item}
                                transition={{ duration: 0.5 }}
                                >
                                <div className='card-content'>
                                    <div
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
                                    <a href={project.link}>
                                        <button className='content-button github-button bold'>
                                            <SiGithub size={20} className='icon'/>
                                            {project.link_text}
                                        </button>
                                    </a>
                                </div>
                            </motion.div>
                            )}
                        </motion.div>
                </motion.div>
            </div>
            <div className='component-gap'></div>      
        </>
    );
  }
  
  export default Projects;