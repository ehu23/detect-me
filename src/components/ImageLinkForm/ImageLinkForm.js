import React from 'react';
import './ImageLinkForm.css';


class ImageLinkForm extends React.Component {

    handleKeyPress = (event) => {
        if (event.key === 'Enter')
            this.props.onPictureSubmit();
    }

    render() {

        const { onInputChange, onPictureSubmit } = this.props;

        return (
            <div>
                <p className='textBox f3 fw1 w-90 white bg-black-30 b--black  bw1 shadow-3 hover-bg-black-50 mb3 pa1 ba'>
                    Present to me a human photo {"{ publicly accessible image URL }"}, and I'll try to pinpoint a face...
                    <br/>
                    Sample URL --- https://i.ytimg.com/vi/aHqckA4fBTg/maxresdefault.jpg
                </p>
                <div className='center'> {/* Must have 'center' as parent of 'form' in order to invoke z-index on the css background. Its a particular caveat for the css 'background' style property */}
                    <div className='form pa4 br3 shadow-5 z-1'>
                        <input className='f4 pa2 w-70 light-purple'
                               type='text'
                               onChange={onInputChange}
                               onKeyUp={this.handleKeyPress}
                        />
                        <button
                            className='w-30 grow f3 link ph3 pv dib white bg-light-purple'
                            onClick={onPictureSubmit}
                        >Detect Me</button>
                    </div>
                </div>
            </div>
        );
    }
}
/* Function form:
const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
    return (
        <div>
            <p className='textBox f3 fw1 white bg-black-30 b--black br2 bw1 shadow-3 hover-bg-black-50 mb3 pa1 ba'>
                Present to me a human photo {"{ publicly accessible image URL }"}, and I'll try to pinpoint a face...
                <br/>
                Sample URL --- https://i.ytimg.com/vi/aHqckA4fBTg/maxresdefault.jpg
            </p>
            <div className='center'>
                <div className='form pa4 br3 shadow-5 z-1'>
                    <input className='f4 pa2 w-70'
                           type='text'
                           onChange={onInputChange}
                    />
                    <button
                        className='w-30 grow f3 link ph3 pv dib white bg-light-purple'
                        onClick={onPictureSubmit}
                    >Detect Me</button>
                </div>
            </div>
        </div>
    );
};
*/
export default ImageLinkForm;
