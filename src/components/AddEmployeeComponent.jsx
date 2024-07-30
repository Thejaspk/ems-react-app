
import React, { useEffect, useState } from 'react'
import { createEmployees, getEmployee, updateEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const AddEmployeeComponent = () => {

  const [firstName , setFirstName] = useState('');
  const [lastName , setLastName] = useState('');
  const [email , setEmail] = useState('');
  const navigate = useNavigate();
  const {id} = useParams();
  

 
  

  useEffect(() => {
    if (id) {
      getEmployee(id).then((response)=> {
        console.log(response.data);
        setFirstName(response.data.firstName) ;
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      })
    }
  }, [id]);
 

  function handleFirstName(e){
    setFirstName(e.target.value);
  }

  function handleLastName(e){
    setLastName(e.target.value);
  }

  function handleEmail(e){
    setEmail(e.target.value);
  }

  function saveEmployee(e){

    e.preventDefault();

    const employee = {firstName , lastName , email}

    if(id){
      updateEmployee(id , employee).then((response) => {
  
        console.log(response.data);
        navigate('/employees');
  
      }).catch(error => {
        console.error(error);
      })
  
    }
    else{
      createEmployees(employee).then((response) => {
        console.log(response.data);
        navigate('/employees')
      }).catch(error => {
        console.error(error);
      })
    }

  }

  function pageTitle(){

    if(id){
      return <h2 className='text-center'>Update Employee</h2>
     
    }
    else{
      return <h2 className='text-center'>Add Employee</h2>
    }

  }

  return (
    <div className='container mt-2'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {
            pageTitle()
          }

        
        <div className='card-body'>
<form>

<div className='form-group mb-2'>

<label className='form-label'>First Name:</label>
<input
type='text'
placeholder='Enter Employee First Name'
name = 'firstName'
value={firstName}
className='form-control'
onChange={handleFirstName}
></input>

</div>

<div className='form-group mb-2'>

<label className='form-label'>Last Name:</label>
<input
type='text'
placeholder='Enter Employee Last Name'
name = 'LastName'
value={lastName}
className='form-control'
onChange={handleLastName}
></input>

</div>


<div className='form-group mb-2'>

<label className='form-label'>Email:</label>
<input
type='text'
placeholder='Enter Employee Email'
name = 'email'
value={email}
className='form-control'
onChange={handleEmail}
></input>

</div>

<button className='btn btn-success' onClick={saveEmployee}>Submit</button>

</form>





        </div>

        </div>



      </div>
      

     
      </div>
    )
   
    
}

export default AddEmployeeComponent
