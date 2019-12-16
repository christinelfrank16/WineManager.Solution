import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

const Location = props => (
    <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p>Current count: <strong>{props.count}</strong></p>

        <button className="btn btn-primary" onClick={props.increment}>Increment</button>
    </div>
);

const mapStateToProps = state => {
    return {
        slots: state.slots
    }
}

export default connect(mapStateToProps)(Location);
