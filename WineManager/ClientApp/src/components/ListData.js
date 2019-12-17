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
    function generateBodyRows(){

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