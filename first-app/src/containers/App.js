import React, { Component, Fragment } from 'react';
import './App.css';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

class App extends Component {

  state = {
    persons: [
      {id: 1, name: "Eddie", age: 22},
      {id: 2, name: "Esmie", age: 47},
      {id: 3, name: "Bianca", age: 27}
    ],
    showPeople: false,
    changeCounter: 0,
    authenticated: false
  }

  componentWillUnmount() {
    console.log("This will print when the app is unmounted. Used for 'cleanup.'");
  }

  togglePersons = () => {
    this.setState({
      showPeople: !this.state.showPeople
    })
  }

  loginHandler = () => {
    this.setState({authenticated: true});
    console.log("logging in");
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
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
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
      
      <Fragment>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
        <Cockpit
          title={this.props.appTitle} 
          togglePersons={this.togglePersons} 
          showPeople={this.state.showPeople}
          personsLength={this.state.persons.length}>
        </Cockpit>
        
        {persons}
        </AuthContext.Provider>
      </Fragment>
      
    );
  }
  
}

export default withClass(App, "App");
