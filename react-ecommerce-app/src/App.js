import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';




function App() {
  return (
    <div className="App">
    <Navbar />  
     <Outlet />
     
       
    </div>
  );
}

export default App;
