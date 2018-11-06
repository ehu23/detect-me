import React, { Component } from 'react';
import Particles from 'react-particles-js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const particlesOptions = {
    particles: {
        number: {
            value: 25,
            density: {
                enable: true,
                value_area: 800
            }
        },
        shape: {
            type: "polygon",
            stroke: {width: 1, color: "#ffffff"},
            polygon: {nb_sides: 6}

        },
        opacity: {
            value: 0.3,
            random: true,
            anim: {enable: true, speed: 0.5, opacity_min: 0.0, sync: false}
        },
        size: {
            value: 15.0,
            random: true,
            anim: {enable: true, speed: 10.0, size_min: 0.0, sync: false}
        },
        move: {
            enable: true,
            random: true,
            speed: 2.0,
            bounce: false,
            out_mode: "bounce"
        }
    },
    interactivity: { //currently does not work! Due to z-index being -1.
        events: {
            onhover: {enable: true, mode: "repulse"}
        },
        modes: {
            repulse: { distance: 150, duration: 0.4 }
        }
    },
    retina_detect: true
};

const initialState = {
        input: '',
        imageUrl: '',
        box: {},
        route: 'signin',
        isSignedIn: false,
        user: {
            id: '',
            name: '',
            email: '',
            entries: 0, 
            joined: ''

        }
}

class App extends Component {
    
    constructor() {
        super();
        this.state = initialState;
    }

    loadUser = (data) => {
        this.setState({user: {
            id: data.id,
            name: data.name,
            email: data.email,
            entries: data.entries, 
            joined: data.joined
        }})
    }
    calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputimage');
        const width = Number(image.width);
        const height = Number(image.height);
        return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
        }
    }

    displayFaceBox = (box) => {
        this.setState({box: box})
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value});
    }

    onPictureSubmit = () => {
        this.setState({imageUrl: this.state.input});
        fetch('https://rocky-escarpment-90953.herokuapp.com/imageurl', {
            method: 'post', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                input: this.state.input
            })
        })
        .then(response => response.json())
        .then(response => {
            if (response) {
                fetch('https://rocky-escarpment-90953.herokuapp.com/image', {
                    method: 'put', 
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        id: this.state.user.id
                    })
                })
                .then(response => response.json())
                .then(count => {
                    this.setState(Object.assign(this.state.user, {entries: count}))
                })
                .catch(err => console.log(err));
            }
            this.displayFaceBox(this.calculateFaceLocation(response))
        })
        .catch(err => console.log(err));
    }

    onRouteChange = (route) => {
        if (route === 'signout') {
            this.setState(initialState);
        } else if (route === 'home') {
            this.setState({isSignedIn: true});
        }
        this.setState({route: route});
    }

    render() {
        return (
            <div className="App">
                <Particles className='particles'
                    params={particlesOptions}

                />
                <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
                { this.state.route === 'home'
                        ? <div>
                            <Logo />
                            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
                            <ImageLinkForm 
                                onInputChange={this.onInputChange} 
                                onPictureSubmit={this.onPictureSubmit}/>
                            <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
                        </div>
                        : (
                            this.state.route === 'signin' 
                            ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>   
                        )
                }
            </div>
        );
    }
}

export default App;
