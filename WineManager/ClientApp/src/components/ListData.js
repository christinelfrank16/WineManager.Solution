import React from 'react';
import { Table } from 'reactstrap';

function ListData(props){
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
    function generateBodyRows(){

    }
    return(
        <div style={pageWidth}>
            <h3 style={alignCenter}>Add Wine</h3>
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