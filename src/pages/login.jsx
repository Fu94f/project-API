import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Login.css"



function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const loginUser = (e) => {
        e.preventDefault();

        const savedUser = localStorage.getItem("username");
        const savedPssw = localStorage.getItem("password");

        if (username === savedUser &&
            password === savedPssw){
            alert(`You are Logged in! Welcome ${username}`);

            localStorage.setItem("loggedIn", "true");

             navigate("/game");

        } else{
            alert(" Wrong credentials! Try again!")
        }
    
    
    }

    return(
        <div className="login">
            <form  className="login-form" onSubmit={loginUser}>

                <h1>LOGIN</h1>

                <div className="input-box">
                  <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="input-box">
                   <input type="password"placeholder="Password"value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div> 
                <div className="signup-link">
                   <p>Don't have an account? <span><Link to="/registration">Sign up now</Link> </span></p>
                </div>
                <div className="button-box">
                    <button className="btn loginbtn" type="submit">Login</button>
                </div>
    
            </form>
        </div>

    )
}
export default Login;
