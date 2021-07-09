import React, { useState } from 'react';



const UserForm = props => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const [formSubmitted, setFormSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password, confirmPassword };
        console.log("Welcome!", newUser);
        setFormSubmitted(true);
    };

    return (
        <div className="container">
            <form onSubmit={createUser}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input className="form-control" type="text" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email Address: </label>
                    <input className="form-control" type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input className="form-control" type="password" onChange={(e) => setconfirmPassword(e.target.value)} />
                </div>
                <br/>
                <div>
                    <input type="submit" value="Create User!" className="btn btn-outline-secondary"/>
                </div>
            </form>
            <br/>
                <h3> |Your Form Data| </h3>
                <h5>Username: {username}</h5>
                <h5>Email: {email}</h5>
                <h5>Password: {password}</h5>
                <h5>Confirm Password: {confirmPassword}</h5>
        </div>
    );
};


export default UserForm;
