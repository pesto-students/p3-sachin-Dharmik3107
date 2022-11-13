//TODO: Input form and Result of shortedLink link's logic is created here with conditional rendering
//!total 4 states:value,input,shortedLink,copiedText
//?axios api with get method called to fetch the API
//*Copy to clipboard library used to copy shortedLink links
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import ReactGA from 'react-ga';
import { useEffect } from "react";

const Home = () => {
  const [value, setValue] = useState(""); 
  const [inputLink, setInputLink] = useState("");
  const [shortedLink, setShortedLink] = useState("");
  const [copiedText, setCopiedText] = useState(false);
  
  //user tracking
  useEffect(()=>{
    ReactGA.pageview(window.location.pathname)
  })
  const handleShorten = () => {
    setInputLink(value);
    setValue("");
  };

  if (inputLink.length >= 1) {
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${inputLink}`)
      .then((response) => {setShortedLink(response.data.result.full_short_link)
      console.log(response)})
      .catch((err) => console.log(err.message));
  }
  //interaction tracking
  const handleCopy = (event) => {
    setCopiedText(true);
  };

  if (copiedText) {
    setTimeout(() => {
      setCopiedText(false);
      document.getElementById("disabled").disabled = true;
    }, 1000);
  }

  return (
    <>
      <div className="inputForm">
        <input
          type="text"
          value={value}
          placeholder="Paste link here to short it..."
          onChange={(event) => {
            ReactGA.event({
              category:event.target.value,
              action:'test action',
              label:'test label',
            })
            setValue(event.target.value)}}
        />
        <button onClick={handleShorten}>Shorten</button>
      </div>
      {shortedLink && (
        <div className="shortedLink-container">
          <div className="shortedLink-link">{shortedLink}</div>
          <CopyToClipboard text={shortedLink} onCopy={handleCopy}>
            <button id="disabled" className={copiedText ? "copiedText" : "copy-btn"}>
              Copy
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default Home;
