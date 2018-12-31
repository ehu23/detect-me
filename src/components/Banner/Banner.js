import React from 'react';
import './Banner.css';

const tachyons = 'f-5 ba bw1 white b shadow-5 w-60 br-pill center';

const Banner = () => {
    return (
      <div className={`banner ${tachyons}`}>
          <p> DETECT ME AI </p>
      </div>
    );
}

export default Banner;