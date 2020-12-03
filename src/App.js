import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Card from './components/TravelCards/Card'
import FlightCard from './components/Flights/FlightCard';

function App() {
  return (
    <div className="App">
     <>
     <Navbar />
      <FlightCard />
     

      </>
    </div>
  );
}

export default App;
