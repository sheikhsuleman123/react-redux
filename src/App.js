import React from 'react';
import './App.css';

import {connect} from 'react-redux';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <h1>Hallo from App</h1>
      <h1>My name is {props.myname}</h1>
    </div>
  );
}

const mapStateToProps = (state)=> {
  return {
    myname:state.name
  }
}

export default connect(mapStateToProps)(App);
