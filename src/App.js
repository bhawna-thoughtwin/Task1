import React from "react";
import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

function App() {
  return (
    <div>
      <Routes>
    <Route path="/" component={Home} />
    <Route path="/blog" component={Blog} />
    </Routes>
      
    
    </div>
  );
}

export default App;
