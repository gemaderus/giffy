import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter';

function App() {
  return (
    <div className="App">
      <Link to='/gif/panda'>Panda</Link>
      <section className="App-content">
        <Route 
          path="/gif/:keyword"
          component={ListOfGifs}
          >  
          </Route>
      </section>
    </div>
  );
}

export default App;
