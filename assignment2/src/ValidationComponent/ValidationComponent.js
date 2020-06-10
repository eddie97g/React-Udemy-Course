import React from 'react';

const ValidationComponent = (props) => {

    let validationMessage = null;
    if (props.textLength < 5) {
        validationMessage = (
            <p>Text too short</p>
        )
    }
    return (
        <div>
            {validationMessage}
        </div>
        
    )
}

export default ValidationComponent;