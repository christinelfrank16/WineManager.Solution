import React from 'react';
import { Form, Input, Button } from 'reactstrap';

function AddWine(){
    const pageWidth = {
        width: 'inherit'
    }
    const alignCenter = {
        textAlign: 'center'
    }
    const shortInputStyle = {
        width: '7vw'
    }
    const longInputStyle = {
        width: '9vw'
    }
    const switchStyle = {
        marginLeft: '2vw'
    }

    return(
        <div style={pageWidth}>
            <h3 style={alignCenter}>Add Wine</h3>
            <Form inline>
                <div>
                    <Input type="text" placeholder="Search" className="mr-sm-2" style={longInputStyle}/>
                    <Input type="number" placeholder="Vintage" className="mr-sm-2" style={shortInputStyle} />
                    <Button variant="outline-success">Search</Button>
                </div>
                <div style={switchStyle} className='custom-control custom-switch'>
                    <input
                    type='checkbox'
                    className='custom-control-input'
                    id='searchOutsideCollection'
                    readOnly
                    />
                    <label className='custom-control-label' htmlFor='searchOutsideCollection'>
                    Search outside collection
                    </label>
                </div>
            </Form>
        </div>
    )
}
export default AddWine;