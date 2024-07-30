import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/employees' ;

export const listEmployees = () => {

    return axios.get(REST_API_BASE_URL);
}

export const createEmployees = (employee) => {

    return axios.post(REST_API_BASE_URL , employee);
}

export const getEmployee = (id) =>  axios.get(REST_API_BASE_URL + '/' + id );

export const updateEmployee = (id,employee) => {

    return axios.put(REST_API_BASE_URL + '/' + id ,employee  );
}

export const deleteEmployeeApi = (id) => {

    return axios.delete(REST_API_BASE_URL + '/' + id );
}

    


