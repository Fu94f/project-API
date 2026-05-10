import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Registration.css"


function Registration(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    const symbols = ["!", "@", "#", "$", "%"];
    const isValid =
      password.length >= 8 &&
      symbols.some(symbol => password.includes(symbol));

    const handleSignUp = (e) => {
        e.preventDefault();

        if (!isValid) {
            alert("Password must be 8 characters and include a symbol");
            return;
        }


        localStorage.setItem("username", username);
        setUsername("");

        localStorage.setItem("password", password);
        setPassword("");

        navigate("/Login");

    }

    return(
        <div className="registration">
            <form className="registration-form" onSubmit={handleSignUp}>

                <h1>SIGN UP</h1>
                <div className="input-box">
                   <label>Username</label>
                   <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="input-box">
                   <label>Password</label>
                   <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="login-link">
                   <p>Already signed up? <span><Link to="/login">Login now</Link></span></p>
                </div>
                <div className="button-box">
                  <button className=" registration-btn  btn" type="submit">Sign up</button>
                </div>
            </form>
        </div>

    );
}

export default Registration;
