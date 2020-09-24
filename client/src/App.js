import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Index from './layout/Index';
import ArticleCard from './components/ArticleCard';

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Switch>
            <Route exact path="/articles/:page" component={Index} />
            <Route exact path="/test" component={ArticleCard} />
            <Route exact path="/:page" component={ArticleCard} />
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;
