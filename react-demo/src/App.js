import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  names = ["eddie", "ivan", "jacob"];
  state = {
    persons: [
      {name: "Eddie", age: 22},
      {name: "Ivan", age: 23}
    ],
    random: 'some value'
  }

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 22},
        {name: "Ivan", age: 23}
      ]
    })
  }

  render() {
    return (
    <div className="App">
      <Person name={this.state.persons[0].name} changeName={this.changeNameHandler} random={this.state.random}/>
      <Person name={this.state.persons[1].name} changeName={this.changeNameHandler} />
    </div>
    )
  }

}

export default App;
