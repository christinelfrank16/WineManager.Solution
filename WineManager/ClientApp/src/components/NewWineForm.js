import React from 'react';
import { Form, Input, Label, FormGroup } from 'reactstrap';

function NewWineForm(){
    const formStyle = {
        margin: '8px',
        borderTop: '1px solid lightgrey',
        paddingTop: '8px'
    }
    return(
        <div style={formStyle}>
            <Form id='wine-from-scratch'>
                 <FormGroup>
                     <Label for='name'>Name</Label>
                     <Input type='text' id='name' />
                 </FormGroup>
                 <FormGroup>
                     <Label for='type'>Type</Label>
                     <Input type='text' id='type' />
                 </FormGroup>
            </Form>
        </div>
    )
}

export default NewWineForm;