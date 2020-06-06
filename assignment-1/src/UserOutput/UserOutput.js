import React from 'react';
import './UserOutput.css'

const UserOutput = props => {
    
    return (
        <div className="UserOutput">
            <p>This is the first paragraph with username: {props.username}</p>
            <p>This is the second paragraph</p>
        </div>
    )
}

export default UserOutput;