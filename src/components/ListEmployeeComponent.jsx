
import React,{useEffect , useState} from 'react'


import { listEmployees } from '../services/EmployeeService'

import { useNavigate } from 'react-router-dom'

import { deleteEmployeeApi } from '../services/EmployeeService'



const ListEmployeeComponent = () => {

    const [employeesList , setEmployeesList] = useState([])

    const navigator = useNavigate() ;
   
    useEffect(() => {

        listEmp() ;
    } , [])

   function listEmp(){

    listEmployees().then((response) => {

        setEmployeesList(response.data);

    }).catch(error => {
        console.error(error);
    })
   }
 
    function addNewEmployee(){

        navigator('/add-employee')
    }

    function updateEmployee(id){

        navigator(`/edit-employee/${id}`)

    }

    function deleteEmployee(id){

        console.log(id);

        deleteEmployeeApi(id).then((response) => {

            listEmp();
            

        })

    }

    

  return (
    <div className='container mt-2' id='container1'>
        <h2 >List Of Employees</h2>
        <button className='btn btn-primary mt-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bolded mt-2'>
<thead>
    <tr>
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Actions</th>
    </tr>
</thead>
<tbody>
{employeesList.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>
                            <td>{data.email}</td>
                            <td><button className='btn btn-warning' onClick={() => updateEmployee(data.id)}>Update</button><button className='btn btn-danger' onClick={() => deleteEmployee(data.id)} style={{ marginLeft: '10px' }}>Delete</button></td>
                        </tr>
                    ))}

</tbody>


        </table>
      
    </div>
  )
}

export default ListEmployeeComponent


