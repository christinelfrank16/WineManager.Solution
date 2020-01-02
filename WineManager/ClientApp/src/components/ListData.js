import React, { useState } from 'react';
import { Table } from 'reactstrap';

function ListData(props){
    const [orderedWineList, updateList] = useState(props.slots);
    const [selectedTableHeader, updateHeaderValue] = useState(null);
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
        return orderedWineList.map((slot) => {
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
    function updateHeader(value){
        if(selectedTableHeader === value){
            updateHeaderValue(null);
            updateList(props.slots);
        } else {
            updateHeaderValue(value);
            sortListByProp(value);
        }
    }

    function sortListByProp(sortingProp){
        sortingProp = sortingProp === 'Type' ? 'style' : sortingProp;
        sortingProp = sortingProp === 'Slot' ? 'value' : sortingProp;
        sortingProp = sortingProp === 'Name' ? 'name' : sortingProp;

        if(sortingProp === 'value'){
            orderedWineList.sort(function(itemA, itemB){
                let valueA = itemA.position.value.substring(0, itemA.position.value.indexOf("-"));
                let valueB = itemB.position.value.substring(0, itemA.position.value.indexOf("-"));
                if(valueA < valueB){
                    return -1;
                }
                if(valueA > valueB){
                    return 1;
                }
                return 0;
            });
        } else {
            orderedWineList.sort(function(itemA, itemB){
                let valueA = itemA.wineItem[sortingProp];
                let valueB = itemB.wineItem[sortingProp];
                if(valueA < valueB){
                    return -1;
                }
                if(valueA > valueB){
                    return 1;
                }
                return 0;
            });
        }
    }

    return(
        <div style={pageWidth}>
            <h3 style={alignCenter}>Wine List</h3>
            <Table hover>
                <thead>
                    <tr>
                        <th style={selectedTableHeader === 'Name' ? highlightRow : null } onClick={() => updateHeader('Name')}>Name</th>
                        <th style={selectedTableHeader === 'Type' ? highlightRow : null } onClick={() =>  updateHeader('Type')}>Type</th>
                        <th style={selectedTableHeader === 'Slot' ? highlightRow : null } onClick={() =>  updateHeader('Slot')}>Slot</th>
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