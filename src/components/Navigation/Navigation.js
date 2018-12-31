import React from 'react';


const navClassNames = 'z-1 f3 link dim black underline pa3 pointer grow mr2';


// NOTE: flex and justify-end must be in parent container of z-1 in order to make the z-1 work! Think.
const Navigation = ({ onRouteChange, isSignedIn }) => {
        if (isSignedIn)
        {
            return(
            <nav className='flex justify-end'>
                <p onClick={() => onRouteChange('signout')} className={navClassNames}> Sign Out </p>
            </nav>
            );
        } else {
            return (
            <nav className='flex justify-end'>
                <p onClick={() => onRouteChange('signin')} className={navClassNames}> Sign In </p>
                <p onClick={() => onRouteChange('register')} className={navClassNames}> Register </p>
            </nav>
            );
        }
    }
    
export default Navigation;
