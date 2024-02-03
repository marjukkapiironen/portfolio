import { motion } from 'framer-motion';
import { SiGithub } from "react-icons/si";
import { PROJECTS_CONTENT } from '../content';

interface Props {
    activeSection : string
}

const Projects : React.FC<Props> = ({ activeSection }) : React.ReactElement => {

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
        hidden: { opacity: 0, y: 200 },
        show: { opacity: 1, y: 0 },
      }

    return (
        <div id='projects' className='container-full-width-height'>
            <div className='container-max-1000-width'>
                <h1 className={`section-heading ${activeSection === 'projects' ? 'active' : ''}`}>{PROJECTS_CONTENT.title}</h1>
                    <motion.div
                        style={{ paddingTop: "2em"}}
                        initial={{ opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                                        ease: 'easeIn',
                                        opacity: { duration: 2 },
                                        y: { duration: 2 },
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
                                transition={{ duration: 1.5 }}
                                >
                                <div className='card-content'>
                                    <div
                                        className='show-text'>
                                        <div>
                                            <p className='uppercase-small white' style={{ marginBottom: "1em"}}>{project.name}</p>
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
                                        <button className='content-button github-button uppercase-small white'>
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
        </div>      
    );
  }
  
  export default Projects;