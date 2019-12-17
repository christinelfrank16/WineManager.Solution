import React from 'react';
import Sidebar from './Sidebar';
import Location from './Location';



function LocationLayout(props){

    return (
        <div className="row">
            <div className="col">
                <Sidebar />
            </div>
            <div className="col">
                <Location locationId={props.locationId}/>
            </div>
        </div>
    )
}

export default LocationLayout;