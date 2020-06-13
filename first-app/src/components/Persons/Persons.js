import React from 'react';
import Person from './Person/Person';

const Persons = (props) => props.persons.map((person, index) => {
    return <Person 
                name={person.name} 
                age={person.age} 
                key={person.id} 
                changeNameHandler={(event) => props.nameChangedHandler(event, person.id)}
                deletePersonHandler={() => props.deletePersonHandler(index)}>
            </Person>
});
    
    
        
    
    
    


export default Persons;