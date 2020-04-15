import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Link ,Route } from 'react-router-dom'

import Users from './DisplayUsers'
import Addusers from './Addusers'
import Updateuser from './Update'

import './Navbar.css';


function Header() {
    return ( <Router >        
          <div className="container2">
          
          <h1   style={{ color : "orange" }} > Crud App </h1>
          
            <Link to='/users'   className="headitems" > <button className="btn btn-primary" > List   </button> </Link>
            <Link to='/addusers' className="headitems" > <button className="btn btn-danger"  > Add  </button> </Link>
    
          <div className='headitems' > 
          <input  type='text' placeholder='search'  />
         </div> 
          
            <Route exact path="/users"  component={Users} />
            <Route exact path="/addusers"  component={Addusers} />
            <Route exact path="/update"  component={Updateuser} />

        </div>
        </Router>

    );
}

export default Header;