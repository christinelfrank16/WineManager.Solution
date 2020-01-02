import React from 'react';
import { Transition } from 'react-transition-group';
import ListData from './ListData';
import AddWine from './AddWine';
import variables from './../constants';
const { v } = variables;

function SidebarContent(props){
    const showList = v.SHOW_LIST;
    const addWine = v.ADD_WINE;
    const duration = 500;

    function renderSideButtons(){
        let buttons = [showList, addWine];
        if(buttons.indexOf(props.sideBarData) !== -1){
            buttons.splice(buttons.indexOf(props.sideBarData), 1)
        } else if(props.sideBarData === null){
            buttons = [];
        }
        return (
            <span >
                {buttons.map((buttonName) => {
                    return(
                        <button key={buttonName} id={buttonName} className='btn btn-secondary' type='button' onClick={() => props.onContentChange(buttonName)}>{buttonName}</button>
                    )
                })}
            </span>
        );
    }
    
    function renderContent(){
        if(props.sideBarData === showList){
            return <ListData selectedSlot={props.selectedSlot} slots={props.slots}/>;
        } else if (props.sideBarData === addWine){
            return <AddWine locationId={props.locationId} selectedSlot={props.selectedSlot} updateSelectedSlot={props.updateSelectedSlot}/>;
        } else {
            return;
        }
    }

    const sidebarStyle = {
        transitionProperty: 'width, opacity',
        transitionDuration: `${duration}ms`,
        height: '100%'
      }

    const sidebarTransitionStyles = {
        entering: { width: 0 },
        entered: { width: '25vw' },
        exiting: { width: '25vw' },
        exited: { width: 0 }
      }

      const contentTransitionStyles = {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: { opacity: 1 },
        exited: { opacity: 0 }
      }

    return (
        <Transition in={props.isOpen} timeout={duration}>
        {(state) => (
            <div id='sidebar' style={{...sidebarStyle, ...sidebarTransitionStyles[state], ...contentTransitionStyles[state]}}>
                {renderSideButtons()}
                {renderContent()}
            </div>
        )}
        </Transition>
    )
}

export default SidebarContent;