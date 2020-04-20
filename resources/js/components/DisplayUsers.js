import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Table } from 'reactstrap';


class  Users  extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            users : [],
            loaded: false 
        }
    }

    componentDidMount(){

        axios.get( 'users'  )
        .then( data=>  { this.setState( {users : data.data , loaded : true} )   } )
    }

    handleUpdate(id){

        this.props.history.push('/update', {id})
    }

     handleDelete  ( id ) {
      

        axios.delete('/users/delete/'+id , { params : id } )
        .then(function(data) {
            console.log(data)
          });

      }

render(){
    console.log(this.state.users)

   const array_users =    this.state.users.map( e => { 
    
        return    <tr>
             <td> {e.id}  </td>
            <td> {e.name} </td>
            <td> {e.email}</td>
            <td> {e.role}</td>
            <button className="btn btn-primary" onClick={ ()=>{this.handleUpdate(e.id) } }  >  Update </button>
            <button className="btn btn-danger" onClick={ ()=>{this.handleDelete(e.id) }  } >  Delete </button>
         </tr>
        
         } )  ;

    return ( this.state.loaded ? 
        <div >
            <br></br>
            <br></br><br></br>
            <br></br>

            <h1> Users </h1>
            <Table >
  
  <tr>
    <th>id</th>
    <th>First Name</th>
    <th>Email</th>
    <th> Role </th>
    <th> Action </th>

  
  </tr>
    {array_users }
     
    </Table> 
        </div> : <h1>  Loading  </h1> 
    );
    }
}

export default Users;