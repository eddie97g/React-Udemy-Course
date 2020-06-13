import React from 'react';
import classes from "./Person.module.css";

const Person = (props) => {

    return (
        <div className={classes.Person}>
            <p>My name is {props.name} and I am {props.age} years old.</p>
            <input type="text" onChange={props.changeNameHandler} value={props.name} />
            <button onClick={props.deletePersonHandler}>Delete</button>
        </div>
    )
}

export default Person;