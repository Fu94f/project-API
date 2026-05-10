import { useState} from "react";
import { useNavigate } from "react-router-dom";


function Registration(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [registered, setRegistered] = useState(false);

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

        setRegistered(true); 

        navigate("/");

    }

    return(
           <div className="container">
              <form className="registration-form" onSubmit={handleSignUp}>
                <h1>SIGN UP</h1>
                <div className="input-box">
                   <label>Username</label>
                   <input type="text"placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="input-box">
                   <label>Password</label>
                   <input type="password"placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="remeberme">
                   <label><input type="checkbox" /> Remeber me</label>
                </div>

                <button type="submit">Sign up</button>

        
    
               </form>
        </div>

    );
}

export default Registration;