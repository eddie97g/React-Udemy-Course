import React, { Component } from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent/ValidationComponent"
import CharComponent from "./CharComponent/CharComponent"

class App extends Component {

  state = {
    text: "",
    textLength: 0
  }

  

  textHandler = (event) => {
    this.setState({
      text: event.target.value,
      textLength: event.target.value.length
    })
  }

  deleteCharacterHandler = (index) => {
    const characters = this.state.text.split('');

    characters.splice(index, 1);

    const updatedText = characters.join('');

    this.setState({
      text: updatedText,
      textLength: updatedText.length
    })
  }




  render() {

    let characters = null;

    characters = this.state.text.split('').map((char, index) => {
      return (
        <CharComponent 
          character={char} 
          deleteCharacter={this.deleteCharacterHandler.bind(this, index)}
          key={index} />
      )
      
    });
    return (
      <div className="App">
        <input type="text" onChange={this.textHandler} value={this.state.text} />
        <p>{this.state.textLength}</p>
        <ValidationComponent textLength={this.state.textLength} />
        {characters}
      </div>
    );
  }
  
}

export default App;
