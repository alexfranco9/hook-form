import React, { useState } from 'react';



const UserForm = props => {
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const [formSubmitted, setFormSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { Firstname, Lastname, Email, Password, ConfirmPassword };
        console.log("Welcome!", newUser);
        setFormSubmitted(true);
    };

    const TextValid = input => {
        if(input.length < 2) {
            return false;
        }
        return true;
    };

    const EmailValid = input => {
        if(input.length < 5) {
            return false;
        }
        return true;
    };

    const PasswordValid = input => {
        if(input.length < 8) {
            return false;
        }
        return true;
    };

    const ConfirmValid = input => {
        if(input !== Password) {
            return false;
        }
        return true;
    };

    return (
        <div className="container">
            <form onSubmit={createUser}>
                <div>
                    <label htmlFor="Firstname">Firstname: </label>
                    <input className="form-control" type="text" name="Firstname" value={Firstname} onChange={(e) => setFirstname(e.target.value)} />
                    {TextValid(Firstname) ? "" : <p>Field must be at least 2 characters long.</p> }
                </div>
                <div>
                    <label htmlFor="Lastname">Lastname: </label>
                    <input className="form-control" type="text" name="Lastname" value={Lastname} onChange={(e) => setLastname(e.target.value)} />
                    {TextValid(Lastname) ? "" : <p>Field must be at least 2 characters long.</p> }
                </div>
                <div>
                    <label htmlFor="Email">Email Address: </label>
                    <input className="form-control" type="text" name="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                    {EmailValid(Email) ? "" : <p>Field must be at least 8 characters long.</p> }
                </div>
                <div>
                    <label htmlFor="Password">Password: </label>
                    <input className="form-control" type="password" name="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
                    {PasswordValid(Password) ? "" : <p>Field must be at least 8 characters long.</p> }
                </div>
                <div>
                    <label htmlFor="ConfirmPassword">Confirm Password: </label>
                    <input className="form-control" type="password" name="ConfirmPassword" value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    {ConfirmValid(ConfirmPassword) ? "" : <p>Passwords must match!</p> }
                </div>
                <br/>
                <div>
                    <input disabled={!TextValid(Firstname, Lastname) || !EmailValid(Email) || !PasswordValid(Password) || !ConfirmValid(ConfirmPassword)} type="submit" value="Create User!" className="btn btn-outline-secondary"/>
                </div>
            </form>
            <br/>
            {
                formSubmitted ?
                <>
                <h3> |Your Form Data| </h3>
                <h5>Firstname: {Firstname}</h5>
                <h5>Lastname: {Lastname}</h5>
                <h5>Email: {Email}</h5>
                <h5>Password: {Password}</h5>
                <h5>Confirm Password: {ConfirmPassword}</h5>
                </>: ""
            }
        </div>
    );
};


export default UserForm;
