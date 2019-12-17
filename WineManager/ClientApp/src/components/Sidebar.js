import React, { useState } from 'react';
import ListData from './ListData';
import AddWine from './AddWine'

function Sidebar(){
    const [showSidebar, toggleShow ] = useState(null);
    const showList = 'showList';
    const addWine = 'addWine'
    function renderSideButtons(){
        let buttons = [showList, addWine];
        if(buttons.indexOf(showSidebar) !== -1){
            buttons.splice(buttons.indexOf(showSidebar), 1)
        }
        const sideButtonStyle = {
            transform: 'rotate(90deg)',
            float: 'left'
        }
        return (
            <div style={sideButtonStyle}>
                {buttons.map((buttonName) => {
                    return(
                        <button key={buttonName} id={buttonName} className='btn btn-secondary' type='button'>{buttonName}</button>
                    )
                })}
            </div>
        );
    }
    function renderContent(){
        if(showSidebar === showList){
            return <ListData />;
        } else if (showSidebar === addWine){
            return <AddWine />;
        } else {
            return;
        }
    }
    const sideBarStyle = {
        maxWidth: '30vw'
    }
    return (
        <div style={sideBarStyle}>
            {renderSideButtons()}
            {renderContent()}
        </div>
    )
}

export default Sidebar;