import React from 'react';
import classes from './cockpit.module.css';

const Cockpit = (props) => {
    
    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push('red');
    }
    if (props.persons.length === 1) {
        assignedClasses.push('bold');
    }
    
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This really works!</p>
            <button onClick={props.togglePersons}>Toggle People</button>
        </div>
    );
}
export default Cockpit;