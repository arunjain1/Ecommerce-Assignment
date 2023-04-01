import React from 'react'
import "./Styling/Footer.css";
import { FaLinkedin } from 'react-icons/fa';
function Footer() {
  return (
    <div className='footer_cont'>
       <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4>Categories</h4>
          <ul>
            <li><a href="#">LifeStyle</a></li>
            <li><a href="#">Shoes</a></li>
            <li><a href="#">Shirts</a></li>
            <li><a href="#">Electronics</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Country</h4>
          <ul>
            <li><a href="#">India</a></li>
            <li><a href="#">United States</a></li>
            <li><a href="#">Taiwan</a></li>
            <li><a href="#">South Korea</a></li>
            <li><a href="#">China</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Help</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">DCMA</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Follow Me</h4>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/
arun-jain-5aa013154"><FaLinkedin/></a>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Footer