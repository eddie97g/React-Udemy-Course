import React, { Component } from 'react';
import './App.css';

import Person from "./Person/Person"


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
    // DONT DO THIS: const persons = this.state.persons;
    // THIS IS OKAY: const persons = this.state.persons.slice();
    // The spread operator below is the preferred and modern way of copying and creating a new array
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  render() {

    let persons = null;

    if (this.state.showPeople) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person 
                name={person.name} 
                age={person.age} 
                deletePerson={() => this.deletePersonHandler(index)}
                key={person.id}/>
            )
          })}
        </div>  
      )
    }

    return (
      <div className="App">
        <button onClick={this.togglePersons}>Toggle People</button>
        {persons}
      </div>
    );
  }
  
}

export default App;
