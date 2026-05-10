import React, {useEffect, useState} from "react";
import "./Game.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

function Game(){
    const [dog, setDog] = useState(null);
    const [breed, setBreed] = useState(null);

    const extractBreed = (url) =>{
        const parts =url.split("/breeds/")[1]?.split("/");
        if(!parts) return "Unkown";
        return parts[0].includes("-")
        ? parts[0].split("-")
        : parts[0];
    };


    const fetchData = async () => {
        try{
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json();

            setDog(data.message);
            setBreed(extractBreed(data.message));
        }
        catch (error) {
            console.log("Error fatching data", error);
        };
    };
    //useEffect(() => {fetchData();}, []);

    const generatePic = () => {
        fetchData();
    }
    

    return(
        <div className="game-container">

            <h1>Cuteness generator<FontAwesomeIcon icon={faStar} /></h1>

            <div className="text-container">
               <p>Feeling a bit low?</p> 
               <p>This little game is here for you.</p>
               <p>No score, No pressure, just press the button and feel a bit better.</p>
            </div>
            
            <button className="cuteness-btn btn" onClick={generatePic}>Generate cuteness</button>
            
          
            <img src={dog} alt="Random dog" />
            <br />
            <p className="breed-tag">{breed ? `Breed: ${breed}` : "Click again"}</p>
    
        </div>
    )

}

export default Game;