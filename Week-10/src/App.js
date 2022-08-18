import React, { useState } from "react";
import Header from "./Components/Header";
import ContentBG from "./Components/ContentBG";
import Footer from './Components/Footer'
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("");
  const [input, setInput] = useState("");
  const [shorted, setShorted] = useState("");
  const [copied, setCopied] = useState(false);
  const handleShorten = () => {
    setInput(value);
    setValue("");
    if (input.length >= 1) {
      axios
        .get(`https://api.shrtco.de/v2/shorten?url=${input}`)
        .then((response) => setShorted(response.data.result.full_short_link))
        .catch((err) => console.log(err.message));
    }
  };
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
      <Header />
      <ContentBG />
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
      <Footer/>
    </>
  );
};

export default App;
