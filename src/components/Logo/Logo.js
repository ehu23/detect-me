import React from 'react';
import eye from './eye.png';
import './Logo.css';


const Logo = () => {
    return (
        <div className='ma4 mt0 center picture br2 shadow-5 pa3 relative'>
            <img className="rotate-90 grow" alt='logo' src={eye}/>
        </div>
    );
};

export default Logo;
