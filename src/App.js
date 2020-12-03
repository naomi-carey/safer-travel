import React from "react";
import './App.css';
<<<<<<< HEAD
import Navbar from './components/Navbar/Navbar';

import Footer from './components/Footer/Footer_one';
=======
import Navbar from './components/Navbar/Navbar'
import Card from './components/TravelCards/Card'
import FlightCard from './components/Flights/FlightCard';
import Map from "./components/Map";
import Statistics from "./components/Statistics";
import Navbar from "./components/Navbar/Navbar";

>>>>>>> e4e8083b433cf6926aedd3135c090d35527af6ee

function App() {
  return (
    <div className="App">

     <>
     <Navbar />
      <FlightCard />
     

      </>

      <h3>Safer Travel App</h3>

      <Navbar />

<<<<<<< HEAD
     <Statistics />

     <Footer />

=======
      <Map />
>>>>>>> e4e8083b433cf6926aedd3135c090d35527af6ee

      <Statistics />

    </div>
  );
}

export default App;
