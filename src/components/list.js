import React from 'react';
import Todo from './todo';

class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            note : '',
            items : []
        }
        this.displayList = this.displayList.bind(this)
    }

    displayList(text) {
        this.setState({
            note : text,
            items : [...this.state.items, text]
        })
    }

    render(){
        return(
            <div style={{margin:'50px'}}>
                <Todo getNote={this.displayList}/>
                {this.state.items.map((item, index) => (
                    <div key={index}>
                    <input type='checkbox' />
                    {item}
                    </div>
                ))
                }
            </div>
        )
    }
}

export default List;