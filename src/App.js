import React from "react";

import Map from "./components/Map"

import Statistics from "./components/Statistics";

import './App.css';
import Navbar from './components/Navbar/Navbar';

import Footer from './components/Footer/Footer_one';

function App() {
  return (


    <div className="App">

      <h3>Safer Travel App</h3>
    
      <Navbar/>

     <Map/>

     <Statistics />

     <Footer />



    </div>
  );
}

export default App;
