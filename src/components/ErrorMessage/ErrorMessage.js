import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = ({message}) => {
    return (
        <div className='f3 white'>
            <p> ERROR. {message} </p>
        </div>
    );

}

export default ErrorMessage;