import React from 'react'
import { useSelector , useDispatch} from 'react-redux';
import {changeLight} from './action/action';
import './App.css'

const App = () => {
  const myState = useSelector(state=>state.reducer);
  const dispatch = useDispatch();
  return (
    <div className={myState ? 'dark' : 'lit'}>
      <button onClick={()=>dispatch(changeLight(!myState))}>enable DarkMode</button>
    </div>
  )
}

export default App
