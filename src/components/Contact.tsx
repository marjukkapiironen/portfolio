import { motion } from 'framer-motion';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { content } from '../content';
import '../styles.css';

const Contact : React.FC = () : React.ReactElement => {

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5,
            delay: 0.3,
            when: "beforeChildren"
          }
        }
      }
      
      const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
      }

    return (
        <div id='contact' className='last-component-container'>
            <div>
                <h2 className='section-heading'>{content.contact.title}</h2>
                    <motion.div
                        className='col-container'
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                                        ease: 'easeIn',
                                        opacity: { duration: 2 },
                                        y: { duration: 0.9 },
                                    }}
                        viewport={{ once : true }}
                        >
                        <p>{content.contact.description}</p>
                    </motion.div>
                    
                    <motion.div
                        className='contact-links'
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        >           
                        {content.contact.items.map((contact, index) =>
                          <a href={contact.link}>
                            <motion.button
                                key={index}
                                className='content-button contact bold'
                                variants={item}
                                transition={{ duration: 0.5 }}
                                >
                                {contact.text}
                                <HiOutlineArrowLongRight size={40}/>                
                            </motion.button>
                          </a> 
                        )}
                    </motion.div>
            </div>                   
        </div>
    );
  }
  
  export default Contact;