import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="Person">
            <p>My name is {props.name}</p>
            <input type="text" onChange={props.changeName} value={props.name}></input>
            <p>{props.random}</p>
        </div>
        
    )
}

export default Person;

// Person() {

// }