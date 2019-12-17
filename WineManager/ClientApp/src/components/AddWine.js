import React from 'react';
import { Form, Input, Button, InputGroup, InputGroupAddon, InputGroupText, Label } from 'reactstrap';

function AddWine(){
    const pageWidth = {
        width: 'inherit',
        height: '95%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
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
    const addWineFormStyle = {
        alignSelf: 'flex-end',
        backgroundColor: 'lightgrey',
        padding: '5px'
    }
    const slotPositionFormStyle = {
        width: '4vw'
    }
    const wineSearchContentStyle = {
        flexGrow: '2'
    }

    return(
        <div style={pageWidth}>
            <h3 style={alignCenter}>Add Wine</h3>
            <Form inline>
                <div>
                    <Input type="text" placeholder="Search" className="mr-sm-2" style={longInputStyle}/>
                    <Input type="number" placeholder="Vintage" className="mr-sm-2" style={shortInputStyle} />
                    <Button color="success">Search</Button>
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
            <div id="wine-search-content" style={wineSearchContentStyle}>
            </div>
            <Form style={addWineFormStyle} inline>
                <Label className="mr-sm-2">SLOT</Label>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>COL</InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
                <Input type="number" style={slotPositionFormStyle} className="mr-sm-2"/>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>ROW</InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
                <Input type="number" style={slotPositionFormStyle} className="mr-sm-2"/>
                <Button color="primary">Add</Button>
            </Form>
        </div>
    )
}
export default AddWine;