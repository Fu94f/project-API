import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Registration from "./pages/Registration.jsx";
import Login from "./pages/Login.jsx";
import Game from "./pages/Game.jsx"
import LandingPg from "./pages/LandingPg.jsx";

function App() {
const isLoggedIn = localStorage.getItem("loggedIn") === "true";



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPg/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/game" element={<Game/>}/>

        </Routes>
       </BrowserRouter>


   

   
    </>
  )
}

export default App
