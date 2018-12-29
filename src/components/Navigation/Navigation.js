import React from 'react';


const navClassNames = 'z-1 f3 link dim black underline pa3 pointer';

const Navigation = ({ onRouteChange, isSignedIn }) => {
        if (isSignedIn)
        {
            return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signout')} className={navClassNames}> Sign Out </p>
            </nav>
            );
        } else {
            return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className={navClassNames}> Sign In </p>
                <p onClick={() => onRouteChange('register')} className={navClassNames}> Register </p>
            </nav>
            );
        }
    }
    
export default Navigation;
