import React from 'react';
import { Transition } from 'react-transition-group';
import ListData from './ListData';
import AddWine from './AddWine'

function SidebarContent(props){
    const showList = 'Show List';
    const addWine = 'Add Wine';
    const duration = 1000;

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
            return <ListData />;
        } else if (props.sideBarData === addWine){
            return <AddWine />;
        } else {
            return;
        }
    }

    const sidebarStyle = {
        transitionProperty: 'width, opacity',
        transitionDuration: `${duration}ms`
      }

    const sidebarTransitionStyles = {
        entering: { width: 0 },
        entered: { width: '30vw' },
        exiting: { width: '30vw' },
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