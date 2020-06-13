import React, { Component } from 'react';
import './App.css';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends Component {

  state = {
    persons: [
      {id: 1, name: "Eddie", age: 22},
      {id: 2, name: "Esmie", age: 47},
      {id: 3, name: "Bianca", age: 27}
    ],
    showPeople: true
  }

  togglePersons = () => {
    this.setState({
      showPeople: !this.state.showPeople
    })
  }

  

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  }

  render() {

    

    let persons = null;

    if (this.state.showPeople) {
      persons = (
        <Persons 
          persons={this.state.persons} 
          nameChangedHandler={this.nameChangedHandler} 
          deletePersonHandler={this.deletePersonHandler}>
        </Persons>
      )
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon'
      // }; 
    }

    


    return (
      
      <div className="App">
        <Cockpit
          title={this.props.appTitle} 
          togglePersons={this.togglePersons} 
          showPeople={this.state.showPeople}
          persons={this.state.persons}></Cockpit>
        
        {persons}
      </div>
      
    );
  }
  
}

export default App;

