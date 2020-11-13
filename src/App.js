import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import './App.css';
// import About from './component/About';
import Home from "./component/Home"
import Footer from './component/main/Footer';
import Nav from './component/main/Nav';
import Sign_up from './component/main/Sign_up';
// import Test from './component/main/Test';
import store from './redux/store';

function App() {
  return (
      <Provider store={store} >
        <Router>
          <div className="App">
            <Sign_up />

            {/* <Nav /> */}
            {/* <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/sign_up" exact component={Sign_up} />
            </Switch> */}
          </div>
          {/* <Footer /> */}
        </Router>
      </Provider>
  );
}

export default App;
