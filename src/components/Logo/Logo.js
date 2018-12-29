import React from 'react';
import Tilt from 'react-tilt';
import eye from './eye.png';
import './Logo.css';

// Tilt is currently set to 0, since it has a bug where it can tilt under the particle layer.

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2 relative" options={{ max : 0 }} style={{ height: 150, width: 150 }} >

                {/*The image of the master controller is here*/}
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop: '4px', position: 'relative', zIndex: '1'}} alt='logo' src={eye}/>
                </div>

            </Tilt>
        </div>
    );
};

export default Logo;
