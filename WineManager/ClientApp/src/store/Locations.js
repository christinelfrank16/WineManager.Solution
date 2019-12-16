import * as types from "./../constants/actionTypes";

const initialState = {locations: []};

export const postNewLocation = {
    addLocation: locationData => async(dispatch, getState) => {
        const url = `api/locations`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(locationData)
        });
        const locations = await response.json();
        console.log(locations);
        dispatch({type: types.ADD_LOCATION })
    }
    
}