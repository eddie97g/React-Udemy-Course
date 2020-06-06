import React from 'react';

const UserInput = props => {
    
    const style = {
        border: "1px solid blue"
    }

    return (
        <div style={style}>
            <input type="text" onChange={props.usernameHandler} value={props.username}/>
        </div> 
    )
}

export default UserInput;