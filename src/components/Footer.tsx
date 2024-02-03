import { FOOTER_CONTENT } from '../content';

const Footer : React.FC = () : React.ReactElement => {

    return (
        <div className='container-full-width-20-height light-bg'> 
            <div className='circle-bottom-center'/>
            <div className='footer-container'>
                <p className='footer-text uppercase-small bold'>{FOOTER_CONTENT.text}</p>              
            </div>
        </div>
    );
  }
  
  export default Footer;