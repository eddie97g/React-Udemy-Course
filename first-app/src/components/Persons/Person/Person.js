import React, {Fragment, Component} from 'react';
import classes from "./Person.module.css";
import withClass from "../../../hoc/withClass"
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        return (
        
            <Fragment>

                {this.context.authenticated ? <p>Authenticated</p> : <p>Not Logged In</p> }
                
                <p>My name is {this.props.name} and I am {this.props.age} years old.</p>
                <input 
                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changeNameHandler} 
                    value={this.props.name} />
                <button onClick={this.props.deletePersonHandler}>Delete</button>
            </Fragment>
        
        )
    }
    
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    changeNameHandler: PropTypes.func,
    deletePersonHandler: PropTypes.func
};

export default withClass(Person, classes.Person);