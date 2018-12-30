import React from 'react';

// Similar to SignIn.js, see that file for more notes.
class Register extends React.Component {

    constructor(props) { //class components should always call base constructor with props
        super(props);
        this.state = {
            registerEmail: '',
            registerPassword: '',
            registerName: ''
        }
    }

    onNameChange = (event) => {
        this.setState({registerName: event.target.value})
    }
    onEmailChange = (event) => {
        this.setState({registerEmail: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({registerPassword: event.target.value})
    }

    onSubmitRegister = () => {
        fetch('https://rocky-escarpment-90953.herokuapp.com/register', { 
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.registerEmail,
                password: this.state.registerPassword,
                name: this.state.registerName
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.email ) { 
                this.props.loadUser(user)
                this.props.onRouteChange('home')
            }
            else {
                alert("Please enter valid inputs");
            }
            // You can add an error to the user here, but there shouldn't be one just yet because you cannot 'register' wrong as of yet.
        })
        .catch(err => console.log(err));
    }


    render() {
        return (
            <article className="bg-white-10 hover-bg-white-40 shadow-hover relative z-1 br4 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"> {/*set zindex here for register form*/} 

                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">      
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="text" 
                                    name="name"  
                                    id="name"
                                    onChange={this.onNameChange}
                                />
                            </div>
                            <div className="mt3">      
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address"
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password"  
                                    id="password"
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div>
                            <input 
                                onClick={this.onSubmitRegister} //syntax for passing a function for onClick, not calling the function and passing onClick the return statement
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="Register"
                            />
                        </div>
                    </div>
                </main>  
            </article>
        );
    }
    
};

export default Register;
