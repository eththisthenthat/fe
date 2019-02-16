import React, { Component } from 'react';
import { Header } from './components'
import routes from './routes'
import { GlobalStateProvider } from './store';
import GlobalStyles from './styles/global'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
      
class App extends Component {
  render() {
    return (
      <Router>
      <GlobalStateProvider>
      <GlobalStyles />
      <Header />
        {routes.map(route =>
           <Route {...route} key={route.path} />
           )}
      </GlobalStateProvider>
      </Router>
    );
  }
}

export default App;
