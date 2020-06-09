import React from 'react';

const Person = (props) => {
    return (
    <div>
        <p>My name is {props.name} and I am {props.age} years old.</p>
        <input type="text"/>
        <button onClick={props.deletePerson}>Delete</button>
    </div>
    )
}

export default Person;