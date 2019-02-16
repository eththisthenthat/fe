import React, { Component } from 'react';
import { Header } from './components'
import routes from './routes'
import { GlobalStateProvider } from './store';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
      
class App extends Component {
  render() {
    return (
      <Router>
      <GlobalStateProvider>
      <div className="App">
      <Header />
        {routes.map(route =>
           <Route {...route} key={route.path} />
           )}
      </div>
      </GlobalStateProvider>
      </Router>
    );
  }
}

export default App;
