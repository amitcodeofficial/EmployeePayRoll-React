import axios from "axios";

const baseURL = "http://localhost:8080/employee";

class EmployeeService{

    getEmployees(){
        return axios.get(baseURL);
    }

    addEmployee(Employee){
        return axios.post(baseURL, Employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(baseURL+'/'+employeeId);
    }

    getEmployeeById(employeeId){
        return axios.get(baseURL+'/'+employeeId);
    }

    updateEmployee(Employee){
        return axios.put(baseURL, Employee);
    }

}

export default new EmployeeService();