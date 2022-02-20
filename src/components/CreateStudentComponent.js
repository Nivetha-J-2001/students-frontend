import React, { Component } from 'react'
import StudentService from '../Services/StudentService';

class CreateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            roll_no :'',
            name : '',
            dept : ''
        }
        this.changerollnoHandler = this.changerollnoHandler.bind(this);
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changedeptHandler = this.changedeptHandler.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
    }
    saveStudent = (e) => {
        e.preventDefault();
        let student = {roll_no: this.state.roll_no,name: this.state.name, dept: this.state.dept};
        console.log('student => ' + JSON.stringify(student));
        StudentService.createStudent(student).then(res =>{
            this.props.history.push('/students');
        });
    }
    changerollnoHandler= (event) => {
        this.setState({roll_no: event.target.value});
    }
    changenameHandler= (event) => {
        this.setState({name: event.target.value});
    }
    changedeptHandler= (event) => {
        this.setState({dept: event.target.value});
    }
    cancel(){
        this.props.history.push('/students');
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className = 'text-center'>Add Student</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Roll No: </label>
                                            <input type='number' placeholder="roll no" name="roll_no" className="form-control" 
                                              value={this.state.roll_no} onChange={this.changerollnoHandler}  />
                                        </div>
                                        <br></br>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="name" className="form-control text-capitalize" 
                                              value={this.state.name} onChange={this.changenameHandler}  />
                                        </div>
                                        <br></br>
                                        <div className = "form-group">
                                            <label> Department: </label>
                                            <input placeholder="Department" name="dept" className="form-control text-uppercase" 
                                             value={this.state.dept} onChange={this.changedeptHandler}  />
                                        </div>
                                            <br></br>
                                            <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateStudentComponent