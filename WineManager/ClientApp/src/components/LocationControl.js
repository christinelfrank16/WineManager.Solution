import React from 'react';
import Sidebar from './Sidebar';
import Location from './Location';
import { connect } from 'react-redux';
import { getLocationById } from './../actions/active-location-actions';
import variables from './../constants';
const { v } = variables;



class LocationLayout extends React.Component{
    constructor(props){
        super(props);
        this.createLocationGrid = this.createLocationGrid.bind(this);
        this.handleSlotClick = this.handleSlotClick.bind(this);
        this.updateSidebar = this.updateSidebar.bind(this);
        this.updateSelectedSlot = this.updateSelectedSlot.bind(this);
        this.state = {
            wineGrid: [[]],
            showSidebar: null,
            selectedSlot: null
        };
    }
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(getLocationById(this.props.locationId)).then(() => this.setState({wineGrid: this.createLocationGrid()}));
    }
    componentDidUpdate(){
        let newWineGrid = this.state.wineGrid.slice();
        console.log(this.state.activeLocation);
        if(this.state.activeLocation){
            console.log("in if state")
            let slots = this.state.activeLocation.slots;
            slots.forEach(slot => {
                let x = slot.position.value.substring(0, slot.position.value.indexOf('-'));
                let y = slot.position.value.substring(slot.position.value.indexOf('-')+1);
                newWineGrid[x][y].slotId = slot.slotId;
            });
            this.setState({wineGrid: newWineGrid});
        }
    }

    createLocationGrid(){
        let wineGrid = [];
        let slots = this.props.activeLocation.slots;
        for(let i=0; i<this.props.activeLocation.xSlotCount; i++){
            let row=[];
            for(let j=0; j<this.props.activeLocation.ySlotCount; j++){
                let slot = slots.find((slot) => slot.position.value === `${i}-${j}`);
                if(slot){
                    row.push({ position: `${i}-${j}`, x: i, y: j, slotId: slot.slotId });
                } else {
                    row.push({position: `${i}-${j}`, x: i, y: j, slotId: 0});
                }
            }
            wineGrid.push(row);
        }
        return wineGrid;
    }

    updateSidebar(value){
        this.setState({showSidebar: value});
    }
    updateSelectedSlot(value){
        this.setState({selectedSlot: value});
    }

    handleSlotClick(position, slotId){
        if(slotId === 0){
            this.setState({showSidebar: v.ADD_WINE, selectedSlot: position});
        } else {
            this.setState({selectedSlot: position})
        }
    }

    render(){
        const layoutStyle = {
            display: 'flex',
            width: '90vw'
        }
        console.log("props", this.props);
        return (
            <div style={layoutStyle}>
                <Sidebar locationId={this.props.locationId} selectedSlot={this.state.selectedSlot} updateSelectedSlot={this.updateSelectedSlot} showSidebar={this.state.showSidebar} changeShow={this.updateSidebar}/>
                <Location activeLocation={this.props.activeLocation} wineGrid={this.state.wineGrid} onSlotClick={this.handleSlotClick}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        activeLocation: state.activeLocation
    }
}

export default connect(mapStateToProps)(LocationLayout);