import React from 'react';
import wineBottle from './../assets/wineBottle.png';

function WineSlot(props){
    
      console.log(props.content);
      function tileStyleUpdate(){
          let tileStyle = {
              display: 'inline-block',
              width: '50px',
              height: '50px',
              padding: '0px',
              margin: '0px',
              backgroundColor: 'grey',
              border: '1px solid darkgrey',
          };
          if(props.content.slotId !== 0){
              tileStyle = { ...tileStyle, backgroundImage: `url(${wineBottle})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}
          }
          return tileStyle;
      }
    return (
        <div style={tileStyleUpdate()} onClick={() => props.onSlotClick(props.content.position, props.content.slotId)}>
            {null}
        </div>)
}

export default WineSlot;