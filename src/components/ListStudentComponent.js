import React, { Component } from 'react'
import StudentService from '../Services/StudentService'

class ListStudentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
                students: []
        }
        this.addStudent = this.addStudent.bind(this);
    }

    componentDidMount(){
        StudentService.getStudents().then((res) => {
            this.setState({ students: res.data});
        });
    }

    addStudent(){
        this.props.history.push('/add-student');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Student List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addStudent}> Add Student</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Roll No</th>
                                    <th> Name</th>
                                    <th> Department </th>
                                </tr>
                           </thead>
                            <tbody>
                                {
                                    this.state.students.map(
                                      student =>
                                        <tr key = {student.roll_no}>
                                            <td> {student.roll_no}</td>
                                             <td> {student.name} </td>   
                                             <td> {student.dept}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>
            </div>
        )
    }
}

export default ListStudentComponent