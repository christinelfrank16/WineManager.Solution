import React from 'react';
import { Table } from 'reactstrap';

function ListData(props){
    const pageWidth = {
        marginTop: '8px',
        width: 'inherit',
        height: '95%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    }
    const alignCenter = {
        textAlign: 'center'
    }
    const highlightRow = {
        backgroundColor: 'lightblue'
    }
    function generateBodyRows(){
        console.log(props);
        return props.slots.map((slot) => {
            const { slotId, wineItem, position } = slot;
            const { name, description, style } = wineItem;
            const { value } = position;
            return (
                <tr id={value} key={slotId} style={props.selectedSlot === value ? highlightRow : null } onClick={(event) => updateHighlightOnClick(event)}>
                    <td>{name}</td>
                    <td>{style}</td>
                    <td>{value}</td>
                </tr>
            )
        })
    }
    function updateHighlightOnClick(event){
        const location = event.target.closest("tr").id;
        props.updateSelectedSlot(location);
    }
    return(
        <div style={pageWidth}>
            <h3 style={alignCenter}>Data List</h3>
            <Table hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Slot</th>
                    </tr>
                </thead>
                <tbody>
                    {generateBodyRows()}
                </tbody>
            </Table>
        </div>
    )
}
export default ListData;