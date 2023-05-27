import React, { useState } from 'react';
import '../css/Login.css'
import image from '../assets/images/falcon-logo.png'
import impactqa from '../assets/images/imactqa-logo.jpg'

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
      };
    return (
        <>
            <div className="logo-container">
                <img className="logo-left" src={image} alt="Left Logo" />
                <img className="logo-right" src={impactqa} alt="Right Logo" />
            </div>
            <div className="login-form">
                <h2>Login Here</h2>
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit">Login</button>
                </form>
                <button className="btn" onClick={() => props.onFormSwitch('register')}>
                    Don't have an Account? Register Here
                </button>
            </div>

        </>

    )
}

export default Login;