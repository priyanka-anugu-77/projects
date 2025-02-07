import React,{useRef} from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';




const Contact = () => {
    const form = useRef();
        
    const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_wt6pklj', 'template_vahr72l', form.current, {
        publicKey: 'gVJlnIetA2kcjqPeR',
      })
      .then(
        () => {
          console.log('SUCCESS!');

          e.target.reset();
          alert("email sent");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (

     
    <section id='contactPage'>
        <div id="clients">
            <h1 className='contactpageTitle'> My clients</h1>
            <p className='clientSesc'>
                I have had the oppurtinity to work with a diverse group of companies.some of the notable companies I have worked with includes
                Fidelity and infosys
            </p>
           
        </div>
        <div id="contact">
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>please fill out the form below to discuss any work oppurtunities</span>
             <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                <input type='email' className='email' placeholder='Your Email' nme='your_email'/>
                <textarea  className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='send' className='submitBtn'>submit</button>
                <div className='links'>
                    <img src={FacebookIcon} alt=" Facebook" className='link'/>
                    <img src={TwitterIcon } alt="twitter" className='link'/>
                    <img src={ YouTubeIcon} alt="Youtube" className='link'/>
                    <img src={ InstagramIcon} alt="Instagram" className='link'/>
                </div>

             </form>
        </div>
    </section>
  )
}

export default Contact
