import { m } from 'framer-motion';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { CONTACT_CONTENT } from '../content';

interface Props {
  activeSection : string
}

const Contact : React.FC<Props> = ({ activeSection }) : React.ReactElement => {  

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
        hidden: { opacity: 0, y: 150 },
        show: { opacity: 1, y: 0 },
      }

    return (
        <div id='contact' className='container-full-width-50-height'>
            <div className='container-max-1000-width'>
                <h1 className={`section-heading ${activeSection === 'contact' ? 'active' : ''}`}>
                    {CONTACT_CONTENT.title}
                </h1>
                    <m.div
                        className='col-container'
                        initial={{ opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                                        ease: 'easeIn',
                                        opacity: { duration: 2 },
                                        y: { duration: 2 },
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
                                transition={{ duration: 1.5 }}
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