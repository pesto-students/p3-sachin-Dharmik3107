//! Parent Component with Different Routes...
import React from "react";
import Header from "./Components/Header";
import ContentBG from "./Components/ContentBG";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Contactus from "./Components/Contactus";
import { Routes, Route} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ReactGA from 'react-ga'

const tracking_id = 'UA-249368906-1';
ReactGA.initialize(tracking_id);

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/contactus" element={<Contactus/>}/>
      </Routes>
      <ContentBG />
      <Footer />
    </Router>
  );
};

export default App;
