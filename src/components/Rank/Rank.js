import React from 'react';

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
