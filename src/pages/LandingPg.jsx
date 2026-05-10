import { Link } from "react-router-dom";
import "./LandingPg.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import DogImage from "../assets/dachshund.jpg"


function LandingPg() {


  return (
    <div className="landing-page">

      <nav className="navbar">
        <h1 className="logo">Cuteness Generator<FontAwesomeIcon icon={faStar} /></h1>

        <div className="nav-btn-container">
          <Link to= "/login"><button className="nav-btn btn">Login</button></Link>
          <Link to= "/registration"><button className="nav-btn btn">Sign Up</button></Link> 
        </div>
      </nav>

        <section className="header">

            <div className="header-text">

              <h1>A tiny game to brighten your day</h1>
              <p>Feeling stressed, tired, or just bored ?Generate random adorable dogs instantly and enjoy a small moment of happiness.</p>
              
              <Link to="/registration"><button className="btn">Start Now</button></Link>
                    
            </div>

            <div className="header-image">
               <img
                  src={DogImage}
                  alt="Cute Dog"
                />
            </div>

        </section>

    </div>
  );
}

export default LandingPg;