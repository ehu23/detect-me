import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
    return (
        <div>

            {/*Instructions Text*/}
            <p className='f3 fw1 white bg-black-30 b--black br2 bw1 shadow-3 hover-bg-black-50 textBox mb3 pa1 ba'>
                Present to me a human photo {"{ publicly accessible image URL }"}, and I'll try to pinpoint a face...
                <br/>
                Sample URL --- https://i.ytimg.com/vi/aHqckA4fBTg/maxresdefault.jpg
            </p>

            {/*Image Upload Box*/}
            <div className='center'>
                <div className='center form pa4 br3 shadow-5 z-1'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button 
                        className='w-30 grow f3 link ph3 pv dib white bg-light-purple'
                        onClick={onPictureSubmit}
                    >Detect Me </button>
                </div>
            </div>
        </div>
    );
};

export default ImageLinkForm;
