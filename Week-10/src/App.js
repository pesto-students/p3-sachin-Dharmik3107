import { useState } from 'react';
import ContentBG from './Components/ContentBG';
import Header from './Components/Header';
import InputForm from './Components/InputForm';
import ResultLink from './Components/ResultLink';
import './App.css';


function App() {
  const [link,setLink] = useState('')
  return (
    <>
      <Header/> 
      <InputForm setLink={setLink}/>
      <ContentBG/>
      <ResultLink link={link}/>
    </>
  );
}

export default App;
