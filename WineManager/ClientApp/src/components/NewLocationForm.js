import React from 'react';
import { connect } from 'react-redux';
import { addLocation } from './../actions/location-actions';


function NewLocationForm(props){
    let _name = null;
    let _xDim = null;
    let _yDim = null;

    function onSubmitClick(event){
        const { dispatch } = props;
        event.preventDefault();
        dispatch(addLocation({Name: _name.value, XSlotCount: _xDim.value, YSlotCount: _yDim.value}));
        _name.value = '';
        _xDim.value = '';
        _yDim.value = '';
        props.handleNewLocationSubmit(false);
    }
    const buttonStyle = {
        textAlign: 'center'
    }
    return(

        <form onSubmit={(event) => onSubmitClick(event, _name, _xDim, _yDim)}>
            <div className='form-group'>
                <label>Location Name<input type='text' className='form-control' ref={input => _name = input}/></label>
            </div>
            <div className='form-group'>
                <label>Column Count<input type='number' className='form-control' ref={input => _xDim = input}/></label>
            </div>
            <div className='form-group'>
                <label>Row Count<input type='number' className='form-control' ref={input => _yDim = input}/></label>
            </div>
            <div style={buttonStyle}>
                <button type='submit' className='btn btn-primary' >Save</button>
            </div>
        </form>

    )
}
export default connect()(NewLocationForm);