import React from 'react';
import './App.css';
import AddStep from './Components/AddStep';
import ResetSteps from './Components/ResetSteps';
import {connect} from 'react-redux';
import {addStep,resetStep} from './store/Actions/action';
import { bindActionCreators } from 'redux'

function App(props) {
  return (
    <div className='step-counter App'>
      <span className='steps'>STEPS : {props.count}</span>
      <AddStep dispatch={props.addStep}/>
      <ResetSteps dispatch={props.resetStep}/>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    count : state.stepReducer.count
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addStep,
    resetStep
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
