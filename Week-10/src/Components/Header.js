import React from "react";
import VoiceControlUI from "./Images/Voice-Control.svg";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="page-title btn-hover">Shortly</div>
        <div className="nav-btns">
          <ul className="btn-container">
            <li className="btn-hover">Home</li>
            <li className="btn-hover">Contact us</li>
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
