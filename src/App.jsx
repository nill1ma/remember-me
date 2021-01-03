import React from 'react';
import { Provider } from "react-redux";
import Block from "./components/Block";
import store from "./store";
import './App.css';

export default function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Block />
      </Provider>
    </div>
  );
}
