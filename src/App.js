import React from 'react';
import CustomNavbar from './components/CustomNavbar/CustomNavbar'; // Import your CustomNavbar component
import Home from './components/Home/Home'; // Import your CustomNavbar component
import About from './components/About/About';
import Recipes from './components/Recipes/Recipes';
import Buy from './components/Buy/Buy';
import Contact from './components/Contact/Contact';
import './App.css'; // Assuming you have some CSS for styling your sections


function App() {
    return (
        <div className="App">
            <CustomNavbar/>
            <Home/>
            <About/>
            <Recipes/>
            <Buy/>
            <Contact/>
        </div>
    );
}

export default App;