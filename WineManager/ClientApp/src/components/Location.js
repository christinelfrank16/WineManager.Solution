import React from 'react';
import { connect } from 'react-redux';
import { getLocationById } from './../actions/active-location-actions';


class Location extends React.Component {
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(getLocationById(this.props.locationId));
    }
    render(){
        return(
            <div>
                <h1>{this.props.activeLocation.name}</h1>
        
                <p>This is a simple example of a React component.</p>
        
                <p>Current count: <strong>{this.props.count}</strong></p>
        
                <button className="btn btn-primary" onClick={this.props.increment}>Increment</button>
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
