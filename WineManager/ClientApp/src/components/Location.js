import React from 'react';
import WineGrid from './WineGrid';

function Location(props){
    const locationStyle = {
        width: '100%',
        textAlign: 'center'
    }
    return(
        <div style={locationStyle}>
            <h1>{props.activeLocation.name}</h1>
    
            <WineGrid grid={props.wineGrid} onSlotClick={props.onSlotClick}/>
        </div>
    )
}

export default Location;
