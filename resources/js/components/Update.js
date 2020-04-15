import React , { useState , useEffect }  from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import {  Form, FormGroup, Label, Input  } from 'reactstrap';

import './signup.css';


function Updateusers(props) {


    let [pass, setPass] = useState('');
  let [email, setEmail] = useState('');
  let [Name, setName] = useState('');
  let [Status, setStatus] = useState('inactive');
  let [Role, setRole] = useState('admin');
  let [id , setId] = useState();



  const handleSubmit = (event) =>
  {
    event.preventDefault();
   let obj = {
     email,
     pass,
     name : Name,
     status : Status,
    
   }
   axios.put('/users/update/'+id , obj )
   .then(function(data) {
       console.log(data)
     });
  
  } 
 
  useEffect(() => {
      console.log(props.history.location.state.id)
      let id = props.history.location.state.id ;
      setId(id);

        axios.get( 'users/'+id  )
        .then( data=>{
            console.log(data.data)
            setName(data.data.name);
            setEmail(data.data.email)
            setPass(data.data.password)
            setRole(data.data.Role)
            

        } )

  },[])

    return (
        <div>
            

            <div className="bg" >
       
        <h1> Update User </h1>
     </div>
                
     <Form md={5} onSubmit={handleSubmit} >
      
          
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" value={ email } onChange={ (event) => { setEmail(event.target.value) }  } placeholder="with a placeholder" />
            </FormGroup>
     
         
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" value={ pass } onChange={ (event) => { setPass(event.target.value) }  } name="password" id="examplePassword" placeholder="password " />
            </FormGroup>
        <FormGroup>
          <Label for="Name">Name</Label>
          <Input type="text" name="Name" width={"10px"} value={Name} onChange={ (event) => { setName(event.target.value) }  }  placeholder="Name"/>
        </FormGroup>
       
        <FormGroup>
        <Label for="Role">Role</Label>
        <Input type="select" name="Role" id="Role" value={Role} onChange={(event)=>{setRole(event.target.value)}} >
          <option> admin </option>
          <option> user </option>
         
        </Input>
      </FormGroup>
       
      <FormGroup>
        <Label for="Select">Status</Label>
        <Input type="select" name="Status" id="status" value={Status} onChange={(event)=>{setStatus(event.target.value)}} >
          <option> active  </option>
          <option> inactive </option>
         
        </Input>
      </FormGroup>
       
        <button className="btn btn-primary" type="submit"> Update </button>
        
      


      </Form>
            
        </div>
    );
}

export default Updateusers;