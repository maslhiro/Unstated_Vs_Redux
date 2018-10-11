import React from "react";
import { BrowserRouter as Router, Route , Link} from "react-router-dom";
import Home from './components/Home'
import Mana from './components/Management'
import SignIn from './components/SignIn'
import { Provider } from 'react-redux';
import store from './stores'

const RouteConfig = () => (
    <Provider store={store}>
    <Router>
        <div>                
        <ul>
            <li>
            <Link to="/">SignIn</Link>
            </li>
            <li>
            <Link to="/home">Home</Link>
            </li>
            <li>
            <Link to="/mana">Mana</Link>
            </li>
        </ul>
        <Route exact path="/" component={SignIn} />
        <Route path="/home" component={Home} />
        <Route path="/mana" component={Mana} />
        </div>      
    </Router>
    </Provider>
  );

export default RouteConfig