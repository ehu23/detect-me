import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactParticles from './components/ReactParticles/ReactParticles';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(
                <div>
                    <App />
                    <ReactParticles />
                </div>, 
                document.getElementById('root'));

registerServiceWorker();
