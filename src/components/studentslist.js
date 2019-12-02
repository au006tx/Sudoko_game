import React from 'react';

class StudentsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            students : [
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

  


    
    render(){
        return(
            <div style={{margin:'20px'}}>
                <div>
                    <div>
                        firstName : <input value={this.state.firstName} onChange={(event) => this.setState({firstName : event.target.value})} />
                    </div>
                    <div>
                        lastName : <input value={this.state.lastName} onChange={(event) => this.setState({lastName : event.target.value})} />
                    </div>
                    <div>
                        Skills : <input value={this.state.skills} onChange={(event) => this.setState({skills : event.target.value })} />
                    </div>
                    <button onClick={this.onAdd}> Add </button>
                </div>
                <div>
                    <button > firstName </button>
                    <button> lastName </button>
                    <button> Skills </button>
                </div>
                {this.displaylist()}
                
            </div>

        )
    }
}

export default StudentsList;