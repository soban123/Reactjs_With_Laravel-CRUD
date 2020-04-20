import React from 'react';
import ReactDOM from 'react-dom';
import { Link  } from 'react-router-dom'


import './Navbar.css';





function Header() {

const HandleLogOut = () =>{

  axios.post( 'logout'  )
  .then( data=> console.log(data) )
}

    return (        
          <div className="container2">
          
          <h1   style={{ color : "orange" }} > Crud App </h1>
          
        <div className="inside-nav" >           
         <Link to='/user' className="child"   >  List    </Link>
            <Link to='/addusers' className="child"  >  Add   </Link>
             <a href="/" className="child"  >  <span   onClick={ HandleLogOut } >  Logout </span>  </a>


          <input  className="child"  type='text' placeholder='search'  />
      
          </div>

        </div>
     

    );
}

export default Header;