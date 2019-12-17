import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'

function SidebarIcon(props){
    const iconStyle = {
        float: 'right'
    }
    return(
        <span style={iconStyle} onClick={() => props.onIconClick(!props.isOpen)}>{props.isOpen !== null ? <FaTimes/> : <FaBars />}</span>
    )
}
export default SidebarIcon;