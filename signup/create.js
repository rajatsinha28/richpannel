import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import './create.css';
import Plan from '../plan';

function CreateAccount() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [nav, setNav] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    const handleSubmit = (e) => {
        setNav(true);
    };

    return (
        <div className="contain">
            <div className="create-account-container">
                <h2>Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Name</label>
                        <input type="text" value={name} onChange={handleNameChange} required />
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" value={email} onChange={handleEmailChange} required />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" value={password} onChange={handlePasswordChange} required />
                    </div>
                    <div className="input-group remember-me">
                        <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} />
                        <label>Remember me</label>
                    </div>
                    <Link to='/login'>
                    <button type="submit" onClick={handleSubmit} className='submit'>Create Account {nav && <Link to ='/login'><Plan/></Link>}</button>
                    </Link>
                    <p>Already registered? <Link to="/login">Log In</Link></p>
                </form>
            </div>
        </div>
    );
}

export default CreateAccount;
