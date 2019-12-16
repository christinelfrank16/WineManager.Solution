import * as types from "../constants/actionTypes";

export const postNewLocation = {
    addLocation: locationData => async(dispatch) => {
        const url = `api/locations`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(locationData)
        });
        const newLocation = await response.json();
        console.log(newLocation);
        dispatch({type: types.ADD_LOCATION, newLocation })
    }
    
}