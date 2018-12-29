import React from 'react';
import './FaceRecognition.css';

class FaceRecognition extends React.Component {

    componentDidUpdate(){
        window.scrollTo({top: window.innerHeight, behavior: 'smooth'}); //not compatible yet with safari!   
    }

    render() {

        // Must destructure in the method where you need the props, this keeps methods separate and clean and side-effect free.
        const { imageUrl, box } = this.props;

        return (
            <div className='center ma'>
                <div className='absolute mt2 z-1'>
                    {/* Give the Image an ID of 'inputimage' so we can retrieve it later from the DOM */}
                    <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />

                    {/*The bounding box*/}
                    <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
                </div>
            </div>
        );
    }
};


/* Function form:

const FaceRecognition = ({ imageUrl, box}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2 z-1'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    );
};
*/

export default FaceRecognition;
