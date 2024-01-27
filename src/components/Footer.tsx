import React from 'react';
import { content } from '../content';
import '../styles.css';

const Footer : React.FC = () : React.ReactElement => {

    return (
        <React.Fragment>
            <div className='component-gap'></div>   
            <div className='footer-container'>
                <p className='footer-text'>{content.footer.text}</p>
                <a href={content.footer.github_link.link}>
                    <button className='content-button footer-button bold'>
                        {content.footer.github_link.text}     
                    </button>
                </a>               
            </div>
        </React.Fragment>
    );
  }
  
  export default Footer;