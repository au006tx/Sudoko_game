import React, { Component } from 'react';
import '../App.css';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color : '#ccc',
            count : 1,
        disabled: false
        };
    }

    valueCheck(value){
    if(this.props.answer != value && value !='' ){
      this.props.countWrong();
            if(this.state.count == 1){
              this.setState({
                color :'#0bff00',
                count: 2,
                disabled: false
              }) 
            }
        else if(this.state.count == 2){
        this.setState({
          color : '#ffac00',
          count: 3,
          disabled: false,
        })
        
        }
        else if(this.state.count == 3){
        this.setState({
          color :'#ff0000',
          count: 4,
          disabled: true,
        })
      }
    }

    if(this.props.answer == value){
      this.setState({
        color :'#77aaff',
        disabled: true
      })
    }
}

    render() {
        return (
            <div className="Box">
            {
                this.props.number ? (
                <div>{this.props.number}</div>
                ) : [( this.props.answer ?
                <input className="Box-input" type="number" 
                onChange={(event) => this.valueCheck(event.target.value)} maxLength={1}
                style={{backgroundColor:this.state.color}} 
                disabled={(this.state.disabled)? "disabled" : ""} /> : null
                )]
            }
            </div> 
        )
    }
}

export default Box;