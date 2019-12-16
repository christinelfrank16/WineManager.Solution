import React from 'react';

function WineSlot(props){
    var tileStyle = {
        width: '50px',
        maxHeight: '50px',
        minHeight: '49px',
        backgroundColor: 'grey',
        display: 'inline-block',
        padding: '0px',
        margin: '0px',
        border: '1px solid darkgrey'
      };
    return (
        <div style={tileStyle}>
            <p>{props.content.position}</p>
        </div>
    )
}

export default WineSlot;