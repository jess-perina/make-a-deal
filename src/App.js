import React, { Component } from 'react';
import './styles/App.css';
import Doors from './Doors'
import Message from './Message'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChoice: 1,
      winningDoor: '',
      losingDoors: [],
      openDoor: '',
      text: `There are three doors. Behind two doors there are BAD THINGS. Behind one door is an AWESOME THING. Choose a door...`
    }
    this.handleDoorClick = this.handleDoorClick.bind(this);
  }

  componentDidMount() {
    let doors = ['Blue Door', 'Green Door', 'Orange Door']
    this.pickWinner(doors);
  }

  // randomly select winning door
  pickWinner(doorArray) {
    const winner = Math.floor(Math.random() * 3);
    const winningDoor = doorArray[winner];
    const losingDoors = [...doorArray.slice(0, doorArray.indexOf(winningDoor)), ...doorArray.slice(doorArray.indexOf(winningDoor) + 1)];
    this.setState({winningDoor: winningDoor, losingDoors: losingDoors})
  }

  handleDoorClick(door) {
    if (this.state.currentChoice === 1) this.firstPickDoor(door);
    else this.secondPickDoor(door);
  }

  // choose door to open after first guess
  firstPickDoor(door) {
    let openDoor, otherDoor, randomChoice, text;
    // if the door selected is the winner
    if (this.state.winningDoor === door) {
      // randomly select losing door to open
      randomChoice = Math.floor(Math.random() * 2);
      openDoor = this.state.losingDoors[randomChoice];
      randomChoice === 0 ? otherDoor = this.state.losingDoors[1] : otherDoor = this.state.losingDoors[0];
    } else {
      // select the other losing door to open
      otherDoor = this.state.winningDoor;
      this.state.losingDoors.indexOf(door) === 0 ? openDoor = this.state.losingDoors[1] : openDoor = this.state.losingDoors[0];
    }

    text = `I opened the ${openDoor} which held a BAD THING. 
        Now if you want to switch you can choose the ${otherDoor}
        or you can keep your first choice and open the ${door}.`;

    this.setState({
      openDoor: openDoor,
      currentChoice: this.state.currentChoice + 1,
      text: text
    });
  }

  // chose door to open after second guess
  secondPickDoor(door) {
    const result = this.state.winningDoor === door;
    if (result) {
      // something fun
      this.props.history.push('/win');
    } else {
      // rick roll
      this.props.history.push('/lose');
    }
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Wanna make a deal?</h2>
          <Message text={this.state.text} />
        </div>
        <div className="door-container">
          <Doors 
            className="doors"
            openDoor={this.state.openDoor}
            doorClick={this.handleDoorClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
