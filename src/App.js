import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';

//styleing
import './App.css';
import './assets/style/color.scss';
// store
import store from './redux/store';
// components
import Home from "./component/Home"
import Sign_up from './component/main/Sign_up';
import FeedProfilePage from './component/main/FeedProfilePage';


// import Slider from './component/fisrtScreen/slider/Slider';
// import About from './component/About';
// import Footer from './component/main/Footer';
// import Nav from './component/main/Nav';
// import Test from './component/main/Test';

function App() {
  return (
      <Provider store={store} >
        <Router>
          <div className="App">
            <FeedProfilePage />

            {/* <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/sign_up" exact component={Sign_up} />
            </Switch>  */}
          </div>
        </Router>
      </Provider>
  );
}

export default App;
