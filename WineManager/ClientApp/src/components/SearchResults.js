import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function SearchResults(props) {
    const searchResultsStyle = {
        marginTop: '5%'
    }
    return (
      <div style={searchResultsStyle}>
        <h3>Results</h3>
        <ListGroup>
            {props.list.map((item) => {
                const { wineItemId, name, style } = item;
                return(<ListGroupItem key={wineItemId} tag="button" action>{name} - {style}</ListGroupItem>)
            })}
        </ListGroup>
      </div>
    );
  }
  
  export default SearchResults;