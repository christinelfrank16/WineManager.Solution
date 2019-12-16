import React from 'react';
import WineSlot from './WineSlot';

function WineGrid(props){
    function makeRow(rowArray, rowIndex){
        var rowStyle = {
            padding: '0px',
            margin: '0px',
            fontSize: '0'
          }
          console.log(rowArray);
          return(
            <div style={rowStyle} key={rowIndex}>
              {rowArray.map((content, colIndex) => <WineSlot content={content} key={`${rowIndex}-${colIndex}`} />)}
            </div>
          )
    }
    return (
        <div>
            {props.grid.map((row, rowIndex) => {
                return(makeRow(row, rowIndex));
            })}
        </div>
    )
}

export default WineGrid;