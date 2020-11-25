import React from "react";
import Map from "./components/Map"
import './App.css';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">

      <h3>Safer Travel App</h3>
    
      <Navbar/>
     <Map/>

    </div>
  );
}

export default App;
