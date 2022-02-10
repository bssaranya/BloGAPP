import React, { useState } from 'react';
import './Login.css'

function Login(props) {

    const [signinformvalues, setSigninFormValues] = useState({ username: "", password: "" });
    // const handleLogin = (()=>{
    //     console.log(signinformvalues)
    // })

    const handleChange = (event) => {
        // console.log(event.target); //event.target contain whole input field
        const { name, value } = event.target; //destructuring
        setSigninFormValues({ ...signinformvalues, [name]: value });
        console.log(signinformvalues)
    }

    async function handleLogin(event){
        event.preventDefault();
        const username = signinformvalues.username;
        const password = signinformvalues.password;
        console.log('username',username,'password',password);
        // setSignupFormValues(validation(setFormErrors));
        // setIsSubmit(true);

        const response = await fetch(`/api/login`, {
            method: 'post',
            body: JSON.stringify({ username,password}),
            headers: {
            'Content-Type': 'application/json'
            }
            })
            const body = await response.json();
            // console.log(body)
            if(!body.msg){
                alert('successfully login')
            }
            alert(body.msg)
            }

    return (
        <div className='formbody'>
            <div className="login">
                <h1>Hi , Agent  ! </h1>

                <form onSubmit={handleLogin}>
                    <table>
                        <tr>
                            <th>
                                <input type="text" name="username" placeholder="Username" required="required" onChange={handleChange} value={signinformvalues.username}/>
                            </th> <th > <input type="password" name="password" placeholder="Password" required="required" onChange={handleChange} value={signinformvalues.password} /> </th>
                        </tr>
                        <tr>

                        </tr>
                    </table>
                    <button type="submit" className="btn btn-primary btn-block btn-large" >
                        Login </button>
                </form>
            </div>
        </div>
    );
}

export default Login;