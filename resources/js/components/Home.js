import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch , Link ,Route } from 'react-router-dom'

import User from './DisplayUsers'
import Addusers from './Addusers'
import Updateuser from './Update'
import Header from './Header';


import 'bootstrap/dist/css/bootstrap.css'


function Home() {
    return (
        <div >

            <Header />
            <Switch>
            {/* <Route exact path="/home"  component={Header} /> */}
            <Route exact path="/user"  component={User} />
            <Route exact path="/addusers"  component={Addusers} />
            <Route exact path="/update"  component={Updateuser} />
            </Switch>

      
            
        </div>
    );
}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render( <Router>  <Home /> </Router> , document.getElementById('home'));
}
