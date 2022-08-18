import React from "react";
import Header from "./Components/Header";
import ContentBG from "./Components/ContentBG";
import Footer from "./Components/Footer";
import "./App.css";
import Home from "./Components/Home";
import Contactus from "./Components/Contactus";
import { Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <ContentBG />
      <Routes>
        <Route path="/" component={Home}>
        </Route>
        <Route path="/contactus" component={Contactus}>
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
