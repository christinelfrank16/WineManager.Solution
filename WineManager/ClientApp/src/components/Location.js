import React from 'react';
import WineGrid from './WineGrid';
import { connect } from 'react-redux';
import { getLocationById } from './../actions/active-location-actions';


class Location extends React.Component {
    constructor(props){
        super(props);
        this.createLocationGrid = this.createLocationGrid.bind(this);
        this.state = {
            wineGrid: [[]]
        };
    }
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(getLocationById(this.props.locationId)).then(() => this.setState({wineGrid: this.createLocationGrid()}));
    }

    createLocationGrid(){
        let wineGrid = [];
        console.log("active", this.props.activeLocation);
        for(let i=0; i<this.props.activeLocation.xSlotCount; i++){
            let row=[];
            for(let j=0; j<this.props.activeLocation.ySlotCount; j++){
                row.push({position: `${i}-${j}`, x: i, y: j});
            }
            wineGrid.push(row);
        }
        return wineGrid;
    }

    
    render(){
        const locationStyle = {
            width: '100%',
            textAlign: 'center'
        }
        return(
            <div style={locationStyle}>
                <h1>{this.props.activeLocation.name}</h1>
        
                <WineGrid grid={this.state.wineGrid}/>
        
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        activeLocation: state.activeLocation
    }
}

export default connect(mapStateToProps)(Location);
