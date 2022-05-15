import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";

//import Tetris from "./components/Tetris";

const App = () => {
  return (
    <Router>

      <Header/>
      <main>  
        HOME PAGE
      </main>
    </Router>
  )
}

export default App;
