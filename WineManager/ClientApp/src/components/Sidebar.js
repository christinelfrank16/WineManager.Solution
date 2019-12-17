import React, { useState } from 'react';
import SidebarIcon from './SidebarIcon';
import SidebarContent from './SidebarContent';
import './Sidebar.css';

function Sidebar(){
    
    const [showSidebar, changeShow ] = useState(null);
    
    function handleIconClick(open){
        if(open){
            changeShow('open');
        } else {
            changeShow(null);
        }
    }
    
    return (
        <div id='sidebar-container'>
            <SidebarIcon onIconClick={handleIconClick} isOpen={showSidebar} />
            <SidebarContent sideBarData={showSidebar} isOpen={showSidebar !== null ? true : false } onContentChange={changeShow} />
        </div>
    )
}

export default Sidebar;