import axios from 'axios';

const Student_API_BASE_URL = "http://localhost:8080/students";

class StudentService {

    getStudents(){
        return axios.get(Student_API_BASE_URL);
    }

    createStudent(student){
        return axios.post(Student_API_BASE_URL, student);
    }
    
}

export default new StudentService()