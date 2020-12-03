import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Card from './components/TravelCards/Card'
import FlightCard from './components/Flights/FlightCard';
import Map from "./components/Map";
import Statistics from "./components/Statistics";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="App">

     <>
     <Navbar />
      <FlightCard />
     

      </>

      <h3>Safer Travel App</h3>

      <Navbar />

      <Map />

      <Statistics />

    </div>
  );
}

export default App;
