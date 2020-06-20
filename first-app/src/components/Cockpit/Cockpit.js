import React, { useEffect, useRef, useContext } from 'react';
import classes from './cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    
    const buttonRef = useRef(null);
    

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // http request...
        const timer = setTimeout(()=> {
            alert('Saved data to cloud');
        }, 1000);
        buttonRef.current.click();

        return () => {
            clearTimeout(timer);
            console.log('unmounted in useEffect');
        }
    }, []);

    // useEffect()
    
    const assignedClasses = [];
    if (props.personsLength <= 2) {
        assignedClasses.push('red');
    }
    if (props.personsLength === 1) {
        assignedClasses.push('bold');
    }
    
    const authContext = useContext(AuthContext);
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This really works!</p>
            <button ref={buttonRef} onClick={props.togglePersons}>Toggle People</button>
            
            <button onClick={authContext.login}>Login</button>
            
            
        </div>
    );
}
export default React.memo(Cockpit);