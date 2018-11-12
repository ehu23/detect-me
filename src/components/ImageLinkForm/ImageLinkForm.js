import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
    return (
        <div>
            <p className='f3 white'>
                {`Directions: Paste a (publicly accessible) image URL, and I'll try to find a face in it!`}
            </p>

            <p className='f3 white'>
                {'Example: https://i.ytimg.com/vi/aHqckA4fBTg/maxresdefault.jpg'}
            </p>

            <div className='center'>
                <div className='center form pa4 br3 shadow-5 z-1'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button 
                        className='w-30 grow f4 link ph3 pv dib white bg-light-purple'
                        onClick={onPictureSubmit}
                    >Detect </button>
                </div>
            </div>
        </div>
    );
};

export default ImageLinkForm;
