import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Index from './layout/Index';
import Nav from './layout/Nav';
import ArticleCard from './components/ArticleCard';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <>
        <Nav />
        <Router>
          <Switch>
            <Route
              exact
              path={['/', '/articles/', '/articles/:page']}
              component={Index}
            />
            <Route exact path="/test" component={ArticleCard} />
            <Route exact path="/:page" component={Article} />
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;
