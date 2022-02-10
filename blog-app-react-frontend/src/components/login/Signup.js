import React, { useState } from 'react';
import './Signup.css'
import validation from './validation';

function Signup(props) {
    const [signupformvalues, setSignupFormValues] = useState({ username: "", email: "", password: "", password2: "" });
    const [formErrors,setFormErrors] = useState({});

    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (event) => {
        // console.log(event.target); //event.target contain whole input field
        const { name, value } = event.target; //destructuring
        setSignupFormValues({ ...signupformvalues, [name]: value });
        console.log(signupformvalues)
    }

    async function handleSubmit(event){
        event.preventDefault();
        const username = signupformvalues.username;
        const email = signupformvalues.email;
        const password = signupformvalues.password;
        const repeatpassword = signupformvalues.password2;
        console.log('username',username,'email',email,'password',password,'repeatpassword',repeatpassword);
        // setSignupFormValues(validation(setFormErrors));
        // setIsSubmit(true);

        const response = await fetch(`/api/signup`, {
            method: 'post',
            body: JSON.stringify({ username, email,password,repeatpassword }),
            headers: {
            'Content-Type': 'application/json'
            }
            })
            const body = await response.json();
            console.log(body)
            alert(body.msg)
            }
            
        
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div id="login-box">
                    <div className="left">
                        <h1>Sign up</h1>

                        <input type="text" name="username" placeholder="Username" onChange={handleChange} value={signupformvalues.username}/>
                        <input type="text" name="email" placeholder="E-mail" onChange={handleChange} value={signupformvalues.email}/>
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} value={signupformvalues.password}/>
                        <input type="password" name="password2" placeholder="Retype password"onChange={handleChange} value={signupformvalues.password2}/>

                        <input type="submit" name="signup_submit" value="Sign me up" />
                    </div>

                    <div className="right">
                        <span className="loginwith">Sign in with<br />social network</span>

                        <button className="social-signin facebook">Log in with facebook</button>
                        <button className="social-signin twitter">Log in with Twitter</button>
                        <button className="social-signin google">Log in with Google+</button>
                    </div>
                    <div className="or">OR</div>
                </div>
            </form>

        </div>
    );
}

export default Signup;