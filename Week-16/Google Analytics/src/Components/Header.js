//TODO: Header UI components contains navigation bar to navigate 
//!made by custom not using any framework and using SVG format of image....
import React from "react";
import VoiceControlUI from "./Images/Voice-Control.svg";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="page-title btn-hover"><Link className="btn-hover" to='/'>Shortly</Link></div>
        <div className="nav-btns">
          <ul className="btn-container">
            <li className="btn-hover"><Link className="btn-hover" to='/'>Home</Link></li>
            <li  className="btn-hover"><Link className="btn-hover" to='/contactus'>Contact</Link></li>
            <li className="btn-hover">Pricing</li>
          </ul>
        </div>
        <div className="login-btns">
          <a href="/" className="btn-hover">
            Login/Sign-up
          </a>
        </div>
      </nav>
      <div className="page-descriptor">
        <div className="information">
          <h1>It is Just more than Shorten...</h1>
          <p>
            URL shortening is a technique on the World Wide Web in which a
            Uniform Resource Locator (URL) may be made substantially shorter and
            still direct to the required page. This is achieved by using a
            redirect which links to the web page that has a long URL.
          </p>
        </div>
        <img src={VoiceControlUI} alt="Code-Review" />
      </div>
    </div>
  );
};

export default Header;
