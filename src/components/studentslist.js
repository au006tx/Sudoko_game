import React from 'react';
import { Button, Form } from 'react-bootstrap';
class StudentsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            students : [
                {
                    'firstName': 'Salman',
                    'lastName': 'Ahmed',
                    'skills': ['Python','Django','CSS']
                },
                {
                    'firstName': 'Pramod',
                    'lastName': 'Ray',
                    'skills': ['Python','HTML','CSS']
                },
                {
                    'firstName': 'Sachin',
                    'lastName': 'Suresh',
                    'skills': ['Python', 'HTML', 'CSS', 'CAT']
                },
                {
                    'firstName': 'Samarth',
                    'lastName': 'Hegde',
                    'skills': ['Python', 'Git', 'CSS']
                }
            ],
            firstName: '',
            lastName: '',
            skills: ''
        }

        this.onAdd = this.onAdd.bind(this);
        this.sortFname = this.sortFname.bind(this);
        this.sortLname = this.sortLname.bind(this);
        this.sortSkills = this.sortSkills.bind(this);
    }

    displaylist() {
        return this.state.students.map((item, index) => (
            <div key={index}>
                <h1 style={{color : '#18477c'}}>First Name : {item.firstName} </h1>
                <h2 style={{color : '#606890'}}>Last Name : {item.lastName} </h2>
                <h3 style={{color : '#a36666'}}> Skills : {item.skills.map((x,index) => <li key={index}> {x} </li>)}</h3>
            </div>
        )
    )}

    onAdd() {
        let firstName = this.state.firstName;
        let lastName =  this.state.lastName;
        let skills = this.state.skills.split(',');
        this.setState({
            students : [...this.state.students, {
                firstName : firstName,
                lastName : lastName,
                skills : skills,
            }]
        })
    }

    sortFname() {
        let sortedfname = this.state.students.sort((a,b) => {
            return a.firstName.localeCompare(b.firstName);
        });
        this.setState({
            students : sortedfname
        });
    }

    sortLname() {
        let sortedlname = this.state.students.sort((a,b) => {
            return a.lastName.localeCompare(b.lastName);
        });
        this.setState({
            students : sortedlname
        });
    }

    sortSkills() {
        let sortedskills = this.state.students.sort((a,b) => {
            return a.skills.length > b.skills.length ? -1 : 1;
        });
        this.setState({
            students : sortedskills
        })
    }

    render(){
        return(
            <div style={{margin:'20px'}}>
                <div>
                    <div style={{margin:'10px', padding:'10px', width:'250px'}}>
                        <Form.Control size="lg" type="text" placeholder="first name" value={this.state.firstName} onChange={(event) => this.setState({firstName : event.target.value})} />
                        <Form.Control size="lg" type="text" placeholder="last name" value={this.state.lastName} onChange={(event) => this.setState({lastName : event.target.value})} />
                        <Form.Control size="lg" type="text" placeholder="skills" value={this.state.skills} onChange={(event) => this.setState({skills : event.target.value })} />
                    </div>
                    <div style={{padding:'10px', margin:'5px'}}>
                    <Button variant="outline-info" onClick={this.onAdd}> Add </Button>
                    </div>
                </div>
                <div style={{padding:'10px', margin:'5px'}}>
                    <Button variant="outline-info" onClick={this.sortFname}> firstName </Button>
                </div>
                <div style={{padding:'10px', margin:'5px'}}>
                    <Button variant="outline-info" onClick={this.sortLname}> lastName </Button>
                </div>
                <div style={{padding:'10px', margin:'5px'}}>
                    <Button variant="outline-info" onClick={this.sortSkills}> Skills </Button>
                </div>
                <div >
                {this.displaylist()}
                </div>
                
                
            </div>

        )
    }
}

export default StudentsList;