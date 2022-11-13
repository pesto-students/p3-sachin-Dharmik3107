//TODO: Contact page app with contact info and social icons
//!used Social-icons library for icons
import React from "react";
import { SocialIcon } from "react-social-icons";
const Contactus = () => {
  return (
    <div className="contact-container">
      <div className="contact-us">
        <h5 className="email">Gmail: abhangidharmik@gmail.com</h5>
        <h5 className="email">Github: @Dharmik3107</h5>
        <h5 className="email">Instagram: @_dharmik_31_</h5>
      </div>
      <div className="social-icons">
        <SocialIcon className='icon' url="https://twitter.com/AbhangiDharmik" />
        <SocialIcon className='icon' url="https://github.com/Dharmik3107" />
        <SocialIcon className='icon' url="https://facebook.com/" />
        <SocialIcon className='icon' url="https://instagram.com/" />
      </div>
    </div>
  );
};

export default Contactus;
