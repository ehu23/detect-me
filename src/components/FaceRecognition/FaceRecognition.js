import React from 'react';
import './FaceRecognition.css';

class FaceRecognition extends React.Component {

    componentDidUpdate(){
        window.scrollTo({top: window.innerHeight, behavior: 'smooth'}); //not compatible yet with safari!   
    }

    render() {
        return (
            <div className='center ma'>
                <div className='absolute mt2 z-1'>
                    <img id='inputimage' alt='' src={this.props.imageUrl} width='500px' height='auto' />
                    <div className='bounding-box' style={{top: this.props.box.topRow, right: this.props.box.rightCol, bottom: this.props.box.bottomRow, left: this.props.box.leftCol}}></div>
                </div>
            </div>
        );
    }
};

    /*
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
