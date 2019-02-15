import React, { Component } from 'react';
import Todos  from './Todo.js';
import Add from './Add_todo.js';


class App extends Component {
  state={
    todos:[
      {id:1,content:'complete react videos'},
      {id:2,content:'andre ng videos'}
    ]
  }
  delete_todo=(id)=>{
    const todos=this.state.todos.filter(todo=>{
      return id!==todo.id
    }
    )
    this.setState({
      todos:todos
    })
      
    
  }
  add=(todo)=>{
    todo.id=Math.random();
    let todos=[...this.state.todos,todo]
    this.setState(
      {
        todos:todos
      }
    )


  }
  

 
  render() {
    return (
      <div className="App container">
      <h1 className="centre blue text">TODOs</h1>
        <Todos todos={this.state.todos} delete_todo={this.delete_todo}/>
        <Add add={this.add}/>
      </div>
    );
  
}
}
export default App;