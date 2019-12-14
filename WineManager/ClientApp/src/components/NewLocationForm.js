import React from 'react';

function NewLocationForm(){
    function onSubmitClick(){

    }
    const buttonStyle = {
        textAlign: 'center'
    }
    return(

        <form onSubmit={onSubmitClick}>
            <div className='form-group'>
                <label>Location Name<input type='text' className='form-control'/></label>
            </div>
            <div className='form-group'>
                <label>Column Count<input type='number' className='form-control'/></label>
            </div>
            <div className='form-group'>
                <label>Row Count<input type='number' className='form-control'/></label>
            </div>
            <div style={buttonStyle}>
                <button type='submit' className='btn btn-primary' >Save</button>
            </div>
        </form>

    )
}
export default NewLocationForm;