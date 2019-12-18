import React, { useState } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { Form, Input, Button, InputGroup, InputGroupAddon, InputGroupText, Label } from 'reactstrap';
import NewWineForm from './NewWineForm';
import { addWine, getWine } from '../actions/active-location-actions';

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

    function handleAddNewWineSubmit(event){
        const { dispatch } = props;
        event.preventDefault();
        const newWineForm = $('#wine-search-content').find('#wine-from-scratch');
        let name;
        let type;
        if(newWineForm.length > 0){
            name = $(newWineForm).find('#name')[0].value;
            type = $(newWineForm).find('#type')[0].value;
            const newWineItem = {
                Name: name,
                Style: type,
                // Description: 'p',
                // Vintner: 'p',
                // Varietal: 'p',
                // Vintage: 0,
                // Origin: 'p',
                // Rating: 'p',
                // Score: 0,
                // Scorer: 'p',
                // Alcohol: 0.0
            }
            //console.log(dispatch(getWine()));
            dispatch(addWine(newWineItem, props.selectedSlot, props.locationId));
        }
        
        
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
            <Form style={addWineFormStyle} inline onSubmit={(event) => handleAddNewWineSubmit(event)}>
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
                <Button type='submit' color="primary">Add</Button>
            </Form>
        </div>
    )
}
export default connect()(AddWine);