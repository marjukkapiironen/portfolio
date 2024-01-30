import { FOOTER_CONTENT } from '../content';

const Footer : React.FC = () : React.ReactElement => {

    return (
        <>
            <div className='component-gap'></div>   
            <div className='footer-container'>
                <p className='footer-text'>{FOOTER_CONTENT.text}</p>
                <a href={FOOTER_CONTENT.github_link.link}>
                    <button className='content-button footer-button bold'>
                        {FOOTER_CONTENT.github_link.text}     
                    </button>
                </a>               
            </div>
        </>
    );
  }
  
  export default Footer;