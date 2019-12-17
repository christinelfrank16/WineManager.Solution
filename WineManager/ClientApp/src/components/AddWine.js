import React, { useState } from 'react';
import { Form, Input, Button, InputGroup, InputGroupAddon, InputGroupText, Label } from 'reactstrap';
import NewWineForm from './NewWineForm';

function AddWine(props){
    const [contentToShow, updateContent ] = useState(null);
    const pageWidth = {
        width: 'inherit',
        height: '95%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
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
        backgroundColor: 'lightgrey',
        padding: '5px'
    }
    const slotPositionFormStyle = {
        width: '4vw'
    }
    const wineSearchContentStyle = {
        flexGrow: '2'
    }

    function onCreateFromScratchClick(event){
        if(event.target.checked){
            updateContent(<NewWineForm />)
        }
    }

    const parseSlotLocation = {
        col: props.selectedSlot !== null ? props.selectedSlot.substring(0, props.selectedSlot.indexOf("-")) : '0',
        row: props.selectedSlot !== null ? props.selectedSlot.substring(props.selectedSlot.indexOf("-")+1) : '0'
    }

    function handleSlotUpdate(event, axis){
        let position = '';
        if(axis === 'col'){
            position = event.target.value + '-' + parseSlotLocation.row;
        } else if (axis === 'row'){
            position = parseSlotLocation.col + '-' + event.target.value;
        } else {
            position = parseSlotLocation.col + '-' + parseSlotLocation.row;
        }
        props.updateSelectedSlot(position);
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
                <div style={switchStyle} className='custom-control custom-switch'>
                    <input
                    type='checkbox'
                    className='custom-control-input'
                    id='createNewWine'
                    readOnly onClick={(event) => onCreateFromScratchClick(event)}
                    />
                    <label className='custom-control-label' htmlFor='createNewWine'>
                    Create from scratch
                    </label>
                </div>
            </Form>
            <div id="wine-search-content" style={wineSearchContentStyle}>
                {contentToShow}
            </div>
            <Form style={addWineFormStyle} inline>
                <Label className="mr-sm-2">SLOT</Label>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>COL</InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
                <Input type="text" style={slotPositionFormStyle} className="mr-sm-2" value={parseSlotLocation.col} onChange={(event) => handleSlotUpdate(event, 'col')}/>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>ROW</InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
                <Input type="text" style={slotPositionFormStyle} className="mr-sm-2" value={parseSlotLocation.row} onChange={(event) => handleSlotUpdate(event, 'row')}/>
                <Button color="primary">Add</Button>
            </Form>
        </div>
    )
}
export default AddWine;