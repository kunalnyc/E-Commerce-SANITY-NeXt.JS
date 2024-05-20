import React from 'react'
import { AiFillInstagram, AiOutlineTwitter , AiFillAmazonCircle , AiFillFacebook} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2024 French Angel All rights reserved</p>
      <p className='icons'>
        <AiFillInstagram /> <AiOutlineTwitter />
        <AiFillAmazonCircle /> <AiFillFacebook />
      </p>
    </div>
    )
}

export default Footer;
