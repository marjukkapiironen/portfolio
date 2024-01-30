import { m } from 'framer-motion';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { CONTACT_CONTENT } from '../content';

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
                <h2 className='section-heading'>{CONTACT_CONTENT.title}</h2>
                    <m.div
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
                        <p>{CONTACT_CONTENT.description}</p>
                    </m.div>
                    
                    <m.div
                        className='contact-links'
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        >           
                        {CONTACT_CONTENT.items.map((contact, index) =>
                          <a href={contact.link}>
                            <m.button
                                key={index}
                                className='content-button contact bold'
                                variants={item}
                                transition={{ duration: 0.5 }}
                                >
                                {contact.text}
                                <HiOutlineArrowLongRight size={40}/>                
                            </m.button>
                          </a> 
                        )}
                    </m.div>
            </div>                   
        </div>
    );
  }
  
  export default Contact;