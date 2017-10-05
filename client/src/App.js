import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Home from './components/home/Home';
import { Provider } from 'react-redux';
import configureStore from './state/configureStore';
import 'font-awesome/css/font-awesome.css';

const appStore = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <HashRouter>
          <Route exact path="/" component={Home} />
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
