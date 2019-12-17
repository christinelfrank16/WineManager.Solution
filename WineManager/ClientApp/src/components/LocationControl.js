import React, { useState }  from 'react';
import Sidebar from './Sidebar';
import Location from './Location';
import variables from './../constants';
const { v } = variables;



function LocationLayout(props){
    const [showSidebar, changeShow] = useState(null);
    const [selectedSlot, updateSlot] = useState(null);

    function handleSlotClick(position, slotId){
        updateSlot(position);
        if(slotId === 0){
            changeShow(v.ADD_WINE);
        }
    }

    const layoutStyle = {
        display: 'flex',
        width: '90vw'
    }
    return (
        <div style={layoutStyle}>
            <Sidebar showSidebar={showSidebar} changeShow={changeShow}/>
            <Location locationId={props.locationId} changeShow={changeShow} onSlotClick={handleSlotClick}/>
        </div>
    )
}

export default LocationLayout;