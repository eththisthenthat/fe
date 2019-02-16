import React, { Component } from 'react';
import { Header } from './components'
import routes from './routes'
import { GlobalStateProvider } from './store';
import theme from './styles'
import GlobalStyles from './styles/global'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import './App.css';
      
class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStateProvider>
            <GlobalStyles />
            <Header />
            {routes.map(route =>
              <Route {...route} key={route.path} />
            )}
          </GlobalStateProvider>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
