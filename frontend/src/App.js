import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import "./App.css";

const Landing = React.lazy(() => import("./controllers/landing/Landing"));

function App() {
  return (
    <div className="App">
      <header className="App-header">Blog for my paintings</header>
      <main>
        <Router>
          <Suspense fallback={<div>Loading site...</div>}>
            <Switch>
              <Route path="/" exact>
                <Landing />
              </Route>
            </Switch>
            <Redirect to="/" />
          </Suspense>
        </Router>
      </main>
      <footer className="app-footer">
        <p>&copy; JayKay</p>
      </footer>
    </div>
  );
}

export default App;
