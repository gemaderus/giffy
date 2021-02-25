import React, { Suspense } from 'react';
import './App.css';
import SearchResult from './pages/SearchResults/SearchResults.js';
import Detail from './pages/Detail/Detail.js';

import { Route } from 'wouter';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

const HomePage = React.lazy(() => import('./pages/Home/Home.js'))
function App() {
  return (
    <StaticContext.Provider value={
      { nombre: 'gema', 
      suscribeteAlCanal: true 
      }
      }>
      <div className="App">
      <Suspense fallback={null}  >
        <section className="App-content">
          <GifsContextProvider>
            <Route 
              path="/search/:keyword/:rating?"
              component={SearchResult}
              >  
              </Route>
              <Route 
              path="/"
              component={HomePage}
              >  
              </Route>
            <Route 
            path="/404"
            component={() => <h1>404 Error</h1>}
            >  
            </Route>
            <Route 
            path="/gif/:id"
            component={Detail}
            >  
            </Route>
            </GifsContextProvider>
        </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
