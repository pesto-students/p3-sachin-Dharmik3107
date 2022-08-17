import React, { useEffect, useReducer, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
//Declaring initial State
const initialState = {
  inputlink: "",
  shortenLink: "",
  copied: false,
  loading: false,
  error: false,
};
//Dispatch function : Fetcher

//Result Link Component
const ResultLink = (props) => {
  const [shorted, setShorted] = useState("");
  const fetcher = async (state) => {
    console.log('this entered')
    try {
      console.log(state.inputlink)
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${state.inputlink}`
      );
      const shortLink = response.data.result.full_short_link;
      console.log(shortLink)
      state.shortenLink = `${shortLink}`;
      setShorted(shortLink);
      console.log(shorted)
      // return state;
      return {
        inputlink: "",
        shortenLink: `${shortLink}`,
        copied: false,
        loading: false,
        error: false,
      };
    } catch (err) {
      state.error = err;
      return state;
    } finally {
      state.loading = false;
      return state;
    }
  };
  const [state, dispatch] = useReducer(fetcher, initialState);
  //use Effect to call dispatch function
  useEffect(() => {
    if (props.link.length) {
      console.log('dispatch calling')
      state.inputlink = props.link;
      dispatch(state);
    }
  }, [props.link]);
  //use Effect to make some delay while getting response
  useEffect(() => {
    const delay = setTimeout(() => {
      console.log("delay running");
      state.copied = false;
    }, 1000);
    console.log("delay finished");
    return () => clearTimeout(delay);
  }, [state.copied]);
  if (state.loading) {
    return <div className="shorted-link">Loading...</div>;
  }
  if (state.error) {
    return <div className="shorted-link">Something went wrong...</div>;
  }
  return (
    <>
      {shorted && (
        <div className="shorted-container">
          <div className="shorted-link">{shorted}</div>
          <CopyToClipboard
            text={shorted}
            onCopy={() => {
              state.copied = true;
            }}
          >
            <button className={state.copied ? "copied" : "copy-btn"}>
              Copy
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default ResultLink;
