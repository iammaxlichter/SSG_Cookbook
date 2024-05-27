import React from 'react';
import CustomNavbar from './CustomNavbar'; // Import your CustomNavbar component
import Home from './Home'; // Import your CustomNavbar component
import About from './About'
import './App.css'; // Assuming you have some CSS for styling your sections


function App() {
    return (
        <div className="App">
            <CustomNavbar/>
            <Home />
            <About />
        </div>
    );
}

export default App;