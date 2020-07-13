import React from 'react';
import './App.css';

import {connect} from 'react-redux';

import { addTodo, deleteTodo, editTodo } from './redux/Todo/todoAction';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list:[]
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

 updateInput(key, value){
   this.setState({
     [key] : value
   })
 }

  addTodo() {
    if(this.state.value !== '') {
    this.props.addTodo(this.state.value)
    }
    this.state.value='';
  }

deleteTodo(index){
  this.props.deleteTodo(index)
  
}
editTodo(index) {
  this.props.editTodo(index)
}

  render() {
    return (
        <div className="App">
          <h1 >Todo App</h1>
          <input type="text"
          value={this.state.value}
          onChange={e => this.updateInput("value",e.target.value)}
          />
          <button onClick={this.addTodo} style={{marginLeft:10}}> Add  </button>
          
          {this.props.list.map((item,index) => {
            return(
              <div style={{margin:10}}>
              <p style={{display:'inline'}}
               key={index}
              onClick={() => this.editTodo(index)}  >
                {item} 
                </p>
                <button 
                style={{marginLeft:30}}
                onClick={() => this.deleteTodo(index)}
                >X</button> 
              </div>
            )
          }) }
        </div>
    );
  }
}

const mapStateToProps = (state)=> {
console.log(state)
  return {
    value: state.value,
    list: state.list
  }
}
const mapDispatchtoProps=(dispatch) => {
  return{
      addTodo : function(value){
      dispatch(addTodo(value));
    },
    deleteTodo : function(value){
      dispatch(deleteTodo(value));
    },
    editTodo : function(value){
      dispatch(editTodo(value));
    }
  }
}
export default connect(mapStateToProps ,mapDispatchtoProps)(App);
