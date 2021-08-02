import React from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './Footer.css'
function Footer() {
    return (
        <div className="footer-container">
       <section className="footer-subscription">
         <p className="footer-subscription-heading">
             Join the adventure to receive 
         </p>
         <p className="footer-subscription-text">
             you can unssubscription at any time 
         </p>
         <div className="input-areas">
             <form>
                 <input type="email" name="email"  placeholder="your email" className="footer-input"/>
                 <Button buttonStyle='btn--outline'>Subscribe</Button>
             </form>
         </div>
       </section>
       <div className="footer-links">
           <div className="footer-link-wrapper">
               <div className="footer-link-items">
                   <h2>About Us</h2>
                   <Link to='sign-up'>How it Works</Link>
                   <Link to='/'>Testimonials</Link>
                   <Link to='/'>Careers</Link>
                   <Link to='/'>Investors</Link>
                   <Link to='/'>Terms of Service</Link>
               </div>
           </div>
           <div className="footer-link-wrapper">
               <div className="footer-link-items">
                   <h2>Videos</h2>
                   <Link to='sign-up'>Submit Video</Link>
                   <Link to='/'>Ambassadors</Link>
                   <Link to='/'>Agency</Link>
                   <Link to='/'>Influencer</Link>
                  
               </div>
           
               <div className="footer-link-items">
                   <h2>Social Media</h2>
                   <Link href='www.instagram.com'>Instagram</Link>
                   <Link href='www.facebook.com'>Facebook</Link>
                   <Link href='www.youtube.com'>Youtube</Link>
                   <Link href='www.twitter.com'>Twitter</Link>
                  </div>
               </div>
       </div>
       <section className="social-media">
           <div className="social-media-wrap">
               <div className="footer-logo">
                   <Link to='/' className='social-logo'>
                       Almadina School <i className='fab fa-typo3'/>
                   </Link>
              
            
           </div>
           <small className='website-rights'>
                    © 2021 B All Rights Reserved</small>
           <div className="social-icons">
               <a className='social-icon-link facebook' 
               href='https://www.facebook.com/'
               target="_blank" 
               rel="noreferrer"
               aria-label="https://www.facebook.com/">
                   <i className="fab fa-facebook-f"/>
                   </a> 
                   <a className='social-icon-link instagram' 
               href='https://www.instagram.com/'
               target="_blank" 
               rel="noreferrer"
               aria-label="Instagram">
                   <i className="fab fa-instagram"/>
                   </a> 

                   <a className='social-icon-link youtube' 
               href='https://www.youtube.com/'
               target="_blank" 
               rel="noreferrer"
               aria-label="https://www.youtube.com/">
                   <i className="fab fa-youtube"/>
                   </a> 

                   <a className='social-icon-link twitter' 
               href='https://twitter.com/?lang=en'
               target="https://twitter.com/?lang=en" 
               rel="noreferrer"
               aria-label="https://twitter.com/?lang=en">
                   <i className="fab fa-twitter"/>
                   </a> 

                   <a className='social-icon-link linkedin' 
                   
               href='https://ca.linkedin.com/'
             
               rel="LinkedIn"
               target="https://ca.linkedin.com/" 
               aria-label="LinkedIn">
                   <i className="fab fa-linkedin"/>
                   </a> 
           </div>
           </div>
       </section>
       </div>
    )
}

export default Footer
