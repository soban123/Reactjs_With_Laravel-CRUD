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
          
            <Link to='/user'   className="headitems" > <button className="btn btn-primary" > List   </button> </Link>
            <Link to='/addusers' className="headitems" > <button className="btn btn-danger"  > Add  </button> </Link>
             <a href="/" >  <button className="btn btn-success headitems mybtn "   onClick={ HandleLogOut } >  Logout </button>  </a>


          <div className='headitems' > 
          <input  type='text' placeholder='search'  />
         </div> 
         
        </div>
     

    );
}

export default Header;