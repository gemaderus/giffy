import React from 'react';
import './App.css';
import SearchResult from './pages/SearchResults/SearchResults.js';
import Home from './pages/Home/Home.js';
import Detail from './pages/Detail/Detail.js';

import { Route } from 'wouter';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

function App() {
  return (
    <StaticContext.Provider value={
      { nombre: 'gema', 
      suscribeteAlCanal: true 
      }
      }>
      <div className="App">
        <section className="App-content">
          <GifsContextProvider>
            <Route 
              path="/search/:keyword"
              component={SearchResult}
              >  
              </Route>
              <Route 
              path="/"
              component={Home}
              >  
              </Route>
            <Route 
            path="/gif/:id"
            component={Detail}
            >  
            </Route>
            </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
