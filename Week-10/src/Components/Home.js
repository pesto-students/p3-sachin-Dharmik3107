//TODO: Input form and Result of shorted link's logic is created here with conditional rendering
//!total 4 states:value,input,shorted,copied
//?axios api with get method called to fetch the API
//*Copy to clipboard library used to copy shorted links
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";

const Home = () => {
  const [value, setValue] = useState("");
  const [input, setInput] = useState("");
  const [shorted, setShorted] = useState("");
  const [copied, setCopied] = useState(false);
  const handleShorten = () => {
    console.log(value);
    setInput(value);
    console.log(input);
    setValue("");
  };
  if (input.length >= 1) {
    console.log("api calling", input);
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${input}`)
      .then((response) => setShorted(response.data.result.full_short_link))
      .catch((err) => console.log(err.message));
    console.log(shorted);
  }
  const handleCopy = () => {
    setCopied(true);
  };
  if (copied) {
    setTimeout(() => {
      setCopied(false);
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
          onChange={(event) => setValue(event.target.value)}
        />
        <button onClick={handleShorten}>Shorten</button>
      </div>
      {shorted && (
        <div className="shorted-container">
          <div className="shorted-link">{shorted}</div>
          <CopyToClipboard text={shorted} onCopy={handleCopy}>
            <button id="disabled" className={copied ? "copied" : "copy-btn"}>
              Copy
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default Home;
