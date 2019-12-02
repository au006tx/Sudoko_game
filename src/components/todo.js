import React from 'react';

class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text : ''
        }

        this.onAdd = this.onAdd.bind(this)
    }

    onAdd() {
        this.props.getNote(this.state.text);
        this.setState({
            text : ''
        })
    }

    render(){
        return(
            <div style={{margin:'150px'}}>
                <h4> Todo </h4>
                <textarea value={this.state.text} onChange={(event) => this.setState({text : event.target.value })} />
                <h6> Count : {240-this.state.text.length}</h6>
                <button onClick={this.onAdd}> Add </button>
            </div>
        )
    }
}

export default Todo;