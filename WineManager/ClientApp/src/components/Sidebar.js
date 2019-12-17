import React from 'react';
import SidebarIcon from './SidebarIcon';
import SidebarContent from './SidebarContent';
import './Sidebar.css';

function Sidebar(props){
      
    function handleIconClick(open){
        if(open){
            props.changeShow('open');
        } else {
            props.changeShow(null);
        }
    }
    
    return (
        <div id='sidebar-container'>
            <SidebarIcon onIconClick={handleIconClick} isOpen={props.showSidebar} />
            <SidebarContent sideBarData={props.showSidebar} isOpen={props.showSidebar !== null ? true : false } onContentChange={props.changeShow} />
        </div>
    )
}

export default Sidebar;