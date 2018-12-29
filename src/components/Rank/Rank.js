import React from 'react';


// Rank Text does not have z-index since react particles are white and the rank text is white,
// No one can tell its actually below the particle layer

const Rank = ({name, entries}) => {
    return (
        <div>

            <div className='white f3 fw1' >
                {`Good day ${name}, you've tried to assess me...`}
            </div>

            <div className='white f1'>
                {`${entries} times`}
            </div>

        </div>
    );
}

export default Rank;
