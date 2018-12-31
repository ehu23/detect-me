import React, { Component } from 'react';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Banner from './components/Banner/Banner';
import Signature from './components/Signature/Signature';
import './App.css';

const initialState = {
        input: '',
        imageUrl: '',
        box: {},
        route: 'signin',
        isSignedIn: false,
        showingErrorMessage: false,
        errorMessageText: '',
        showingImage: false,
        user: {
            id: '',
            name: '',
            email: '',
            entries: 0, 
            joined: ''
        }
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    // handles the toggling of displaying an error message
    onError = (message) => {
        if (this.state.showingErrorMessage) // do not keep sending setTimeout's onto the callback queue when error is already displaying
            return;

        this.setState({showingErrorMessage: true, errorMessageText: message});

        // Waits 2 seconds before setting state property!
        setTimeout(() => {
            this.setState({showingErrorMessage: false});
        }, 2000);
    }

    // Sets the 'user' state object
    loadUser = (data) => {
        this.setState({user: {
            id: data.id,
            name: data.name,
            email: data.email,
            entries: data.entries, 
            joined: data.joined
        }});
    }

    // Grabs the 1st bounding box prediction data and computes its location. Pairs with displayFaceBox.
    calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;

        const image = document.getElementById('inputimage'); //recall that we ID'd the image with 'inputimage' when we inserted it into the DOM
        const width = Number(image.width); //image.width returns a string, must cast into a number
        const height = Number(image.height);

        // Return a 'box' object for the state variable, 'box'
        return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
        }
    }

    // Just sets the box argument to the box state. Pairs with calculateFaceLocation.
    displayFaceBox = (box) => {
        this.setState({box: box})
    }

    // When the Input Field of the ImageLinkForm changes (when the user types something)
    onInputChange = (event) => {
        this.setState({input: event.target.value});
    }

    // When User clicks "Detect Me" button when uploading image
    onPictureSubmit = () => {
        this.setState({imageUrl: this.state.input});
        this.setState({showingImage: false}); // always clear the image from the screen, if there is one. This prevents previous buggy images from rendering
        // Post over the user's url input to the server.
        // We send over 'input' instead of 'imageUrl' since setState is asynchronous! and still setting the state at this moment, so the imageUrl is not ready yet
        // FYI: One way to go around the asynchronous setState is to use a callback function
        fetch('https://rocky-escarpment-90953.herokuapp.com/imageurl', {
            method: 'post', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                input: this.state.input
            })
        })
        .then(response => response.json())
        .then(response => {
            if (response.outputs) { // A valid response will have an 'outputs' property (Note: might change if Clarifai change's its API)
                // 'Put' over the user's ID
                this.setState({showingImage: true}); // We are allowed to display!
                fetch('https://rocky-escarpment-90953.herokuapp.com/image', {
                    method: 'put', 
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        id: this.state.user.id
                    })
                })
                .then(resp => resp.json())
                .then(count => {
                    // Update view with user's new entry count
                    // Object.assign only changes the 'entries' property of the user, doesn't reassign user a completely new object that only has entries as property
                    this.setState(Object.assign(this.state.user, {entries: count}));
                    // Pinpoint the face
                    this.displayFaceBox(this.calculateFaceLocation(response));
                })
                .catch(err => console.log(err));
            }
            else { //the user inputted an invalid url.
                this.onError("Please give me a valid URL that goes to a publicly accessible image!");
            }
        })
        .catch(err => console.log("Caught an error: ",err));
    }

    // 'route' parameter is 'where the route came from, or 'is to do''
    onRouteChange = (route) => {
        if (route === 'signout') {
            this.setState(initialState);
        } else if (route === 'home') {
            this.setState({isSignedIn: true});

        }
        this.setState({showingErrorMessage: false, route: route});
    }

    render() {
        return (
            <div className="App">

                <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>

                { this.state.route === 'home'
                        ? // Render Home Screen of the User
                        <div>
                            <Logo />
                            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
                            <ImageLinkForm 
                                onInputChange={this.onInputChange} 
                                onPictureSubmit={this.onPictureSubmit}/>
                            {this.state.showingImage && <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />}
                        </div>

                        : // Render Signin or Register Screen, depending on the state
                        <div>
                            <Banner />
                            { this.state.route === 'signin'
                                ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}
                                          onError={this.onError}/>
                                : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}
                                            onError={this.onError}/>
                            }
                        </div>
                }

                {this.state.showingErrorMessage && <ErrorMessage message={this.state.errorMessageText}/> }

                <Signature />

            </div>
        );
    }
}

export default App;
