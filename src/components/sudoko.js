import React from 'react';
import Box from './box';
import '../App.css';

class Sudoko extends React.Component {
    constructor(props){
      super(props);
      this.state={
        incorrectAttempts: 0
      }
      this.increment = this.increment.bind(this);
    }
  
    increment(){
      this.setState({
        incorrectAttempts: this.state.incorrectAttempts + 1
      })
    }
   
    render() {
      return (
        <div>
          <div className="full-box">
            <div className="column-box">
              <div className="boxes">
                <Box number={3} />
                <Box answer={1} countWrong={this.increment}/>
                <Box answer={2} countWrong={this.increment}/>
                <Box number={4} />
              </div>
              <div className="boxes">
                <Box number={1} />
                <Box answer={3} countWrong={this.increment}/>
                <Box answer={4} countWrong={this.increment}/>
                <Box number={2} />
              </div>
            </div>
            <div className="column-box">
              <div className="boxes">
                <Box number={4} />
                <Box answer={2} countWrong={this.increment}/>
                <Box answer={1} countWrong={this.increment}/>
                <Box number={3} />
              </div>
              <div className="boxes">
                <Box number={2} />
                <Box answer={4} countWrong={this.increment}/>
                <Box answer={3} countWrong={this.increment}/>
                <Box number={1} />
              </div>
            </div>
          </div>
          <h1>Total wrong attempts:{this.state.incorrectAttempts}</h1>
        </div>
  
      );
    }
  }
  
export default Sudoko;
  