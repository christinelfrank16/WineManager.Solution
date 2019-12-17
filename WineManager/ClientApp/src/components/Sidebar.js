import React, { useState } from 'react';

function Sidebar(){
    const [showSidebar, toggleShow ] = useState(null);
    const showList = 'showList';
    const addWine = 'addWine'
    function sideButtonsToShow(){
        let buttons = [showList, addWine];
        if(buttons.indexOf(showSidebar) !== -1){
            buttons.splice(buttons.indexOf(showSidebar), 1)
        }
        return buttons;
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
    return (
        <div>

        </div>
    )
}

export default Sidebar;