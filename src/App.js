import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './containers/Home';

function App() {
  return (
    <main>
      <section>
        <Router>
          <Switch>
            <Route path="/">
              <div>
                <Home/>
              </div>
            </Route>
          </Switch>
        </Router>
      </section>

    </main>
  );
}

export default App;
