import React from 'react';
import { Form, Input, Button } from 'reactstrap';

function AddWine(){
    const shortInputStyle = {
        width: '6vw'
    }
    const header = {
        textAlign: 'center'
    }
    const pageWidth = {
        width: 'inherit'
    }
    return(
        <div style={pageWidth}>
            <h3 style={header}>Add Wine</h3>
            <Form inline>
                <Input type="text" placeholder="Search" className="mr-sm-2" />
                <Input type="number" placeholder="Vintage" className="mr-sm-2" style={shortInputStyle} />
                <Button variant="outline-success">Search</Button>
            </Form>
        </div>
    )
}
export default AddWine;