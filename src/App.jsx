import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Registration from "./pages/registration.jsx";
import Login from "./pages/login.jsx";
import API from "./assets/API.jsx"

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/api" element={<API/>}/>

        </Routes>
       </BrowserRouter>


   

   
    </>
  )
}

export default App
