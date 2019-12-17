import React from 'react';
import WineSlot from './WineSlot';

function WineGrid(props){
    function makeRow(rowArray, rowIndex){
        var rowStyle = {
            padding: '0px',
            margin: '0px',
            fontSize: '0'
          }
          return(
            <div style={rowStyle} key={rowIndex}>
              {rowArray.map((content, colIndex) => <WineSlot content={content} key={`${rowIndex}-${colIndex}`} />)}
            </div>
          )
    }
    const gridStyle = {
      display: 'inline-block',
      margin: '0 auto',
      paddingTop: '2vh'
    }
    return (
        <div style={gridStyle}>
            {props.grid.map((row, rowIndex) => {
                return(makeRow(row, rowIndex));
            })}
        </div>
    )
}

export default WineGrid;