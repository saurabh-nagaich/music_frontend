import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import './App.css';
import About from './component/About';
import Home from './component/Home';
import Nav from './component/Nav';
import store from './redux/store';

function App() {
  return (
      <Provider store={store} >
        <Router>
          <div className="App">
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about"  component={About} />
            </Switch>
          </div>
        </Router>
      </Provider>
  );
}

export default App;
