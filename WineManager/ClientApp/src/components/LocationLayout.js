import React from 'react';
import Sidebar from './Sidebar';
import Location from './Location';



function LocationLayout(props){
    const layoutStyle = {
        display: 'flex',
        width: '90vw'
    }
    return (
        <div style={layoutStyle}>
            <Sidebar />
            <Location locationId={props.locationId}/>
        </div>
    )
}

export default LocationLayout;