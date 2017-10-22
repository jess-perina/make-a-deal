import React from 'react';

import blueDoor from './images/blue_door.png'
import greenDoor from './images/green_door.png'
import orangeDoor from './images/orange_door.png'
import blueDoorFire from './images/blue_door_fire.png'
import greenDoorFire from './images/green_door_fire.png'
import orangeDoorFire from './images/orange_door_fire.png'

import './styles/Doors.css';


const doorList = (props) => {
  // gather door images
  const arrayOfDoors = [blueDoor, orangeDoor, greenDoor];
  const doors = arrayOfDoors.map((door, index) => {
    // let doorName = door.slice(14).slice(0, -18) + 'Door';
    // set the name
    let doorName = `${door.slice(14, 15).toUpperCase() + door.slice(15).slice(0, -18)} Door`;
    
    function imagePick(doorName) {
      const fireDoors = [blueDoorFire, orangeDoorFire, greenDoorFire];
      if (doorName === props.openDoor) {
        return fireDoors[index]
      }
      return door;
    }

    return (
      <img 
      className="door"
      src={imagePick(doorName)}
      key={doorName}
      alt={doorName}
      onClick={(event) => doorName === props.openDoor ? null : props.doorClick(doorName)}
    />)
  })

  return (
    <div className="doorContainer">
      {doors}
    </div>
  );
};

export default doorList;