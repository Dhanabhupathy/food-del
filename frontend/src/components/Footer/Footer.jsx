import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h2>Food court</h2>
            <p>Top class Foods With Authentic Traditional Taste</p>
            <div className="footer-social-icons">
               
            </div>
        </div>
        
        <div className="footer-content-right">
            <h2>Call us</h2>
            <ul>
                <li>+91 9721847181</li>
                <li>foodcourt2026@gmail.com</li>
            </ul>
        </div>
      </div>
     <hr></hr>
      <p className="footer-copyright"
      > © foodhub.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
