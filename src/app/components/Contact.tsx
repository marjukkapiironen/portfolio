'use client'
import { LazyMotion, m } from 'framer-motion';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { CONTACT_CONTENT } from '../content';

const Contact : React.FC = () : React.ReactElement => { 

  const loadFeatures = () =>
    import("../features.js").then(res => res.default)

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
      <LazyMotion features={loadFeatures}>
        <div id='contact' className='container-full-width-80-height'>
            <div className='container-max-1000-width'>
                <h1 className='section-heading'>
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
                          <a
                            key={index}
                            href={contact.link}
                            >
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
        </LazyMotion>
    );
  }
  
  export default Contact;