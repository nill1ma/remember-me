import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Home from './components/Home';
import Block from "./components/Block";
import { store } from "./store";
import './App.css';

export default function App() {



  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/game'} component={Block} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}
