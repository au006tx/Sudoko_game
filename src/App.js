import React from 'react';
import './App.css';
import Sudoko from './components/sudoko';

class App extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return(
        <div style={{marginLeft:'100px', marginRight:'50px'}}>
          <h2 > Sudoko Game </h2>
          <span>by Salman Ahmed</span>
          <span><ul>
            <li>
              In this game user has 3 attempts to Guess the correct Number, for each and every wrong input color changes, for 1st wrong input color changes to green and for 2nd orange and for 3rd wrong input it changes to red and you are blocked, and the Total wrong attempts will be recorded and for correct input the cell color changes to blue.
            </li>
            </ul>
            </span>
        <div style={{marginTop:'2px', marginLeft:'50px'}}>
        <Sudoko />
        </div>   
       
        </div>

    
      
    )
  }

}


export default App;
