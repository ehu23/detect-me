import React from 'react';


class SignIn extends React.Component {
    
    constructor(props) { //class components should always call base constructor with props
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }
    onSubmitSignIn = () => {
        fetch('https://rocky-escarpment-90953.herokuapp.com/signin', {
            // Prepare the Post Request
            method: 'post', //by default, fetch is GET
            headers: {'Content-Type': 'application/json'}, // headers accepts an object. Content-Type is in quotes because it has a dash in the middle.
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                //if email and password matched in database,
                if (user.email) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home')
                }
                //email and password did not find a match, return an error to the user. TODO: make the returned error prettier.
                else  {
                    alert("Email and/or Password combination does not exist, please try again!")
                }
            })
            .catch(err => console.log(err));
    }
    
    
    render() {
        const {onRouteChange} = this.props;
        return (
            // Article tag is the tachyon 'card' element underneath the sign in form, which is tachyon generated as well.
            <article className="bg-white-10 hover-bg-white-40 shadow-hover relative z-1 br4 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"> {/*z-index change here*/}
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
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
                                onClick={this.onSubmitSignIn} //syntax for passing a function for onClick, not calling the function and passing onClick the return statement
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="Sign in"
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('register')}
                               className="b ba b--black ph3 pv2 f6 link dim black dib pointer">
                               Register
                            </p>
                        </div>
                    </div>
                </main>  
            </article>
    
        );
    }
    
};

export default SignIn;
