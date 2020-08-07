import React from 'react'
import LinkedIn from './linkedin.png'
import './Footer.css'

const Footer = () => {

return (
  <>
    <footer>
      <div className='footer_container'>
        <a href="https://www.linkedin.com/company/revanix-biomedical/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedIn} alt='linked in logo' className='linkedin_logo'/>
        </a> 
      </div>      
    </footer>
  </>
)
}

export default Footer
