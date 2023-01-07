import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './pages/home/Home';

import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import Header from './components/main/Header';
// import AppHome from './pages/home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'antd/dist/antd.css';


function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/services' component={Services} />
                <Route path='/portfolio' component={Products} />
                <Route path='/weblog' component={ContactUs} />
                <Route path='/about-us' component={SignUp} />
            </Switch>
        </Router>

    );
}

export default App;
