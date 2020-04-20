import React , { useState  }  from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import {  Form, FormGroup, Label, Input  } from 'reactstrap';

import './addusers.css';


function Addusers(props) {


    let [pass, setPass] = useState('');
  let [email, setEmail] = useState('');
  let [Name, setName] = useState('');
  let [Status, setStatus] = useState('inactive');
  let [Role, setRole] = useState('admin');



  const handleSubmit = (event) =>
  {
    event.preventDefault();
   let obj = {
     email,
     pass,
     name : Name,
     status : Status,
     role : Role
   }

   axios.post('/users', obj ) 

  .then(function(data) {
    console.log(data)
  });
  
  } 
 
  

    return (
        <div>
       
                
     <Form md={5} className="form" onSubmit={handleSubmit} >
      
     <h1 className="center"> Add </h1>
            <FormGroup>
         
              <Input type="email" name="email" id="exampleEmail" value={ email } onChange={ (event) => { setEmail(event.target.value) }  } placeholder="Email" />
            </FormGroup>
     
         
            <FormGroup>
             
              <Input type="password" value={ pass } onChange={ (event) => { setPass(event.target.value) }  } name="password" id="examplePassword" placeholder="Password in integer" />
            </FormGroup>
        <FormGroup>
          
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
       
        <button className="btn btn-danger center " type="submit"> Submit </button>
        
      


      </Form>
            
        </div>
    );
}

export default Addusers;